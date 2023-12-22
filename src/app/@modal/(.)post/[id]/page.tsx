import Modal from '@/components/Modal'

export default function page({ params }: { params: {id: string} }) {
    return (
        <Modal>
            <div className='text-4xl text-white'>{ params.id }</div>
        </Modal>
    )
}
