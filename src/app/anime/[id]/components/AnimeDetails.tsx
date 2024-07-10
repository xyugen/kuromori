import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table'
import { IAnimeInfo } from '@consumet/extensions'

interface AnimeDetailsProps {
  animeInfo: IAnimeInfo
}

const AnimeDetails: React.FC<AnimeDetailsProps> = ({ animeInfo }) => {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-xl font-bold'>Details</h2>
      <Table className='w-full md:w-64'>
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
  )
}

export default AnimeDetails