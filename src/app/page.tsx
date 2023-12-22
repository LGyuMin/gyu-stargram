import Link from 'next/link'

const test_data = [1, 2, 3, 4, 5, 6, 7]

export default function Home() {
    return (
        <div className='py-4'>
            <h2 className='text-xl mb-3'>My Posts</h2>
            <ul className='grid grid-cols-3 gap-2'>
                {
                    test_data.map(n => (
                        <li className='h-[261px] bg-black flex'>
                            <Link href={`/post/${n}`} className='w-full h-full text-white text-4xl'>{ n }</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
