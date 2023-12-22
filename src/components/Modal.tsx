'use client'

export default function Modal({ children }: { children: React.ReactNode }) {
    return (
        <div className='fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60'>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full'>
                {children}
            </div>
        </div>
    )
}
