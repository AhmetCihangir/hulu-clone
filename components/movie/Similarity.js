import Image from "next/image"
import { useRouter } from "next/router"

function Similarity({ similars }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    const router = useRouter()

    return (
        <div onClick={() => router.push(`/movie/?id=${similars.id}`)} className="px-5 mx-5 my-10 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Image layout="responsive" src={
                `${BASE_URL}${similars.backdrop_path || similars.poster_path}` || 
                `${BASE_URL}${similars.poster_path}`} height={1080} width={1920} />
            <h6 className="mt-1 w-60 text-white">
                {similars.title || similars.original_name}
            </h6>
            
        </div>
    )
}

export default Similarity
