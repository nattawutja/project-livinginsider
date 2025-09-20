import Image from "next/image";
import Head from 'next/head';
import { FaStore,FaHome,FaBuilding,FaHotjar,FaChevronRight,FaChevronLeft,FaSearch,FaRegBookmark,FaBookReader, FaShoppingBag,FaShoppingBasket,FaBeer, FaDumbbell } from 'react-icons/fa';


import { Swiper, SwiperSlide } from "swiper/react";

// 2️⃣ Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/grid';

// 3️⃣ Import modules จาก swiper
import { Grid,Navigation, Pagination } from "swiper/modules"; // ✅ ต้อง /modules สำหรับ v10+



import { useRef,useState } from "react";
export default function Home() {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      console.log(scrollRef.current);
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const categories = [
    { icon: <FaBuilding />, label: "คอนโด" },
    { icon: <FaHome />, label: "บ้าน" },
    { icon: <FaHome />, label: "ทาวน์โฮม" },
    { icon: <FaHome />, label: "บ้านแฝด" },
    { icon: <FaStore />, label: "ที่ดิน" },
    { icon: <FaBuilding />, label: "ตึกแถว" },
    { icon: <FaBuilding />, label: "สำนักงาน" },
    { icon: <FaHome />, label: "โฮมออฟฟิศ" },
    { icon: <FaStore />, label: "ร้านค้า" },
    { icon: <FaBuilding />, label: "โชว์รูม" },
    { icon: <FaBuilding />, label: "โชว์รูม" },
    { icon: <FaBuilding />, label: "โชว์รูม" },
    { icon: <FaBuilding />, label: "โชว์รูม" },
    { icon: <FaBuilding />, label: "โชว์รูม" },
    { icon: <FaBuilding />, label: "โชว์รูม" },
  ];

  const locations = [
    { title: "พระราม 9", subtitle: "ขาย เช่า คอนโด บ้าน ที่ดิน พระราม 9", img: "/1.jpg" },
    { title: "อโศก ทองหล่อ", subtitle: "ขาย เช่า คอนโด บ้าน ที่ดิน อโศก", img: "/2.jpg" },
    { title: "รัชดา ห้วยขวาง", subtitle: "ขาย เช่า คอนโด บ้าน ที่ดิน รัชดา", img: "/3.jpg" },
    { title: "สาทร", subtitle: "ขาย เช่า คอนโด บ้าน ที่ดิน สาทร", img: "/4.jpg" },
    { title: "หมอชิต จตุจักร", subtitle: "ขาย เช่า คอนโด บ้าน ที่ดิน หมอชิต", img: "/5.jpg" },
    { title: "หมอชิต จตุจักร", subtitle: "ขาย เช่า คอนโด บ้าน ที่ดิน หมอชิต", img: "/5.jpg" },
    { title: "หมอชิต จตุจักร", subtitle: "ขาย เช่า คอนโด บ้าน ที่ดิน หมอชิต", img: "/5.jpg" },
    { title: "หมอชิต จตุจักร", subtitle: "ขาย เช่า คอนโด บ้าน ที่ดิน หมอชิต", img: "/5.jpg" },
    { title: "หมอชิต จตุจักร", subtitle: "ขาย เช่า คอนโด บ้าน ที่ดิน หมอชิต", img: "/5.jpg" },
  ];

  return (
    <>
      <Head>
        <title>เว็บประกาศ หาร้านอร่อยทั่วเมือง</title>
      </Head>
      <div className="min-h-screen bg-blue-100" > {/* parent ต้อง relative */}
        <div className="relative z-40 w-full overflow-hidden h-96">
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

        <div className="absolute z-40 text-black transform -translate-x-1/2 -translate-y-1/2 w-2/2 rounded-xl top-64 left-1/2 p-7">
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
          <div className="absolute z-40 p-4 text-black transform -translate-x-1/2 -translate-y-1/2 bg-white border lg:w-3/4 rounded-xl top-50 left-1/2 xl:w-2/4 md:w-3/4">
            <div className="">
              <nav className="">
                <ul className="flex flex-row justify-start p-3 rounded-lg lg:overflow-x-auto text-md md:flex-row lg:whitespace-nowrap md:overflow-x-auto md:whitespace-nowrap">
                  <li>
                    <a href="#" className="flex gap-2 px-5 py-2 text-gray-400 transition duration-500 rounded-md group hover:rounded-full hover:bg-green-400 hover:text-white"><FaRegBookmark className="text-green-400 transition-colors duration-500 group-hover:text-white" /> สถานที่น่าสนใจ</a>
                  </li>
                  <li className="mt-1 ms-3">
                    <div className="w-px h-5 bg-gray-200"></div>
                  </li>
                  <li>
                    <a href="#" className="flex gap-2 px-5 py-2 text-gray-400 transition duration-500 rounded-md group hover:rounded-full hover:bg-green-400 hover:text-white"><FaBookReader className="text-green-400 transition-colors duration-500 group-hover:text-white" /> ร้านหนังสือ</a>
                  </li>
                  <li className="mt-1 ms-3">
                    <div className="w-px h-5 bg-gray-200"></div>
                  </li>
                  <li>
                    <a href="#" className="flex gap-2 px-5 py-2 text-gray-400 transition duration-500 rounded-md group hover:rounded-full hover:bg-green-400 hover:text-white"><FaShoppingBag className="text-green-400 transition-colors duration-500 group-hover:text-white" /> ช้อปปิ้ง</a>
                  </li>
                  <li className="mt-1 ms-3">
                    <div className="w-px h-5 bg-gray-200"></div>
                  </li>
                  <li>
                    <a href="#" className="flex gap-2 px-5 py-2 text-gray-400 transition duration-500 rounded-md group hover:rounded-full hover:bg-green-400 hover:text-white"><FaShoppingBasket className="text-green-400 transition-colors duration-500 group-hover:text-white" /> ถนนคนเดิน</a>
                  </li>
                  <li className="mt-1 ms-3">
                    <div className="w-px h-5 bg-gray-200"></div>
                  </li>
                  <li>
                    <a href="#" className="flex gap-2 px-5 py-2 text-gray-400 transition duration-500 rounded-md group hover:rounded-full hover:bg-green-400 hover:text-white"><FaBeer className="text-green-400 transition-colors duration-500 group-hover:text-white" /> ร้านนั่งชิว</a>
                  </li>
                  <li className="mt-1 ms-3">
                    <div className="w-px h-5 bg-gray-200"></div>
                  </li>
                  <li>
                    <a href="#" className="flex gap-2 px-5 py-2 text-gray-400 transition duration-500 rounded-md group hover:rounded-full hover:bg-green-400 hover:text-white"><FaDumbbell className="text-green-400 transition-colors duration-500 group-hover:text-white" /> AgentClub</a>
                  </li>
            
                </ul>
              </nav>
            </div>

            <form className="w-full mt-3">   
                <div className="relative">
                  <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                    
                  </div>
                  <input type="search" className="focus:shadow-[0_0_10px_2px_#d3dff5] block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl focus:outline-none" placeholder="ค้นหาข้อมูล" required />
                  <button type="submit" className="flex gap-2 text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800  rounded-2xl text-sm px-4 py-2"><FaSearch className="mt-1"  />ค้นหา</button>
                </div>
            </form>
          </div>
        </div>

      

        <div className="relative w-full h-72 bg-gradient-to-b from-bg-living to-white">
          <div className="absolute z-40 w-1/2 text-center top-28 right-1/2">
            <h2 className="text-green-500 ">ประเภทอสังหาฯ</h2>
          </div>
          <div className="absolute z-40 w-1/2 text-center text-black top-28 left-1/2">
            <div className="relative flex items-center justify-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-2 text-gray-500 bg-white rounded-full"
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={() => scroll("right")}
                className="p-2 text-gray-500 bg-white rounded-full"
              >
                <FaChevronRight />
              </button>
            </div>
           
          </div>

            <div
              ref={scrollRef}
              className="absolute flex w-full max-w-4xl gap-4 px-4 overflow-hidden top-40 left-1/4"
            >
              {categories.map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-20 h-20 bg-white border rounded-full shadow cursor-pointer hover:bg-green-100 hover:-translate-y-2">
                    <div className="text-green-500 text-md">{item.icon}</div>
                  </div>
                  <p className="mt-2 text-sm text-green-500">{item.label}</p>
                </div>
              ))}
            </div>


        </div>
       
        <div className="relative flex justify-between p-2 bg-white">
          <div className="w-1/2 p-4">
            <label className="flex items-center justify-center gap-1 text-center text-md text-emerald-500"> ทำเลยอดนิยม</label>
          </div>
          <div className="w-1/2 p-4 text-center">
            <a href="#" className="inline-flex items-center justify-center gap-1 text-center text-blue-500 underline text-md">ทำเลอื่นๆ  <FaChevronRight className="text-blue-500" /></a>
          </div>
        </div>
       
        <div className="relative flex justify-center p-2 bg-white">
          <div className="w-1/2 p-4">
            <Swiper
              modules={[Grid, Navigation]}
              slidesPerView={3}      // จำนวนรูปต่อแถว
              grid={{ rows: 2, fill: 'row' }} // จำนวนแถวต่อหน้า, fill:'row' ช่วยจัดเต็มแถว
              spaceBetween={20}      // ช่องว่างระหว่างรูป
              slidesPerGroup={3}     // จำนวนสไลด์ต่อกลุ่ม (ควรเท่ากับ slidesPerView)
              navigation={true}         // ปุ่ม next/prev
            >
            {locations.map((item, i) => (
              <SwiperSlide key={i}>
                <div> 
                  <div className="relative overflow-hidden transition duration-200 cursor-pointer hover:scale-110 hover:opacity-70">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="object-cover"
                      width={500}   // กำหนดความกว้าง
                      height={300}  // กำหนดความสูง
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2 text-white bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-xs">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
                
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
        </div>

            
        <div className="relative w-full bg-white h-72">
          <div className="absolute z-40 w-1/2 text-center top-3 right-1/2">
            <h2 className="text-green-500 ">ดูโครงการใหม่จาก</h2>
          </div>
          <div className="absolute z-40 w-1/2 text-center text-black top-3 left-1/2">
            <a href="#" className="inline-flex items-center justify-center gap-1 text-center text-blue-500 underline text-md">ดูผู้พัฒนาทั้งหมด  <FaChevronRight className="text-blue-500" /></a>
          </div>

            <div
              className="absolute flex w-full max-w-4xl gap-4 px-4 overflow-hidden top-20 left-1/4"
            >
              {categories.map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-20 h-20 bg-white border rounded-full shadow cursor-pointer hover:bg-green-100 hover:-translate-y-2">
                    <div className="text-green-500 text-md">{item.icon}</div>
                  </div>
                  <p className="mt-2 text-sm text-green-500">{item.label}</p>
                </div>
              ))}
            </div>


        </div>


        <div className="relative flex justify-between p-2 bg-living">
          <div className="w-1/2 p-4">
            <label className="flex items-center justify-center gap-1 text-center text-md text-emerald-500"> <FaHotjar className="text-emerald-500" /> โครงการเปิดใหม่</label>
            <label className="flex justify-center pr-4 text-sm text-black">สำรวจโครงการเปิดใหม่ที่น่าสนใจกันเลย</label>
          </div>
          <div className="w-1/2 p-4 text-center">
            <a href="#" className="inline-flex items-center justify-center gap-1 text-center text-blue-500 underline text-md">ดูโครงการทั้งหมด  <FaChevronRight className="text-blue-500" /></a>
          </div>
        </div>
          
        <div className="relative flex justify-center bg-living">
           
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
       

        <div className="relative w-full bg-white h-72">
          <div className="absolute z-40 w-1/2 text-center top-3 right-1/2">
            <h2 className="font-bold text-green-500 text-md ">อสังหาฯ ใกล้รถไฟฟ้า</h2>
          </div>
          <div className="absolute z-40 w-1/2 text-center text-black top-3 left-1/2">
            <a href="#" className="inline-flex items-center justify-center gap-1 text-center text-blue-500 underline text-md">สถานีทั้งหมด  <FaChevronRight className="text-blue-500" /></a>
          </div>

          <div
            className="absolute flex items-center justify-center w-full gap-4 px-4 top-20 left-22"
          >
              <div className="relative flex flex-col items-center group">
                <div className="flex items-center justify-center p-5 transition duration-500 bg-white border border-green-300 rounded-md shadow cursor-pointer w-28 h-28 hover:scale-110">
                  <div className="text-green-500 text-md">
                    <Image
                      src="/BTS-Logo.svg.png"
                      alt="btslogo"
                      className="object-cover"
                      width={50}   // กำหนดความกว้าง
                      height={50}  // กำหนดความสูง
                    />
                  </div>
                </div>
                <span className="absolute hidden px-2 py-1 mb-2 text-xs text-black bg-white rounded shadow bottom-full group-hover:block whitespace-nowrap">
                  รถไฟฟ้า BTS สายหลัก
                </span>
                <p className="mt-2 text-sm font-bold text-blue-900">BTS สายหลัก</p>
              </div>

              <div className="relative flex flex-col items-center group">
                <div className="flex items-center justify-center p-5 transition duration-500 bg-white border border-yellow-300 rounded-md shadow cursor-pointer w-28 h-28 hover:scale-110">
                  <div className="text-green-500 text-md">
                    <Image
                      src="/BTS-Logo.svg.png"
                      alt="btslogo"
                      className="object-cover"
                      width={50}   // กำหนดความกว้าง
                      height={50}  // กำหนดความสูง
                    />
                  </div>
                </div>
                <span className="absolute hidden px-2 py-1 mb-2 text-xs text-black bg-white rounded shadow bottom-full group-hover:block whitespace-nowrap">
                  รถไฟฟ้า BTS สายสีทอง
                </span>
                <p className="mt-2 text-sm font-bold text-blue-900">BTS สายสีทอง</p>
              </div>

              <div className="relative flex flex-col items-center group">
                <div className="flex items-center justify-center p-5 transition duration-500 bg-white border border-blue-600 rounded-md shadow cursor-pointer w-28 h-28 hover:scale-110">
                  <div className="text-green-500 text-md">
                    <Image
                      src="/mrtสีน้ำเงิน2.png"
                      alt="btslogo"
                      className="object-cover"
                      width={60}   // กำหนดความกว้าง
                      height={60}  // กำหนดความสูง
                    />
                  </div>
                </div>
                <span className="absolute hidden px-2 py-1 mb-2 text-xs text-black bg-white rounded shadow bottom-full group-hover:block whitespace-nowrap">
                  รถไฟฟ้า MRT สายสีน้ำเงิน
                </span>
                <p className="mt-2 text-sm font-bold text-blue-900">MRT สายสีน้ำเงิน</p>
              </div>

              <div className="relative flex flex-col items-center group">
                <div className="flex items-center justify-center p-5 transition duration-500 bg-white border border-purple-600 rounded-md shadow cursor-pointer w-28 h-28 hover:scale-110">
                  <div className="text-green-500 text-md">
                    <Image
                      src="/mrtสีม่วง.png"
                      alt="btslogo"
                      className="object-cover"
                      width={55}   // กำหนดความกว้าง
                      height={55}  // กำหนดความสูง
                    />
                  </div>
                </div>
                <span className="absolute hidden px-2 py-1 mb-2 text-xs text-black bg-white rounded shadow bottom-full group-hover:block whitespace-nowrap">
                  รถไฟฟ้า MRT สายสีม่วง
                </span>
                <p className="mt-2 text-sm font-bold text-blue-900">MRT สายสีม่วง</p>
              </div>

              <div className="relative flex flex-col items-center group">
                <div className="flex items-center justify-center p-5 transition duration-500 bg-white border border-yellow-500 rounded-md shadow cursor-pointer w-28 h-28 hover:scale-110">
                  <div className="text-green-500 text-md">
                    <Image
                      src="/mrtสีเหลือง.png"
                      alt="btslogo"
                      className="object-cover"
                      width={50}   // กำหนดความกว้าง
                      height={50}  // กำหนดความสูง
                    />
                  </div>
                </div>
                <span className="absolute hidden px-2 py-1 mb-2 text-xs text-black bg-white rounded shadow bottom-full group-hover:block whitespace-nowrap">
                  รถไฟฟ้า MRT สายสีเหลือง
                </span>
                <p className="mt-2 text-sm font-bold text-blue-900">MRT สายสีเหลือง</p>
              </div>

              <div className="relative flex flex-col items-center group">
                <div className="flex items-center justify-center p-5 transition duration-500 bg-white border border-pink-400 rounded-md shadow cursor-pointer w-28 h-28 hover:scale-110">
                  <div className="text-green-500 text-md">
                    <Image
                      src="/mrtสีชมพู.png"
                      alt="btslogo"
                      className="object-cover"
                      width={50}   // กำหนดความกว้าง
                      height={50}  // กำหนดความสูง
                    />
                  </div>
                </div>
                <span className="absolute hidden px-2 py-1 mb-2 text-xs text-black bg-white rounded shadow bottom-full group-hover:block whitespace-nowrap">
                  รถไฟฟ้า MRT สายสีชมพู
                </span>
                <p className="mt-2 text-sm font-bold text-blue-900">MRT สายสีชมพู</p>
              </div>

              <div className="relative flex flex-col items-center group">
                <div className="flex items-center justify-center p-5 transition duration-500 bg-white border border-red-500 rounded-md shadow cursor-pointer w-28 h-28 hover:scale-110">
                  <div className="text-green-500 text-md">
                    <Image
                      src="/ARL.png"
                      alt="btslogo"
                      className="object-cover"
                      width={50}   // กำหนดความกว้าง
                      height={50}  // กำหนดความสูง
                    />
                  </div>
                </div>
                <span className="absolute hidden px-2 py-1 mb-2 text-xs text-black bg-white rounded shadow bottom-full group-hover:block whitespace-nowrap">
                  รถไฟฟ้า Airport Link (ARL)
                </span>
                <p className="mt-2 text-sm font-bold text-blue-900">Airport Link</p>
              </div>

              <div className="relative flex flex-col items-center group">
                <div className="flex items-center justify-center p-5 transition duration-500 bg-white border border-red-600 rounded-md shadow cursor-pointer w-28 h-28 hover:scale-110">
                  <div className="text-green-500 text-md">
                    <Image
                      src="/สายสีแดง.png"
                      alt="btslogo"
                      className="object-cover"
                      width={50}   // กำหนดความกว้าง
                      height={50}  // กำหนดความสูง
                    />
                  </div>
                </div>
                <span className="absolute hidden px-2 py-1 mb-2 text-xs text-black bg-white rounded shadow bottom-full group-hover:block whitespace-nowrap">
                  รถไฟฟ้าสายสีแดง (Red Line)
                </span>
                <p className="mt-2 text-sm font-bold text-blue-900">รถไฟฟ้าสายสีแดง</p>
              </div>

              <div className="relative flex flex-col items-center group">
                <div className="flex items-center justify-center p-5 transition duration-500 bg-white border rounded-md shadow cursor-pointer w-28 h-28 border-lime-400 hover:scale-110">
                  <div className="text-green-500 text-md">
                    <Image
                      src="/BRT.png"
                      alt="btslogo"
                      className="object-cover"
                      width={50}   // กำหนดความกว้าง
                      height={50}  // กำหนดความสูง
                    />
                  </div>
                </div>
                <span className="absolute hidden px-2 py-1 mb-2 text-xs text-black bg-white rounded shadow bottom-full group-hover:block whitespace-nowrap">
                  รถไฟฟ้า BRT
                </span>
                <p className="mt-2 text-sm font-bold text-blue-900">รถ BRT</p>
              </div>

          </div>


        </div>


        <div className="relative w-full bg-white h-72">
          <div className="absolute z-40 w-1/2 text-center top-3 right-1/2">
            <h2 className="font-bold text-green-500 text-md">อสังหาฯ ใหม่แนะนำ</h2>
          </div>
          <div className="absolute z-40 w-1/2 text-center text-black top-3 left-1/2">
          </div>
          <div class="absolute w-64 h-40 z-50">
            <div class="absolute top-2 left-0 bg-orange-500 text-white px-3 py-1 text-xs font-semibold transform -rotate-45 origin-top-left">
              โครงการใหม่
            </div>

            <div class="absolute inset-0 bg-blue-900 text-white p-4 flex flex-col justify-center z-10">
              <h3 class="text-lg font-bold">คอนโดใหม่</h3>
              <p class="text-sm">รวมประกาศขายคอนโด โครงการใหม่ มือหนึ่ง</p>
            </div>

            <Image
              src="/cafe.jpg"
              alt="My Photo"
              width={500}
              height={40}
            />
          </div>
        </div>


        <div className="relative w-full bg-white h-96">
          <div className="absolute z-40 w-1/2 text-center top-3 right-1/2">
            <h2 className="font-bold text-green-500 text-md">ค้นหาจากทำเลที่คุณต้องการ</h2>
            <div className="absolute flex gap-4 -translate-x-2/2 left-1/2 top-10">
              <div className="relative overflow-hidden bg-white rounded-lg h-80 w-96">
                <Image 
                  src="/cafe.jpg" 
                  alt="My Photo" 
                  fill 
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative overflow-hidden bg-white rounded-lg h-80 w-96">
                <Image 
                  src="/cafe.jpg" 
                  alt="My Photo" 
                  fill 
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full bg-white h-96">
          <div className="absolute z-40 w-1/2 text-center right-1/2">
            <div className="absolute flex gap-4 -translate-x-2/2 left-3/4">
              <div className="relative overflow-hidden bg-white rounded-lg h-80 w-96">
                <Image 
                  src="/cafe.jpg" 
                  alt="My Photo" 
                  fill 
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full bg-white h-96">
          <div className="absolute z-40 w-1/2 text-center right-1/2">
            <div className="absolute flex gap-4 -translate-x-2/2 left-1/2">
              <div className="relative overflow-hidden bg-white rounded-lg h-80 w-96">
                <Image 
                  src="/cafe.jpg" 
                  alt="My Photo" 
                  fill 
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative overflow-hidden bg-white rounded-lg h-80 w-96">
                <Image 
                  src="/cafe.jpg" 
                  alt="My Photo" 
                  fill 
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
    
        <div className="relative w-full bg-white h-96">
          <div className="absolute z-40 w-1/2 text-center right-1/2">
            <div className="absolute flex gap-4 -translate-x-2/2 left-3/4">
              <div className="relative overflow-hidden bg-white rounded-lg h-80 w-96">
                <Image 
                  src="/cafe.jpg" 
                  alt="My Photo" 
                  fill 
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full bg-white h-96">
          <div className="absolute z-40 w-1/2 text-center right-1/2">
            <div className="absolute flex gap-4 -translate-x-2/2 left-3/4">
              <div className="relative overflow-hidden bg-white rounded-lg h-80 w-96">
                <Image 
                  src="/cafe.jpg" 
                  alt="My Photo" 
                  fill 
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full bg-white h-96">
          <div className="absolute z-40 w-1/2 text-center right-1/2">
            <div className="absolute flex gap-4 -translate-x-2/2 left-3/4">
              <div className="relative overflow-hidden bg-white rounded-lg h-80 w-96">
                <Image 
                  src="/cafe.jpg" 
                  alt="My Photo" 
                  fill 
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-between p-2 bg-white">
          <div className="w-1/2 p-4">
            <label className="flex items-center justify-center gap-1 text-center text-md text-emerald-500"> ประกาศล่าสุด</label>
          </div>
          <div className="w-1/2 p-4 text-center">
            <a href="#" className="inline-flex items-center justify-center gap-1 text-center text-blue-500 underline text-md">ประกาศทั้งหมด  <FaChevronRight className="text-blue-500" /></a>
          </div>
        </div>
          
        <div className="relative flex justify-center bg-white">
           
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

        <div className="relative w-full bg-white h-72">
          <div className="absolute z-40 w-1/2 text-center top-3 right-1/2">
            <h2 className="font-bold text-green-500 text-md">บ้านและคอนโดหรู</h2>
          </div>
          <div className="absolute z-40 w-1/2 text-center text-black top-3 left-1/2">
          </div>
          <div class="absolute w-64 h-40 z-50">
            <div class="absolute top-2 left-0 bg-orange-500 text-white px-3 py-1 text-xs font-semibold transform -rotate-45 origin-top-left">
              โครงการใหม่
            </div>

            <div class="absolute inset-0 bg-blue-900 text-white p-4 flex flex-col justify-center z-10">
              <h3 class="text-lg font-bold">คอนโดใหม่</h3>
              <p class="text-sm">รวมประกาศขายคอนโด โครงการใหม่ มือหนึ่ง</p>
            </div>

            <Image
              src="/cafe.jpg"
              alt="My Photo"
              width={500}
              height={40}
            />
          </div>
        </div>

         <div className="relative flex justify-between p-2 bg-white">
          <div className="w-1/2 p-4">
            <label className="flex items-center justify-center gap-1 text-center text-md text-emerald-500"> ประกาศคอนโดยอดนิยม</label>
          </div>
          <div className="w-1/2 p-4 text-center">
            <a href="#" className="inline-flex items-center justify-center gap-1 text-center text-blue-500 underline text-md">คอนโดทั้งหมด  <FaChevronRight className="text-blue-500" /></a>
          </div>
        </div>
       
        <div className="relative flex justify-center p-2 bg-white">
          <div className="w-1/2 p-4">
            <Swiper
              modules={[Grid, Navigation]}
              slidesPerView={3}      // จำนวนรูปต่อแถว
              grid={{ rows: 2, fill: 'row' }} // จำนวนแถวต่อหน้า, fill:'row' ช่วยจัดเต็มแถว
              spaceBetween={20}      // ช่องว่างระหว่างรูป
              slidesPerGroup={3}     // จำนวนสไลด์ต่อกลุ่ม (ควรเท่ากับ slidesPerView)
              navigation={true}         // ปุ่ม next/prev
            >
            {locations.map((item, i) => (
              <SwiperSlide key={i}>
                <div> 
                  <div className="relative overflow-hidden transition duration-200 cursor-pointer hover:scale-110 hover:opacity-70">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="object-cover"
                      width={500}   // กำหนดความกว้าง
                      height={300}  // กำหนดความสูง
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2 text-white bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-xs">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
                
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
        </div>

        <div className="relative flex justify-between p-2 bg-white">
          <div className="w-1/2 p-4">
            <label className="flex items-center justify-center gap-1 text-center text-md text-emerald-500"> ประกาศบ้านยอดนิยม</label>
          </div>
          <div className="w-1/2 p-4 text-center">
            <a href="#" className="inline-flex items-center justify-center gap-1 text-center text-blue-500 underline text-md">บ้านทั้งหมด  <FaChevronRight className="text-blue-500" /></a>
          </div>
        </div>
       
        <div className="relative flex justify-center p-2 bg-white">
          <div className="w-1/2 p-4">
            <Swiper
              modules={[Grid, Navigation]}
              slidesPerView={3}      // จำนวนรูปต่อแถว
              grid={{ rows: 2, fill: 'row' }} // จำนวนแถวต่อหน้า, fill:'row' ช่วยจัดเต็มแถว
              spaceBetween={20}      // ช่องว่างระหว่างรูป
              slidesPerGroup={3}     // จำนวนสไลด์ต่อกลุ่ม (ควรเท่ากับ slidesPerView)
              navigation={true}         // ปุ่ม next/prev
            >
            {locations.map((item, i) => (
              <SwiperSlide key={i}>
                <div> 
                  <div className="relative overflow-hidden transition duration-200 cursor-pointer hover:scale-110 hover:opacity-70">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="object-cover"
                      width={500}   // กำหนดความกว้าง
                      height={300}  // กำหนดความสูง
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2 text-white bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-xs">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
                
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
        </div>



        <div className="relative flex justify-between p-2 bg-white">
          <div className="w-1/2 p-4">
            <label className="flex items-center justify-center gap-1 text-center text-md text-emerald-500"> <FaHotjar className="text-emerald-500" /> Review คอนโด & บ้าน</label>
            <label className="flex justify-center pr-4 text-sm text-black">สำรวจโครงการเปิดใหม่ที่น่าสนใจกันเลย</label>
          </div>
          <div className="w-1/2 p-4 text-center">
            <a href="#" className="inline-flex items-center justify-center gap-1 text-center text-blue-500 underline text-md">Review อื่นๆ (738)  <FaChevronRight className="text-blue-500" /></a>
          </div>
        </div>
          
        <div className="relative flex justify-center bg-white">
           
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

              <div className="relative flex justify-between p-2 bg-white">
          <div className="w-1/2 p-4">
            <label className="flex items-center justify-center gap-1 text-center text-md text-emerald-500"> Knowledge ความรู้ดีๆเกี่ยวกับที่อยู่อาศัย</label>
          </div>
          <div className="w-1/2 p-4 text-center">
            <a href="#" className="inline-flex items-center justify-center gap-1 text-center text-blue-500 underline text-md">Knowledge อื่นๆ (1.5K)  <FaChevronRight className="text-blue-500" /></a>
          </div>
        </div>
       
        <div className="relative flex justify-center p-2 bg-white">
          <div className="w-1/2 p-4">
            <Swiper
              modules={[Grid, Navigation]}
              slidesPerView={3}      // จำนวนรูปต่อแถว
              grid={{ rows: 2, fill: 'row' }} // จำนวนแถวต่อหน้า, fill:'row' ช่วยจัดเต็มแถว
              spaceBetween={20}      // ช่องว่างระหว่างรูป
              slidesPerGroup={3}     // จำนวนสไลด์ต่อกลุ่ม (ควรเท่ากับ slidesPerView)
              navigation={true}         // ปุ่ม next/prev
            >
            {locations.map((item, i) => (
              <SwiperSlide key={i}>
                <div> 
                  <div className="relative overflow-hidden transition duration-200 cursor-pointer hover:scale-110 hover:opacity-70">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="object-cover"
                      width={500}   // กำหนดความกว้าง
                      height={300}  // กำหนดความสูง
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2 text-white bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-xs">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
                
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
        </div>

          <div className="relative flex justify-between p-2 bg-white">
          <div className="w-1/2 p-4">
            <label className="flex items-center justify-center gap-1 text-center text-md text-emerald-500"> News ข่าวอสังหาฯน่าสนใจ</label>
          </div>
          <div className="w-1/2 p-4 text-center">
            <a href="#" className="inline-flex items-center justify-center gap-1 text-center text-blue-500 underline text-md">News อื่นๆ (9.9K)  <FaChevronRight className="text-blue-500" /></a>
          </div>
        </div>
       
        <div className="relative flex justify-center p-2 bg-white">
          <div className="w-1/2 p-4">
            <Swiper
              modules={[Grid, Navigation]}
              slidesPerView={3}      // จำนวนรูปต่อแถว
              grid={{ rows: 2, fill: 'row' }} // จำนวนแถวต่อหน้า, fill:'row' ช่วยจัดเต็มแถว
              spaceBetween={20}      // ช่องว่างระหว่างรูป
              slidesPerGroup={3}     // จำนวนสไลด์ต่อกลุ่ม (ควรเท่ากับ slidesPerView)
              navigation={true}         // ปุ่ม next/prev
            >
            {locations.map((item, i) => (
              <SwiperSlide key={i}>
                <div> 
                  <div className="relative overflow-hidden transition duration-200 cursor-pointer hover:scale-110 hover:opacity-70">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="object-cover"
                      width={500}   // กำหนดความกว้าง
                      height={300}  // กำหนดความสูง
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2 text-white bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-xs">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
                
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
        </div>

        <div className="w-full text-center bg-slate-300 h-72">
          <div className="p-5"> 
            <h2 className="text-gray-400">ลงประกาศ ขาย ให้เช่า คอนโด บ้าน ที่ดิน ที่ไหนดี เว็บไหนดี ต้อง LivingInsider.com</h2>
            <label>
              Livinginsider.com เป็นเว็บไซต์สำหรับลงประกาศขายและให้เช่าคอนโด บ้าน โดยใช้งานฟรี ไม่มีค่าใช้จ่าย ทั้งเช่าที่อยู่อาศัยในกรุงเทพฯ และทั่วประเทศ ไม่ว่าจะเช่าบ้านเป็นหลัง เช่าห้องในคอนโด ไปจนถึงประกาศหาผู้เช่า ปล่อยขาย และหาผู้ซื้อ ที่นี่คือแหล่งรวมประกาศจากผู้ซื้อขายและให้เช่าที่ดีที่สุด
              ที่เว็บ Livinginsider.com เป็นพื้นที่ลงประกาศขายและให้เช่าบ้าน คอนโดและที่ดิน ฟรี ซึ่งจะช่วยให้สามารถปล่อยขายหรือปล่อยเช่าได้อย่างสะดวก และหากใครที่กำลังมองหาบ้านหรือคอนโด ราคาถูก ไม่ว่าจะเป็น บ้านและคอนโดมือสอง หรือ บ้านและคอนโดใหม่ ในทุกทำเลยอดนิยม จึงควรเลือกใช้บริการจากเรา โดย LivingInsider.com เป็นเว็บที่รู้จักอย่างแพร่หลายและมีผู้ใช้งานเป็นจำนวนมาก เนื่องจากเหตุผลดี ๆ ดังต่อไปนี้
            </label>

            <p>
              อยู่ในลำดับต้นๆ ของ Google เว็บไซต์ LivingInsider.com เป็นเว็บที่ขึ้นเป็นอันดับต้น ๆ เมื่อเสิร์ชหาชื่อโครงการต่าง ๆ และมีผู้เข้าเยี่ยมชมต่อวันเป็นจำนวนมาก
              ใช้งานง่าย เว็บไซต์ออกแบบให้ใช้งานง่าย ไม่ซับซ้อน พร้อมระบบที่ช่วยให้ค้นหาได้อย่างสะดวก รวดเร็ว
              ลงประกาศฟรี ไม่ว่าจะเช่าที่อยู่อาศัยในกรุงเทพฯ และทั่วประเทศ หรือประกาศอื่น ๆ ทั้งซื้อ ขาย เช่า ให้เช่า ก็ทำได้โดยไม่มีค่าใช้จ่ายเพิ่มเติม
              อัปเดตทุกวัน เว็บไซต์อัปเดตข้อมูลใหม่อยู่เสมอ และลงประกาศใหม่ ๆ ทุกวัน พร้อมด้วยข้อมูลด้านอสังหาริมทรัพย์ที่น่าสนใจ
            </p>
            <p>

            นอกจากการลงประกาศเช่าที่อยู่อาศัยในกรุงเทพฯ รวมถึงประกาศซื้อขายต่าง ๆ แล้ว Livinginsider.com ยังอัปเดต บทความและข่าวสารด้านอสังหาฯ ทุกวัน ไม่ว่าจะเป็น รีวิวบ้าน รีวิวคอนโด บนทำเลยอดนิยม เพื่อให้ได้ที่อยู่อาศัยที่ดีที่สุด รวมไปถึงแนวทางการตกแต่งบ้านและตกแต่งคอนโด ที่สามารถนำไปประยุกต์ใช้ได้ง่าย ๆ รวมถึงเกร็ดความรู้ด้านการลงทุน ที่จะช่วยให้ทุกคนได้ความรู้ด้านอสังหาฯ อย่างครบรอบด้าน
            </p>
          </div>
          
        
        </div>

      </div>
    </>
     
  );
}
