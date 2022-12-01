import React from 'react'
import Link from "next/link"
// import {useRouter} from "next/router"
import Navigation from './Navigation';

const Header = ({navigation}) => {
    // const router = useRouter();
    // console.log(router)
    return (
        <nav className="w-full bg-gray-300 dark:bg-slate-900 flex p-4  items-center justify-between">
            <Link href={"/"} >
                <div className="inline-flex space-x-2">
                    <div className="">
                        <img src="/logo.png" alt="" width="38" height="38" style={{ borderRadius: "8px" }} />
                    </div>
                    <span className="hidden md:block text-slate-900 dark:text-slate-100 font-bold text-2xl">Strapi MovieFC</span>
                </div>
            </Link>
            <Navigation navigation={navigation}/>

            {/* <ul className="hidden md:flex space-x-4 dark:text-slate-100 text-slate-900">
                <li className={`${router.pathname === "/" && "bg-blue-800 text-white"} hover:bg-blue-500 hover:cursor-pointer hover:text-gray-100 rounded-md px-4 py-2 transition-all duration-200`}>
                    <Link href={"/"}>
                        <h2>Home</h2>
                    </Link>
                </li>
                <li className={`${router.pathname === "/blog" && "bg-blue-800 text-white"} hover:bg-blue-500 hover:cursor-pointer hover:text-gray-100 rounded-md px-4 py-2 transition-all duration-200`}>
                    <Link href={"/blog"}>
                        <h2>Blog</h2>
                    </Link>
                </li>
            </ul>
            <button className="rounded-full bg-blue-500 p-2 md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-6 dark:text-slate-900 text-slate-100">
                    <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd"></path>
                </svg>
            </button> */}
        </nav>
    )
}

export default Header