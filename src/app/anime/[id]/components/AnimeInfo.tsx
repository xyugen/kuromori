import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { IAnimeInfo, META } from '@consumet/extensions'
import React from 'react'
import AnimeHeader from './AnimeHeader'
import AnimeDetails from './AnimeDetails'
import AnimeDescription from './AnimeDescription'
import AnimeEpisodes from './AnimeEpisodes'
import { parseSearch } from '@/lib/utils'

const AnimeInfo = async ({ params }: { params: { id: string }}) => {
  const anilist = new META.Anilist();
  const searchQuery = parseSearch(params.id);
  const meta = await anilist.search(searchQuery);
  const animeInfo: IAnimeInfo = await anilist.fetchAnimeInfo(meta.results[0].id);

  if (!animeInfo) {
    return <div>Anime not found</div>
  }

  return (
    <main className='p-2 md:p-12 lg:p-24'>
      <div className='flex flex-col gap-14 md:gap-20'>
        <AnimeHeader animeInfo={animeInfo} animeId={params.id} />
        <Tabs defaultValue='overview'>
          <TabsList>
            <TabsTrigger value='overview'>Overview</TabsTrigger>
            <TabsTrigger value='episodes'>Episodes</TabsTrigger>
          </TabsList>
          <TabsContent value='overview'>
            <div className='flex gap-4 flex-wrap-reverse md:flex-nowrap'>
              <AnimeDetails animeInfo={animeInfo} />
              <AnimeDescription description={animeInfo.description} />
            </div>
          </TabsContent>
          <TabsContent value='episodes'>
            <AnimeEpisodes episodes={animeInfo.episodes} animeId={params.id} />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

export default AnimeInfo