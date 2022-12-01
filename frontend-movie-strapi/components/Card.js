import React from 'react'
import Link from "next/link"

const Card = ({ movie }) => {
    // console.log(movie.attributes.poster.data.attributes.url);
    return (
        <Link href={`/movies/${movie.id}`}>
        <div className="cursor-pointer shadow dark:shadow-none p-4 rounded">
            <article className="flex flex-col">
                <img src={"http://localhost:1337" + `${movie.attributes.poster.data.attributes.url}`} alt="blog" className="w-full h-64 object-cover object-center rounded-md" />
                <h3 className="my-4">
                    <a href="#" className="text-gray-900 dark:text-gray-100 title-font text-xl font-medium">{movie.attributes.title}</a>
                </h3>
                <p className="mt-1 font-light text-sm text-gray-500">{movie.attributes.description}</p>
            </article>
            <span className="hover:text-gray-800 dark:text-gray-400 text-gray-500 group">
                {/* <Link href={`/movies/${movie.id}`}> */}
                    <h3 className="inline-flex items-center mt-2 text-blue-500">More About This Movie
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className=" w-4 h-4 group-hover:translate-x-1">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                        </svg>
                    </h3>
                {/* </Link> */}
                {/* <a href="#" className="inline-flex items-center mt-2 text-blue-500">More About This Movie
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className=" w-4 h-4 group-hover:translate-x-1">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                        </svg>
                    </a> */}
            </span>
        </div>
        </Link>
    )
}

export default Card