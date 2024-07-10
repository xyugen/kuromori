"use client"

import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const StartWatchingButton = ({ animeId }: { animeId: string }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
  }

  return (
    <Button variant={'default'} className='w-full sm:w-36' onClick={handleClick} disabled={isLoading}>
      {isLoading ?
        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
        :
        <Link href={`/anime/${animeId}/episode/1`}>Start Watching</Link>
      }
      
    </Button>
  )
}

export default StartWatchingButton