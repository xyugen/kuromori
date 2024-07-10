import React from 'react'

interface AnimeDescriptionProps {
  description: string
}

const AnimeDescription: React.FC<AnimeDescriptionProps> = ({ description }) => {
  return (
    <div className='w-full space-y-4'>
      <h2 className='text-xl font-bold'>Description</h2>
      <p className='text-foreground/70'>{description}</p>
    </div>
  )
}

export default AnimeDescription