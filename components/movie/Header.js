import Image from "next/image"

export default function Header({ result }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/"

    return (
        <div className="m-4 md:grid md:grid-cols-2 ">
            <Image layout="responsive" src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` || 
                `${BASE_URL}${result.poster_path}`} height={1080} width={1920} />
            
                <h1 className="my-5 md:my-7 text-center text-4xl  text-white ">
                    {result.title || result.original_name}
                </h1>
            


            
        </div>
    )
}


