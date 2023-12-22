export default function page({ params }: {
    params: { id: string }
}) {
    return (
        <div className='flex gap-4 mt-7'>
            <div className='w-7/12 h-[466px] flex justify-center items-center bg-slate-400'>{ params.id }</div>
            <div className='w-auto'>글 내용 내용</div>
        </div>
    )
}