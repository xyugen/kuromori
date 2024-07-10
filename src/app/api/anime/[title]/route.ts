import axios from "axios";

export async function GET(request: Request, { params }: { params: { title: string } }) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page")!) || 1;
  const title = encodeURIComponent(params.title);

  const response = await axios
    // .get("https://consumet-api-pied.vercel.app/anime/gogoanime/test?page=1")  
    .get(`${process.env.CONSUMET_API_URL!}/anime/gogoanime/${title}?page=${page}`)
    .then(response => response.data)
    .catch(error => console.log(error));

  return new Response(JSON.stringify(response), { status: 200 });
}