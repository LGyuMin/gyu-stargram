'use client'

import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'

const aTagClassName = 'text-xs text-gray-500 hover:underline hover:text-gray-400';

export default function page() {
    const router = useRouter()
    const [imageSrc, setImageSrc] = useState('')
    const [content, setContent] = useState('')
    const imgInputRef = useRef() as React.MutableRefObject<HTMLInputElement>

    const changeImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        let { files } = e.target
        if (files === null) return

        if (!files[0].name.match(/(.*?).(bmp|jpg|jpeg|gif|png)/)) {
            alert('사진만 업로드 가능합니다.')
        } 

        const reader = new FileReader()
        reader.readAsDataURL(files[0])

        reader.onloadend = () => {
            setImageSrc(reader.result as string)
        };
    }, [])

    const openImageUploadModal = useCallback(() => {
        imgInputRef.current.click()
    }, [])

    const savePost = useCallback(() => {
        if (imageSrc.length === 0) {
            alert('사진을 선택해주세요.')
            return
        }

        if (content.trim().length === 0) {
            alert('내용을 입력해주세요.')
            return
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                imageSrc,
                content,
                createdAt: dayjs().format('YYYY-MM-DD')
            })
        }

        fetch('http://localhost:9999/posts', options)
        .then(res => res.json())
        .then(result => {
            const lastId = result.id;
            router.refresh();
            router.push(`/`);
        })
        
    }, [imageSrc, content])

    return (
        <div className='py-4 flex flex-col gap-3'>
            <h2 className='text-xl mb-3'>Write Post</h2>
            <div className='flex flex-row gap-3'>
                <div className='w-[200px] h-[200px] bg-white border-gray-300 border-4 rounded-md hover:border-gray-200'>
                    <input 
                        type="file" 
                        accept='.jpg, .jpeg, .png' 
                        className='hidden' 
                        ref={imgInputRef} 
                        onChange={changeImage}
                    />
                    <button 
                        className='w-full h-full flex justify-center items-center'
                        onClick={openImageUploadModal}
                    >
                        {
                            imageSrc ?
                                <img src={imageSrc} alt="image preview" />
                            :
                                <svg 
                                    className="h-40 w-40 text-gray-300 hover:border-gray-200 hover:text-gray-200"  
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor" 
                                    strokeWidth="2"  
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  
                                    <circle cx="8.5" cy="8.5" r="1.5" />  <polyline points="21 15 16 10 5 21" />
                                </svg>
                        }
                    </button>
                </div>
                <textarea
                    className='w-[calc(100%-200px)] border h-[200px] overflow-y-scroll resize-none p-2 rounded outline-1 outline-blue-500/50'
                    placeholder='내용을 입력하세요.'
                    value={content}
                    onChange={({target}) => setContent(target.value) }
                    maxLength={200}
                />
            </div>
            <div className='flex gap-2 justify-end'>
                <a href="#" className={aTagClassName} onClick={savePost}>Save</a>
                <Link href='/' className={aTagClassName}>Cancle</Link>
            </div>
        </div>
    )
}