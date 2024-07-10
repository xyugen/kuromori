import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ANIME, IAnimeInfo, ITitle, META } from '@consumet/extensions'
import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = async ({ params }: { params: { id: string }}) => {
  const gogoanime = new ANIME.Gogoanime();
  const anilist = new META.Anilist();
  const anime = await gogoanime.fetchAnimeInfo(params.id);
  const meta = await anilist.search(params.id);
  const animeInfo: IAnimeInfo = await anilist.fetchAnimeInfo(meta.results[0].id);
  
  if (!animeInfo) {
    return <div>Anime not found</div>
  }

  return (
    <div>
      <Header />
      <main className='p-2 md:p-12 lg:p-24'>
        <div className='flex flex-col gap-14 md:gap-20'>
          <div className='flex gap-2 md:gap-8'>
            <Image
              src={animeInfo.image!}
              alt={animeInfo.title.english}
              width={200}
              height={200}
              className='rounded-md h-40 md:h-fit object-cover'
              draggable='false'
            />

            {/* Content */}
            <div className='flex flex-col justify-center gap-3'>
              <div>
                <h1 className='text-2xl md:text-3xl font-bold'>{animeInfo.title.english}</h1>
                <span className='text-foreground/70 text-sm'>{animeInfo.title.romaji}</span>
              </div>
              <p className='text-sm md:text-base text-foreground/70'>{animeInfo.description}</p>
              <div className='flex items-center gap-2'>
                <Star className='h-4 w-4 text-accent' />
                <span className='text-sm'>{animeInfo.rating || 'N/A'}</span>
              </div>
              <div className='flex gap-2 flex-wrap'>
                <Button variant='default' className='w-full sm:w-fit'>Start Watching</Button>
                <Button variant='outline' className='w-full sm:w-fit'>Add to My List</Button>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue='overview'>
            <TabsList>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='episodes'>Episodes</TabsTrigger>
            </TabsList>
            <TabsContent value='overview'>
              <div className='flex gap-4'>
                {/* Details */}
                <div className='flex flex-col gap-4'>
                  <h2 className='text-xl font-bold'>Details</h2>
                  <Table className='w-64'>
                    <TableBody>
                      <TableRow>
                        <TableHead>Type</TableHead>
                        <TableCell>{animeInfo.type || 'N/A'}</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableHead>Episodes</TableHead>
                        <TableCell>{animeInfo.totalEpisodes || 'N/A'}</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableHead>Genres</TableHead>
                        <TableCell>{animeInfo.genres!.join(', ') || 'N/A'}</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableHead>Aired</TableHead>
                        <TableCell>{animeInfo.aired || 'N/A'}</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableHead>Status</TableHead>
                        <TableCell>{animeInfo.status || 'N/A'}</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableHead>Season</TableHead>
                        <TableCell>{animeInfo.season || 'N/A'}</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableHead>Studios</TableHead>
                        <TableCell>{animeInfo.studios || 'N/A'}</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableHead>Source</TableHead>
                        <TableCell>{animeInfo.source || 'N/A'}</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableHead>Rating</TableHead>
                        <TableCell>{animeInfo.rating || 'N/A'}</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableHead>Duration</TableHead>
                        <TableCell>{animeInfo.duration || 'N/A'} mins</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                {/* Description */}
                <div className='w-full space-y-4'>
                  <h2 className='text-xl font-bold'>Description</h2>
                  <p className='text-foreground/70'>{animeInfo.description}</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value='episodes'>
              <h2 className='text-xl font-bold'>Episodes</h2>
              <div className='flex flex-wrap gap-7'>
                {animeInfo.episodes?.map((episode, index) => (
                  <Link href={`/anime/${params.id}/episode/${index + 1}`} key={index}>
                    <Image
                      src={episode.image!}
                      alt={episode.title!}
                      width={150}
                      height={150}
                      className='rounded-md h-40 md:h-fit object-cover'
                      draggable='false'
                    />
                    <h3 className='text-base font-medium'>{episode.title}</h3>
                    <p className='text-foreground/70'>{episode.releaseDate}</p>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

export default Page