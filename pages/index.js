import Image from "next/image";
import Head from 'next/head';
import { FaHotjar,FaChevronRight,FaSearch } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Home() {
  return (
    <>
      <Head>
        <title>เว็บประกาศ หาร้านอร่อยทั่วเมือง</title>
      </Head>
      <div className="min-h-screen bg-blue-100" > {/* parent ต้อง relative */}
        <div className="relative z-40 w-full overflow-hidden h-80">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 object-cover w-full h-full -z-10"
          >
            <source src="/town.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute z-40 w-1/2 text-black transform -translate-x-1/2 -translate-y-1/2 rounded-xl top-52 left-1/2 p-7">
          <h1 className="text-xl font-bold text-white">เว็บประกาศ ขาย ให้เช่า คอนโด บ้าน ที่ดิน ยอดนิยม ดีที่สุด ลงประกาศฟรี</h1>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col gap-4 mt-4 rounded-lg font-sm md:flex-row">
                <li>
                  <a href="#" className="inline-block text-white hover:text-amber-500">คอนโดหรู</a>
                </li>
                <li>
                  <a href="#" className="inline-block text-white hover:text-amber-500">เช่าคอนโด</a>
                </li>
                  <li>
                  <a href="#" className="inline-block text-white hover:text-amber-500">ขายคอนโด</a>
                </li>
                <li>
                  <a href="#" className="inline-block text-white hover:text-amber-500">เช่าบ้าน</a>
                </li>
                  <li>
                  <a href="#" className="inline-block text-white hover:text-amber-500">ขายบ้าน</a>
                </li>
                <li>
                  <a href="#" className="inline-block text-white hover:text-amber-500">ขายที่ดิน</a>
                </li>
            </ul>
          </div>

        </div>

        <div className="relative">
          <div className="absolute z-40 w-1/2 text-black transform -translate-x-1/2 -translate-y-1/2 bg-white border rounded-xl top-50 left-1/2 p-7">
            
          </div>
          <div className="absolute z-40 w-1/2 text-black transform -translate-x-1/2 -translate-y-1/2 bg-white border rounded-xl top-50 left-1/2 p-7">
            <form className="w-full">   
                <div className="relative">
                  <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                    
                  </div>
                  <input type="search" className="focus:shadow-[0_0_10px_2px_#d3dff5] block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl focus:outline-none" placeholder="ค้นหาข้อมูล" required />
                  <button type="submit" className="flex gap-2 text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800  rounded-2xl text-sm px-4 py-2"><FaSearch className="mt-1"  />ค้นหา</button>
                </div>
            </form>
          </div>
        </div>

        <div className="relative">
          <div className="absolute z-40 w-1/2 text-black transform -translate-x-1/2 -translate-y-1/2 border rounded-xl top-24 left-1/2 text-start">
            <h2 className="text-green-500 ">ประเภทอสังหาฯ</h2>
          
          </div>
        </div>
       
          <div className="relative flex justify-between p-4 top-52">
            <div className="w-1/2 p-4">
              <label className="flex items-center justify-center gap-1 text-center text-md text-emerald-500"> <FaHotjar className="text-emerald-500" /> โครงการเปิดใหม่</label>
              <label className="flex justify-center pr-4 text-sm text-black">สำรวจโครงการเปิดใหม่ที่น่าสนใจกันเลย</label>
            </div>
            <div className="w-1/2 p-4 text-center">
              <a href="#" className="inline-flex items-center justify-center gap-1 text-center text-blue-500 underline text-md">ดูโครงการทั้งหมด  <FaChevronRight className="text-blue-500" /></a>
            </div>
          </div>
          
        <div className="relative flex justify-center bg-blue-100 top-48">
           
            <div className="p-5">
              <div className="p-4 transition duration-200 transform bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow-lg hover:-translate-y-3">

                <div className="max-w-sm bg-white rounded-lg">
                
                  <Image
                    src="/cafe.jpg"
                    alt="My Photo"
                    width={500}
                    height={40}
                  />
                  <div className="p-2 ">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    
                  </div>
                </div>
              </div>
            </div>
            

            <div className="p-5">
              <div className="p-4 transition duration-200 transform bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow-lg hover:-translate-y-3">

                <div className="max-w-sm bg-white rounded-lg">
                  <Image
                    src="/cafe.jpg"
                    alt="My Photo"
                    width={500}
                    height={40}
                    className="rounded-lg"
                  />
                  <div className="p-2">
                      <a href="#">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                      </a>
                      <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5">
              <div className="p-4 transition duration-200 transform bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow-lg hover:-translate-y-3">
                <div className="max-w-sm bg-white">
                  <Image
                    src="/cafe.jpg"
                    alt="My Photo"
                    width={500}
                    height={40}
                    className="rounded-lg"
                  />
                  <div className="p-2">
                      <a href="#">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                      </a>
                      <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      
                  </div>
                </div>
              </div>
            </div>

        </div>

        
        <footer className="z-50 w-full py-3 text-sm text-center text-gray-600 bg-black border-t">
          &copy; {new Date().getFullYear()} Project Livinginsider
        </footer>
      </div>
    </>
     
  );
}
