'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IPost } from '@/types'
import { useRouter } from 'next/navigation';

const aTagClassName = 'text-xs text-gray-500 hover:underline hover:text-gray-400';

export default function page({ params }: {
    params: { id: string }
}) {
    const router = useRouter()
    const [post, setPost] = useState<IPost | null>(null)

    useEffect(() => {
        fetch(`http://localhost:9999/posts/${params.id}`)
        .then(res => res.json())
        .then(post => setPost(post))
    }, [])

    const deletePost = () => {
        if (confirm('해당 포스팅을 지우시겠습니까?')) {
            const options = { method: 'DELETE' }
    
            fetch(`http://localhost:9999/posts/${params.id}`, options)
            .then(res => res.json)
            .then(result => {
                router.push('/')
                router.refresh()
            })
        }
    }

    if (post === null) return null;
    return (
        <>
            <div className='flex gap-4 mt-7'>
                <div className='w-7/12 h-[466px] flex justify-center items-center bg-white'>
                    <img className='object-cover aspect-square' src={post.imageSrc} alt="post image" />
                </div>
                <div className='w-auto'>{ post.content }</div>
            </div>
            <div className='flex gap-2 justify-start mt-5'>
                <Link href={`/edit/${params.id}`} className={aTagClassName}>Edit</Link>
                <a href="#" className={aTagClassName} onClick={deletePost}>Delete</a>
            </div>
        </>
    )
}