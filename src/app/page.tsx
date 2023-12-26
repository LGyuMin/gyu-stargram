import Link from 'next/link'
import { IPost } from '@/types'

export default async function Home() {
    const res = await fetch('http://localhost:9999/posts', {cache: 'no-store'})
    const post_list: IPost[] = await res.json()
    return (
        <div className='py-4'>
            <h2 className='text-xl mb-3'>My Posts</h2>
            <ul className='grid grid-cols-3 gap-2'>
                {
                    post_list.map(post => (
                        <li className='h-[261px] bg-black flex' key={post.id}>
                            <Link href={`/post/${post.id}`} scroll={false} className='w-full h-full text-white text-4xl'>
                                <img className='object-cover aspect-square' src={post.imageSrc} alt="post image" />
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
