export default function page({ params }: {
    params: { id: string }
}) {
    return (
        <>
            <h2 className='text-xl mb-3'>{ params.id }</h2>
            <div>사진 영역</div>
            <div>내용</div>
        </>
    )
}