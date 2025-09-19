import Image from "next/image";
import { FaHome,FaChevronDown,FaHistory,FaRegBell,FaRegHeart,FaPlusCircle } from 'react-icons/fa';
import { useState, useEffect } from "react";


export default function TopBar(){
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return(
        scrolled == false ? 
        (
        <nav className="fixed top-0 left-0 z-50 w-full">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
                <a href="" className="flex items-center mt-2 space-x-3 rtl:space-x-reverse">
                <Image
                src="/heineken1.png"
                alt="My Photo"
                width={150}
                height={50}
                />
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col mt-4 rounded-lg text-md md:flex-row">
                        <li>
                           <a href="#" className="inline-block px-5 py-2 text-white transition duration-500 rounded-md hover:text-black hover:rounded-full hover:bg-teal-100 ">เข้าสู่ระบบ</a>
                        </li>
                        <li className="mt-2">
                        /
                        </li>
                        <li>
                            <a href="#" className="inline-block px-5 py-2 text-white transition duration-500 rounded-md hover:text-black hover:rounded-full hover:bg-teal-100 ">สมัครสมาชิก</a>
                        </li>
                        <li className="mt-3">
                            <div className="w-px h-4 bg-white"></div>
                        </li>
                        <li className="mt-2 ms-2">
                            <a href="#" className="flex-col items-center text-xl"><FaHome /></a>
                        </li>
                        <li className="mt-2 ms-3">
                            <a href="#" className="flex-col items-center text-xl"><FaRegHeart /></a>
                        </li>
                        <li className="mt-3 ms-3">
                            <div className="w-px h-4 bg-white"></div>
                        </li>
                        <li className="mt-2 ms-2">
                            <a href="#" className="flex-col items-center text-xl"><FaRegBell /></a>
                        </li>
                        <li className="mt-2 ms-3">
                            <a href="#" className="flex-col items-center text-xl"><FaHistory /></a>
                        </li>
                        <li className="mt-3 ms-3">
                            <div className="w-px h-4 bg-white"></div>
                        </li>

                        <li className="ms-1">

                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="flex px-5 py-2 text-white transition duration-500 rounded-md hover:text-gray-500 hover:rounded-full hover:bg-teal-100" type="button"> 
                            <Image
                            src="/Thailand-flag1.png"
                            alt="My Photo"
                            width={30}
                            height={30}
                            className="me-1"
                            />
                            <FaChevronDown className="mt-1"/>
                            </button>

                            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                               
                                </ul>
                            </div>
                        </li>

                        <li>
                           <a href="#" className="inline-block px-5 py-2 text-white hover:text-emerald-500 ">คู่มือการใช้งาน</a>
                        </li>
                         <li className="mt-3">
                            <div className="w-px h-4 bg-white"></div>
                        </li>
                        <li>
                           <a href="#" className="inline-block px-5 py-2 text-white hover:text-emerald-500">ติดต่อเรา</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full md:block md:w-auto">
                <ul className="flex flex-row justify-center text-xs rounded-lg md:flex-row">
                    <li>
                        <a href="#" className="inline-block px-3 py-2 text-white transition duration-100 bg-green-400 rounded-full hover:text-black">หน้าแรก</a>
                    </li>
                    <li className="ms-2">
                        <a href="#" className="inline-block px-5 py-2 text-white transition duration-500 rounded-md hover:text-black hover:rounded-full hover:bg-teal-100 ">รายการ ขาย เช่า</a>
                    </li>
                    <li className="mt-2">
                        <a href="#" className="relative px-5 py-2 text-white transition duration-500 rounded-md hover:text-black hover:rounded-full hover:bg-teal-100">ประกาศแนะนำ <span className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full bottom-4 right-2 border-1 animate-heartbeat">N</span></a>
                    </li>
                    <li>
                        <a href="#" className="inline-block px-5 py-2 text-white transition duration-500 rounded-md hover:text-black hover:rounded-full hover:bg-teal-100">ขายราคาทุน</a>
                    </li>
                    <li>
                        <a href="#" className="inline-block px-5 py-2 text-white transition duration-500 rounded-md hover:text-black hover:rounded-full hover:bg-teal-100">AgentClub</a>
                    </li>
                    <li className="mt-2">
                        <a href="#" className="relative px-5 py-2 text-white transition duration-500 rounded-md hover:text-black hover:rounded-full hover:bg-teal-100">Looking <span className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full bottom-4 right-2 border-1 animate-heartbeat">N</span></a>
                    </li>
                    <li className="ms-3">
                        <a href="#" className="flex gap-1 px-5 py-2 text-white transition duration-100 bg-orange-400 rounded-full hover:bg-orange-800"><FaPlusCircle className="text-xs"/>   ลงประกาศ</a>
                    </li>
                </ul>
            </div>
        </nav>
        ) : (
        <nav className="fixed top-0 left-0 z-50 w-full h-36 bg-gradient-to-r from-teal-100 via-teal-50 to-white">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
                <a href="" className="flex items-center mt-2 space-x-3 rtl:space-x-reverse">
                    <Image
                    src="/heineken1.png"
                    alt="My Photo"
                    width={150}
                    height={50}
                    />
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col mt-4 rounded-lg text-md md:flex-row">
                        <li>
                           <a href="#" className="inline-block px-5 py-2 text-black transition duration-500 rounded-md hover:text-black hover:rounded-full hover:bg-teal-200 ">เข้าสู่ระบบ</a>
                        </li>
                        <li className="mt-2 text-black">
                        /
                        </li>
                        <li>
                            <a href="#" className="inline-block px-5 py-2 text-black transition duration-500 rounded-md hover:text-black hover:rounded-full hover:bg-teal-200 ">สมัครสมาชิก</a>
                        </li>
                        <li className="mt-3">
                            <div className="w-px h-4 bg-black"></div>
                        </li>
                        <li className="mt-2 ms-2">
                            <a href="#" className="flex-col items-center text-xl text-black"><FaHome /></a>
                        </li>
                        <li className="mt-2 ms-3">
                            <a href="#" className="flex-col items-center text-xl text-black"><FaRegHeart /></a>
                        </li>
                        <li className="mt-3 ms-3">
                            <div className="w-px h-4 bg-black"></div>
                        </li>
                        <li className="mt-2 ms-2">
                            <a href="#" className="flex-col items-center text-xl text-black"><FaRegBell /></a>
                        </li>
                        <li className="mt-2 ms-3">
                            <a href="#" className="flex-col items-center text-xl text-black"><FaHistory /></a>
                        </li>
                        <li className="mt-3 ms-3">
                            <div className="w-px h-4 bg-black"></div>
                        </li>

                        <li className="ms-1">

                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="flex px-5 py-2 text-black transition duration-500 rounded-md hover:text-black hover:rounded-full hover:bg-teal-200" type="button"> 
                            <Image
                            src="/Thailand-flag1.png"
                            alt="My Photo"
                            width={30}
                            height={30}
                            className="me-1"
                            />
                            <FaChevronDown className="mt-1"/>
                            </button>

                            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                               
                                </ul>
                            </div>
                        </li>

                        <li>
                           <a href="#" className="inline-block px-5 py-2 text-black hover:text-emerald-500 ">คู่มือการใช้งาน</a>
                        </li>
                         <li className="mt-3">
                            <div className="w-px h-4 bg-black"></div>
                        </li>
                        <li>
                           <a href="#" className="inline-block px-5 py-2 text-black hover:text-emerald-500">ติดต่อเรา</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full md:block md:w-auto">
                <ul className="flex flex-row justify-center text-xs rounded-lg md:flex-row">
                    <li>
                        <a href="#" className="inline-block px-3 py-2 text-black transition duration-100 bg-green-400 rounded-full hover:text-black">หน้าแรก</a>
                    </li>
                    <li className="ms-2">
                        <a href="#" className="inline-block px-5 py-2 text-black transition duration-500 rounded-md hover:text-black hover:rounded-full hover:bg-teal-200 ">รายการ ขาย เช่า</a>
                    </li>
                    <li className="mt-2">
                        <a href="#" className="relative px-5 py-2 text-black transition duration-500 rounded-md hover:text-black hover:rounded-full hover:bg-teal-200">ประกาศแนะนำ <span className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full bottom-4 right-2 border-1 animate-heartbeat">N</span></a>
                    </li>
                    <li>
                        <a href="#" className="inline-block px-5 py-2 text-black transition duration-500 rounded-md hover:text-black hover:rounded-full hover:bg-teal-200">ขายราคาทุน</a>
                    </li>
                    <li>
                        <a href="#" className="inline-block px-5 py-2 text-black transition duration-500 rounded-md hover:text-black hover:rounded-full hover:bg-teal-200">AgentClub</a>
                    </li>
                    <li className="mt-2">
                        <a href="#" className="relative px-5 py-2 text-black transition duration-500 rounded-md hover:text-black hover:rounded-full hover:bg-teal-200">Looking <span className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full bottom-4 right-2 border-1 animate-heartbeat">N</span></a>
                    </li>
                    <li className="ms-3">
                        <a href="#" className="flex gap-1 px-5 py-2 text-black transition duration-100 bg-orange-400 rounded-full hover:bg-orange-800"><FaPlusCircle className="text-xs"/>   ลงประกาศ</a>
                    </li>
                </ul>
            </div>
        </nav>
        ) 
       
    );
}