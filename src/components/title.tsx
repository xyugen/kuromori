import Link from 'next/link'
import React from 'react'

const Title = ({ ...className }: { className?: string }) => {
  return (
    <Link href={'/'} draggable='false' {...className}>
      <h1 className='text-3xl lg:text-4xl font-bold font-yuji-syuku select-none text-nowrap'>黒<span className='text-primary'>森</span></h1>
      <span className='sr-only text-nowrap'>Kuromori</span>
    </Link>
  )
}

export default Title