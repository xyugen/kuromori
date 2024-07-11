import Header from "@/components/header"
import { ANIME } from "@consumet/extensions";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const gogoanime = new ANIME.Gogoanime();
  const popular = await gogoanime.fetchPopular();
  const recent = await gogoanime.fetchRecentEpisodes();
  
  return (
    <div>
      <Header />
      <main className="p-4 w-full flex flex-col">
        <div className="w-full">
          <h2>Popular</h2>
          <ul className="flex flex-wrap gap-4 justify-center">
            {popular.results.map((anime) => (
              <li key={anime.id} className="w-2/3 md:1/6 lg:w-1/12">
                <Link href={`/anime/${anime.id}`} className='space-y-2'>
                  <Image
                    src={anime.image!}
                    alt={anime.title.toString()!}
                    width={400}
                    height={600}
                    className='rounded-md h-40 md:h-fit object-cover'
                    draggable='false'
                  />
                  <p className="text-foreground/70 font-bold">{typeof anime.title === 'string' ? anime.title : anime.title.english}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
