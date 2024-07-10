import React from 'react'
import AnimeInfo from './components/AnimeInfo'

const Page = async ({ params }: { params: { id: string }}) => {
  return (
    <AnimeInfo params={params} />
  )
}

export default Page