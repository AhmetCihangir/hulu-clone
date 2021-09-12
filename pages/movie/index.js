import Head from 'next/head'
import Header from '../../components/movie/Header'
import Details from '../../components/movie/Details'
import Similarity from '../../components/movie/Similarity'
import Nav from '../../components/Header'


export default function Movie(props) {
    return (
        <div>
            <Head>
                <title>Hulu - {props.results.original_title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />

            <Header result={props.results} />

            <Details result={props.results} />

            <p className="my-5 mx-10 text-white text-3xl">
                Similar Movies
            </p>

            <div className="flex overflow-x-scroll scrollbar-hide">
                {
                    props.similars.results.length &&
                    props.similars.results.map(sml => (
                        <Similarity similars={sml} key={sml.id} />
                        ))
                }
            </div>
            
        </div>
    )
}



export async function getServerSideProps(context){
    const id = context.query.id

    const req1 = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`)
    const results = await req1.json()

    const req2 = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.API_KEY}&page=1`)
    const similars = await req2.json()
    
    
    return {
        props :{
            similars,
            results
            // results : {
            //     original_title : "Suicide Squad"
            // }
        }
    }
}
