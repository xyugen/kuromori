import Link from 'next/link'
import React from 'react'

const Title = () => {
  return (
    <Link href={'/'} draggable='false'>
      <h1 className='text-3xl font-bold font-yuji-syuku select-none'>黒<span className='text-primary'>森</span></h1>
      <span className='sr-only text-nowrap'>Kuromori</span>
    </Link>
  )
}

export default Title