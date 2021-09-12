import { StarIcon } from "@heroicons/react/solid"

function Details({ result }) {
    return (
        <div className="mt-10 ml-4">
            <h2 className="text-white text-2xl"> {result.tagline && result.tagline}</h2>
            <div className="flex w-80 mt-2 justify-evenly">
                {result.genres && result.genres.map(g => (
                    <h3 className="text-blue-700" key={g.id}> #{g.name}  </h3>
                )) }
            </div>
            <div className="divide-opacity-100 divide-solid" style={{height : 10, borderColor : "red"}} />
            <h4 className="text-gray-300">
                {result.overview}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5">
                {result.budget && <h5 id="budget" className="flex justify-evenly">
                    <p className="text-white">Budget:</p><p> {new Intl.NumberFormat("en-US",{style : "currency",currency : "USD",maximumFractionDigits : 1}).format(result.budget)} </p> 
                </h5>}
                {result.revenue && <h5 id="revenue" className="flex justify-evenly">
                    <p className="text-white">Revenue:</p><p> {new Intl.NumberFormat("en-US",{style : "currency",currency : "USD",maximumFractionDigits : 1}).format(result.revenue)} </p> 
                </h5>}
                <h5 id="star" className="text-white flex justify-center">
                    <StarIcon className="fill-current text-yellow-300 h-6" /> {result.vote_average}/10
                </h5>
                <h5 id="lan" className="flex justify-evenly">
                    Lan: {"  "} {result.spoken_languages.map(l => <p key={l.english_name}> {l.english_name} </p>)}
                </h5>
                <h5 id="homepage" className="flex justify-center">
                    <a href={result.homepage} className="no-underline text-blue-400">Homepage</a>
                </h5>
                <h5 id="release" className="text-white text-center">
                    {result.release_date || result.first_air_date}
                </h5>
            </div>
            
        </div>
    )
}

export default Details
