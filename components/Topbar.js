import Image from "next/image";

export default function TopBar(){
    return(
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image
                src="/heineken1.png"
                alt="My Photo"
                width={120}
                height={50}
                />
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="text-xs flex flex-col mt-4 rounded-lg md:flex-row">
                        <li>
                            <a href="#" className="px-5 py-2 inline-block  text-white hover:text-black rounded-full  transition duration-100 bg-green-400">Home</a>
                        </li>
                        <li>
                            <a href="#" className="px-5 py-2 inline-block  text-white hover:text-black rounded-md hover:rounded-full hover:bg-teal-100 transition duration-500">about</a>
                        </li>
                        <li>
                            <a href="#" className="px-5 py-2 inline-block  text-white hover:text-black rounded-md hover:rounded-full hover:bg-teal-100 transition duration-500">about</a>
                        </li>
                        <li>
                            <a href="#" className="px-5 py-2 inline-block  text-white hover:text-black rounded-md hover:rounded-full hover:bg-teal-100 transition duration-500">about</a>
                        </li>
                        <li>
                            <a href="#" className="px-5 py-2 inline-block  text-white hover:text-black rounded-md hover:rounded-full hover:bg-teal-100 transition duration-500">about</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}