import React from 'react'

const Page = ({ params }: { params: { id: string }}) => {
  return (
    <main>
      <h1>{params.id}</h1>
    </main>
  )
}

export default Page