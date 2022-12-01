import React from 'react'
import { useRouter } from "next/router"
import Link from "next/link"

const Navigation = ({ navigation }) => {
    const router = useRouter();
    // console.log(router)
    return (
        <>
            <ul className="hidden md:flex space-x-4 dark:text-slate-100 text-slate-900">
                {navigation.sort((a,b)=> a.attributes.position - b.attributes.position).map((item) => {
                    return (
                        <li key={item.id} className={`${router.pathname === item.attributes.slug && "bg-blue-800 text-white"} hover:bg-blue-500 hover:cursor-pointer hover:text-gray-100 rounded-md px-4 py-2 transition-all duration-200`}>
                            <Link href={item.attributes.slug}>
                                <h2>{item.attributes.title}</h2>
                            </Link>
                        </li>
                    )
                })}
                {/* <li className={`${router.pathname === "/" && "bg-blue-800 text-white"} hover:bg-blue-500 hover:cursor-pointer hover:text-gray-100 rounded-md px-4 py-2 transition-all duration-200`}>
                    <Link href={"/"}>
                        <h2>Home</h2>
                    </Link>
                </li>
                <li className={`${router.pathname === "/blog" && "bg-blue-800 text-white"} hover:bg-blue-500 hover:cursor-pointer hover:text-gray-100 rounded-md px-4 py-2 transition-all duration-200`}>
                    <Link href={"/blog"}>
                        <h2>Blog</h2>
                    </Link>
                </li> */}
                {/* <li className="hover:bg-blue-500 hover:cursor-pointer hover:text-gray-100 rounded-md px-4 py-2 transition-all duration-200">Portfolio</li>
                <li className="hover:bg-blue-500 hover:cursor-pointer hover:text-gray-100 rounded-md px-4 py-2 transition-all duration-200">Resume</li> */}
            </ul>
            <button className="rounded-full bg-blue-500 p-2 md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-6 dark:text-slate-900 text-slate-100">
                    <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd"></path>
                </svg>
            </button>
        </>
    )
}

export default Navigation