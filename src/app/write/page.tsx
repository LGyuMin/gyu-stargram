'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';

const aTagClassName = 'text-xs text-gray-500 hover:underline hover:text-gray-400';

export default function page() {
    const [img, setImg] = useState('')
    const imgInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const setImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        let { files } = e.target;
        if (files === null) return;

        if (!files[0].name.match(/(.*?).(bmp|jpg|jpeg|gif|png)/)) {
            alert('it is not a file')
        } 

        const reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onloadend = () => {
            setImg(reader.result as string);
        };
    }, [])

    const onBtnClick = () => {
        imgInputRef.current.click()
    }

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
                        onChange={setImage}
                    />
                    <button 
                        className='w-full h-full flex justify-center items-center'
                        onClick={onBtnClick}
                    >
                        {
                            img ?
                                <img src={img} alt="image preview" />
                            :
                                <svg 
                                    className="h-40 w-40 text-gray-300 hover:border-gray-200"  
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor" 
                                    strokeWidth="2"  
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="12" y1="5" x2="12" y2="19" />  
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                        }
                    </button>
                </div>
                <textarea
                    className='w-[calc(100%-200px)] border h-[200px] overflow-y-scroll resize-none p-2 rounded outline-1 outline-blue-500/50'
                    placeholder='내용을 입력하세요.' 
                />
            </div>
            <div className='flex gap-2 justify-end'>
                <a href="#" className={aTagClassName}>Save</a>
                <Link href='/' className={aTagClassName}>Cancle</Link>
            </div>
        </div>
    )
}