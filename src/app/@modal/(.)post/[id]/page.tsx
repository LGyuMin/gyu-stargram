import Modal from '@/components/Modal'
import { IPost } from '@/types'

export default async function page({ params }: { params: {id: string} }) {
    const res = await fetch(`http://localhost:9999/posts/${params.id}`)
    const post: IPost = await res.json()
    return (
        <Modal>
            <div className='w-[450px] h-[450px] bg-white mx-auto cursor-pointer'>
                <img className='object-cover aspect-square' src={post.imageSrc} alt="post image" />
            </div>
        </Modal>
    )
}
