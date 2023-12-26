import Modal from '@/components/Modal'

export default function page({ params }: { params: {id: string} }) {
    return (
        <Modal>
            <div className='flex gap-4 w-[800px] bg-white mx-auto'>
                <div className='w-7/12 h-[466px] flex justify-center items-center bg-slate-400'>{ params.id }</div>
                <div className='w-auto py-4'>글 내용 내용</div>
            </div>
        </Modal>
    )
}
