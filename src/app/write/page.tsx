import Link from 'next/link';

export default function page() {
    const aTagClassName = 'text-xs text-gray-500 hover:underline hover:text-gray-400'
    return (
        <div className='py-4 flex flex-col gap-3'>
            <h2 className='text-xl mb-3'>Write Post</h2>
            <div>사진 올리기 영역</div>
            <textarea
                className='w-full border h-[300px] overflow-y-scroll resize-none p-2 rounded outline-1 outline-blue-500/50'
                placeholder='내용을 입력하세요.' 
            />
            <div className='flex gap-2 justify-end'>
                <a href="#" className={aTagClassName}>Save</a>
                <Link href='/' className={aTagClassName}>Cancle</Link>
            </div>
        </div>
    )
}