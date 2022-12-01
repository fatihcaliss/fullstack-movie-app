import React from 'react'
import Link from "next/link"

const movieDetail = ({ movie }) => {
    console.log(movie);
    return (
        <>
            <div className="bg-white py-8 md:py-32 dark:bg-slate-900 dark:text-slate-100 text-slate-900 px-4">
                <div className="space-y-8">
                    <h2 className="text-5xl md:text-center font-semibold">{movie.attributes.title}</h2>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <div className="md:px-4 max-w-xl m-2">
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{movie.attributes.description}</p>
                            <ul className="space-y-4 mt-6">
                                {movie.attributes.actors.data.map(item => {
                                    return (
                                        <li key={item.id} className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-6 ">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"></path>
                                            </svg>
                                            <p className="text-slate-800 dark:text-slate-100 font-medium ">Actor/Actress: {item.attributes.first_name.toUpperCase() + " " + item.attributes.last_name.toUpperCase()}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="md:space-x-2  space-y-2 md:space-y-0 mt-12">
                                <Link href={"/"}>
                                    <button className="w-full md:w-auto bg-slate-900 border border-slate-900 dark:border-slate-700 dark:bg-slate-700 text-white px-4 py-2 rounded-full">Home Page</button>
                                </Link>
                            </div>
                        </div>
                        <figure className="flex justify-center max-w-xl m-2">
                            <img src={"http://localhost:1337" + `${movie.attributes.poster.data.attributes.url}`} alt="" className="h-80 rounded-md object-cover object-center w-auto block" />
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.query
    // console.log(id);
    const res = await fetch(`http://localhost:1337/api/movies/${id}?populate=*`)
    const { data } = await res.json();
    // console.log(data)
    return {
        props: {
            movie: data
        },
    }
}

export default movieDetail