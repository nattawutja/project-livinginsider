import Image from "next/image";
import Head from 'next/head';
import { FaRegThumbsUp ,FaChevronUp,FaHotjar,FaChevronRight,FaChevronLeft,FaSearch,FaRegBookmark,FaBookReader, FaShoppingBag,FaShoppingBasket,FaBeer, FaDumbbell , FaMapMarked, FaClock, FaParking, FaBath, FaChair, FaMapPin, FaAmbulance, FaThumbsUp } from 'react-icons/fa';


import { Swiper, SwiperSlide } from "swiper/react";

// 2️⃣ Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/grid';

// 3️⃣ Import modules จาก swiper
import { Grid,Navigation, Pagination } from "swiper/modules"; // ✅ ต้อง /modules สำหรับ v10+



import { useRef,useState,useEffect } from "react";
export default function Home() {

  const scrollRef = useRef(null);
  const scrollRefMenu = useRef(null);
  const scrollRefMenuNews = useRef(null);
  const [iconStatus, setIconStatus] = useState(false);
  const [iconStatusMenu, setIconStatusMenu] = useState(false);

  useEffect(() => {
    const handleScrollDown = () => {
      if (window.scrollY > 400) {
        setIconStatus(true);
      } else {
        setIconStatus(false);
      }
    };

    window.addEventListener("scroll", handleScrollDown);

    return () => {
      window.removeEventListener("scroll", handleScrollDown);
    };

  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      console.log(scrollRef.current);
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollMenu = (direction) => {
    if(direction == 'right'){
      setIconStatusMenu(true);
    }

    if (scrollRefMenu.current) {
      const { scrollLeft, clientWidth } = scrollRefMenu.current;
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRefMenu.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };


  const scrollMenuNews = (direction) => {
    if (scrollRefMenuNews.current) {
      console.log(scrollRefMenuNews.current);
      const { scrollLeft, clientWidth } = scrollRefMenuNews.current;
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRefMenuNews.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      if(scrollLeft == 0){
       setIconStatusMenu(true);
      }
    }
  };
  const categories = [
    { icon: "/cafe.png", label: "โฮมคาเฟ่" },
    { icon: "/river.png", label: "ร้านอาหารติดแม่น้ำ" },
    { icon: "/boat.png", label: "ล่องเรือ" },
    { icon: "/pet-shop.png", label: "เพ็ทคาเฟ่" },
    { icon: "/menu.png", label: "ภัตตาคาร" },
    { icon: "/building.png", label: "สตรีทฟู๊ด" },
    { icon: "/panna-cotta.png", label: "ร้านขนมหวาน" },
    { icon: "/bento.png", label: "ร้านอาหารญี่ปุ่น" },
    { icon: "/yakiniku.png", label: "ร้านปิ้งย่าง" },
    { icon: "/appartment.png", label: "ร้านอาหารติดคอนโด" },
    { icon: "/vegetables.png", label: "ร้านอาหารสุขภาพ" },
  ];

  const locations = [
    { title: "ชัยนาท", subtitle: "ร้านอาหารบรรยากาศดี จังหวัด ชัยนาท", img: "/1.jpg" },
    { title: "อำนาจเจริญ", subtitle: "ร้านอาหาร ราคาโดนใจ จังหวัด อำนาจเจริญ", img: "/2.jpg" },
    { title: "ฝั่งธนบุรี", subtitle: "ร้านอาหาร น่านั่ง ย่าน ธนบุรี", img: "/3.jpg" },
    { title: "นครปฐม", subtitle: "ร้านอาหาร 15 ร้าน ยอดนิยม จังหวัด นครปฐม", img: "/4.jpg" },
    { title: "แนะนำร้านอาหารเหนือ", subtitle: "ร้านอาหารเหนือ 30 ร้าน แนะนำ", img: "/5.jpg" },
    { title: "5 อาหารเชียงใหม่", subtitle: "อร่อยเด็ดจนต้องขึ้นเหนือ", img: "/5อาหารเชียงใหม่.jpg" },
    { title: "37 ร้านอร่อย เชียงใหม่", subtitle: "รวมรวมร้านเด็ดต้องลอง", img: "/37ร้านอาหารเชียงใหม่.jpg" },
    { title: "17 ร้านคาว-หวาน", subtitle: "17 ร้านที่เด็กม.เกษตรห้ามพลาด", img: "/ของกินเกษตร.jpg" },
    { title: "20 ร้าน อาหารยอดนิยม", subtitle: "ตัวเมืองเชียงใหม่", img: "/ชิลไปไหน.jpg" },
    { title: "รวมร้านวัดบวร", subtitle: "กินเด็ด อิ่มอร่อย!", img: "/รวมร้านวัดบวร.jpg" },
  ];

  const locationsNotify = [
    { title: "ร้านอาหารใหม่", img: "/ร้านอาหารใหม่.jpg" },
    { title: "ใกล้ร้านอาหารสัตว์",img: "/ใกล้ร้านอาหารสัตว์.jpg" },
    { title: "ใกล้ภูเขา", img: "/ใกล้ภูเขา.jpg" },
    { title: "ใกล้คอนโด",  img: "/ใกล้คอนโด.jpg" },
    { title: "ใกล้ที่ท่องเที่ยว", img: "/ใกล้ที่ท่องเที่ยว.jpg" },
    { title: "ใกล้โรงพยาบาล", img: "/ใกล้โรงพยาบาล.jpg" },
    { title: "ใกล้น้ำตก", img: "/ใกล้น้ำตก.jpg" },
    { title: "ใกล้ทะเล", img: "/ใกล้ทะเล.jpg" },
    { title: "ใกล้วัด", img: "/ใกล้วัด.jpg" },
    { title: "ใกล้มหาลัย", img: "/ใกล้มหาลัย.jpg" }
  ];

  const locationsNotifyHome = [
    { title: "บ้านใกล้ร้านอาหาร", img: "/บ้านใกล้ร้านอาหาร.jpg" },
    { title: "บ้านมือสองใกล้ร้านอาหาร",img: "/บ้านมือสอง.jpg" },
    { title: "บ้านใกล้มหาลัย", img: "/บ้านใกล้หมาลัย.jpg" },
    { title: "บ้านใกล้รถไฟฟ้า", img: "/บ้านใกล้รถไฟฟ้า.jpg" },

  ];

  const food = [
    { subtitle: "Bon Chon", img: "/bonchon.png" },
    { subtitle: "Yayoi", img: "/yayoi.png" },
    { subtitle: "KFC", img: "/kfc.jpg" },
    { subtitle: "Mc Donald", img: "/mcdonal1.png" },
    { subtitle: "Chester Grill", img: "/chester.png" },
    { subtitle: "Momo Paradise", img: "/momo.jpg" },
    { subtitle: "Copper Buffet", img: "/copper.png" },
    { subtitle: "Burger King", img: "/burgerking.png" },
    { subtitle: "Tensai Buffet", img: "/tensai.jpg" },
    { subtitle: "SanteFe", img: "/santafe.png" },
    { subtitle: "นิตยาไก่ย่าง", img: "/นิตยา.jpg" },
    { subtitle: "Tenjo", img: "/tenjo.jpg" },
    { subtitle: "Sushiro", img: "/sushiro.jpg" },
  ];

    const foodNews = [
    { subtitle: "เที่ยงนี้กินไรดี ? 160 เมนูอาหารตามสั่ง", img: "/เมนูตามสั่ง.jpg" },
    { subtitle: "24 สูตรอาหารข้าวกล้องทำขาย", img: "/สูตรข้าวกล้องเดลี่เวอรี่.jpg" },
    { subtitle: "Pepper Lunch ออกเมนูใหม่!!", img: "/Pepper-Lunch.jpg" },
    { subtitle: "เมนู ราดข้าว ยอดนิยม", img: "/เมนูราดข้าว.jpg" }
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
          <h1 className="text-xl font-bold text-white whitespace-nowrap">เว็บประกาศ ขาย ให้เช่า คอนโด บ้าน ที่ดิน ยอดนิยม ดีที่สุด ลงประกาศฟรี</h1>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col gap-4 mt-4 rounded-lg font-sm text-md md:flex-row">
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

        {
          iconStatus && (
            <div className="fixed z-50 bottom-6 right-6">
              <div className="flex items-center justify-center w-16 h-16 bg-white border-2 rounded-full shadow-lg border-emerald-400 hover:bg-emerald-400 hover:border-white group">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg"
                >
                <FaChevronUp className="text-xl font-bold text-emerald-500 group-hover:text-white" />
                </button>
              </div>
            </div>
          )
        }
       
       

        <div className="relative">
          <div className="absolute z-40 p-4 text-black transform -translate-x-1/2 -translate-y-1/2 bg-white border lg:w-3/4 rounded-xl top-50 left-1/2 xl:w-2/4 md:w-3/4">
            <div className="">
              <nav className="">
                <ul className="flex flex-row justify-start p-3 rounded-lg lg:overflow-x-auto text-md md:flex-row lg:whitespace-nowrap md:overflow-x-auto md:whitespace-nowrap">
                  <li>
                    <a href="#" className="flex gap-2 px-5 py-2 text-gray-400 transition duration-500 rounded-md group hover:rounded-full hover:bg-green-400 hover:text-white"><FaRegBookmark className="mt-1 text-green-400 transition-colors duration-500 group-hover:text-white" /> สถานที่น่าสนใจ</a>
                  </li>
                  <li className="mt-1 ms-3">
                    <div className="w-px h-5 bg-gray-200"></div>
                  </li>
                  <li>
                    <a href="#" className="flex gap-2 px-5 py-2 text-gray-400 transition duration-500 rounded-md group hover:rounded-full hover:bg-green-400 hover:text-white"><FaBookReader className="mt-1 text-green-400 transition-colors duration-500 group-hover:text-white" /> ร้านหนังสือ</a>
                  </li>
                  <li className="mt-1 ms-3">
                    <div className="w-px h-5 bg-gray-200"></div>
                  </li>
                  <li>
                    <a href="#" className="flex gap-2 px-5 py-2 text-gray-400 transition duration-500 rounded-md group hover:rounded-full hover:bg-green-400 hover:text-white"><FaShoppingBag className="mt-1 text-green-400 transition-colors duration-500 group-hover:text-white" /> ช้อปปิ้ง</a>
                  </li>
                  <li className="mt-1 ms-3">
                    <div className="w-px h-5 bg-gray-200"></div>
                  </li>
                  <li>
                    <a href="#" className="flex gap-2 px-5 py-2 text-gray-400 transition duration-500 rounded-md group hover:rounded-full hover:bg-green-400 hover:text-white"><FaShoppingBasket className="mt-1 text-green-400 transition-colors duration-500 group-hover:text-white" /> ถนนคนเดิน</a>
                  </li>
                  <li className="mt-1 ms-3">
                    <div className="w-px h-5 bg-gray-200"></div>
                  </li>
                  <li>
                    <a href="#" className="flex gap-2 px-5 py-2 text-gray-400 transition duration-500 rounded-md group hover:rounded-full hover:bg-green-400 hover:text-white"><FaBeer className="mt-1 text-green-400 transition-colors duration-500 group-hover:text-white" /> ร้านนั่งชิว</a>
                  </li>
                  <li className="mt-1 ms-3">
                    <div className="w-px h-5 bg-gray-200"></div>
                  </li>
                  <li>
                    <a href="#" className="flex gap-2 px-5 py-2 text-gray-400 transition duration-500 rounded-md group hover:rounded-full hover:bg-green-400 hover:text-white"><FaDumbbell className="mt-1 text-green-400 transition-colors duration-500 group-hover:text-white" /> ฟิตเนส</a>
                  </li>
            
                </ul>
              </nav>
            </div>

            <form className="w-full mt-3">   
              <div className="relative">
                <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                  
                </div>
                <input type="search" className="focus:shadow-[0_0_10px_2px_#d3dff5] block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl focus:outline-none" placeholder="ค้นหาข้อมูล / ร้านอาหาร / ที่เที่ยว/ สถานที่ออกกำลังกาย" required />
                <button type="submit" className="flex gap-2 text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800  rounded-2xl text-sm px-4 py-2"><FaSearch className="mt-1"  />ค้นหา</button>
              </div>
            </form>
          </div>
        </div>

      
      
      {/* ประเภทร้านอาหาร */}
        <div className="relative w-full h-72 bg-gradient-to-b from-bg-living to-white">
          <div className="absolute z-40 w-1/2 text-center top-28 right-1/2">
            <h2 className="text-green-500 ">ประเภทร้านอาหาร</h2>
              
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
              className="absolute flex w-full max-w-4xl gap-4 p-2 px-4 overflow-hidden top-40 left-1/4"
            >
              {categories.map((item, i) => (
                <div key={i} className="flex flex-col items-center transition duration-300 cursor-pointer hover:scale-110">
                 <div className="flex items-center justify-center w-20 h-20 gap-3 bg-white border rounded-full shadow ">
                    <Image
                      src={item.icon}
                      alt="My Photo"
                      width={200}
                      height={40}
                      className="border-2 border-teal-400 border-solid rounded-full"
                    />
                  </div>
                  <p className="mt-2 text-sm text-green-500 whitespace-nowrap">{item.label}</p>
                </div>
              ))}
            </div>


        </div>
       {/* ประเภทร้านอาหาร */}

        {/* ร้านอาหารยอดนิยม */}
        <div className="relative flex justify-between p-2 bg-white">
          <div className="w-1/2 p-4">
            <label className="flex items-center justify-center gap-1 text-center text-md text-emerald-500"> ร้านอาหารยอดนิยม</label>
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
              pagination={{ clickable: true }}  // <<-- เปิดไข่ปลา
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
        {/* ร้านอาหารยอดนิยม */}

 

        {/* ร้านอาหารแบรนด์ต่างๆ */}
        <div className="relative w-full bg-white h-72">
          <div className="absolute z-40 w-1/2 text-center top-3 right-1/2">
            <h2 className="text-green-500 ">ดูเมนูใหม่จาก</h2>
          </div>
          <div className="absolute z-40 w-1/2 text-center text-black top-3 left-1/2">
            <a href="#" className="inline-flex items-center justify-center gap-1 text-center text-blue-500 underline text-md">ดูผู้พัฒนาทั้งหมด  <FaChevronRight className="text-blue-500" /></a>
          </div>

          <div className="absolute z-40 w-1/2 text-center text-black top-28 left-1/2">
            <div className="relative flex items-center justify-center">
              

              <button
                onClick={() => scrollMenu("right")}
                className="p-2 text-gray-500 bg-white rounded-full"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

        {iconStatusMenu == true && (
          <div className="absolute z-40 w-1/2 text-center text-black top-28 right-1/2">
            <div className="relative flex items-center justify-center">
              

              <button
                onClick={() => scrollMenu("left")}
                className="p-2 text-gray-500 bg-white rounded-full"
              >
                <FaChevronLeft />
              </button>
            </div>
          </div>
        )}
          

          <div
            ref={scrollRefMenu}
            className="absolute flex w-full max-w-4xl gap-4 p-4 px-5 overflow-hidden top-20 left-1/4"
          >
            {food.map((item, i) => (
              <div key={i} className="flex flex-col items-center transition duration-300 cursor-pointer hover:scale-110">
                <div className="flex items-center justify-center w-20 h-20 gap-3 bg-white border rounded-full shadow">
                  <Image
                    src={item.img}
                    alt="My Photo"
                    width={500}
                    height={40}
                    className="border-2 border-teal-400 border-solid rounded-full"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500 whitespace-nowrap">{item.subtitle}</p>
              </div>
            ))}
          </div>


        </div>
        {/* ร้านอาหารแบรนด์ต่างๆ */}


        {/* ร้านอาหารเปิดใหม่ */}
        <div className="relative flex justify-between p-2 bg-living">
          <div className="w-1/2 p-4">
            <label className="flex items-center justify-center gap-1 text-center text-md text-emerald-500"> <FaHotjar className="text-emerald-500" /> ร้านอาหารเปิดใหม่</label>
            <label className="flex justify-center pr-4 text-sm text-black">สำรวจร้านอาหารเปิดใหม่ที่น่าสนใจกันเลย</label>
          </div>
          <div className="w-1/2 p-4 text-center">
            <a href="#" className="inline-flex items-center justify-center gap-1 text-center text-blue-500 underline text-md">ดูร้านอาหารทั้งหมด  <FaChevronRight className="text-blue-500" /></a>
          </div>
        </div>
          
        <div className="relative flex justify-center bg-living">
           
          <div className="p-5">
            <div className="p-4 transition duration-200 transform bg-white border border-gray-200 cursor-pointer rounded-xl hover:shadow-lg hover:-translate-y-3">

              <div className="max-w-sm bg-white rounded-lg">
              
                <Image
                  src="/แคสเทลโล.jpg"
                  alt="My Photo"
                  width={500}
                  height={100}
                  className="border rounded-lg"
                />
                <div className="absolute z-50 flex items-center gap-1 px-3 py-1 text-sm text-white rounded shadow-lg top-6 bg-emerald-500">
                  <FaRegThumbsUp />RECOMMENDED
                </div>
                <div className="p-2 ">
                  <div className="p-4 bg-white">
                    <p className="text-lg font-bold text-black">Castello Di Bellagio Pattaya</p>
                    <div className="bg-white">
                      <p className="flex gap-2 text-sm text-gray-400"><FaMapMarked className="text-gray-400" /> 9 9 ตำบล นาจอมเทียน อำเภอสัตหีบ ชลบุรี</p>
                    </div>
                  </div>   
                  
                  <div className="flex justify-center gap-2 p-3 bg-white border-y">
                    <div className="items-start justify-start p-1 text-center text-gray-400 whitespace-nowrap">ที่จอดรถ
                      <p className="font-bold text-emerald-400">มี</p>
                    </div>
                    <div className="items-start justify-start p-1 text-center border-r-2">
                    </div>
                    <div className="items-start justify-start p-1 text-center text-gray-400 whitespace-nowrap">คะแนนรีวิว
                      <p className="font-bold text-emerald-400">10 / 10</p>
                    </div>
                      <div className="items-start justify-start p-1 text-center text-gray-400 whitespace-nowrap">ชั้น
                      <p className="font-bold text-emerald-400">2</p>
                    </div>
                      <div className="items-start justify-start p-1 text-center border-r-2">
                    </div>
                    <div className="items-start justify-start p-1 text-center text-gray-400 whitespace-nowrap">การเดินทาง
                      <p className="font-bold text-emerald-400">รถยนต์เท่านั้น</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        
          <div className="p-5">
            <div className="p-4 transition duration-200 transform bg-white border border-gray-200 cursor-pointer rounded-xl hover:shadow-lg hover:-translate-y-3">

              <div className="max-w-sm bg-white rounded-lg">
              
                <Image
                  src="/3บ้าน.jpg"
                  alt="My Photo"
                  width={500}
                  height={100}
                  className="border rounded-lg"
                />
                <div className="absolute z-50 flex items-center gap-1 px-3 py-1 text-sm text-white rounded shadow-lg top-6 bg-emerald-500">
                  <FaRegThumbsUp />RECOMMENDED
                </div>
                <div className="p-2 ">
                  <div className="p-4 bg-white">
                    <p className="text-lg font-bold text-black">3 บ้าน 8 บ้าน</p>
                    <div className="bg-white">
                      <p className="flex gap-2 text-sm text-gray-400"><FaMapMarked className="text-gray-400" /> 163/1 ถนน มาเจริญ เขตหนองแขม กรุงเทพมหานคร</p>
                    </div>
                  </div>   
                  
                  <div className="flex justify-center gap-2 p-3 bg-white border-y">
                    <div className="items-start justify-start p-1 text-center text-gray-400 whitespace-nowrap">ที่จอดรถ
                      <p className="font-bold text-emerald-400">มี</p>
                    </div>
                    <div className="items-start justify-start p-1 text-center border-r-2">
                    </div>
                    <div className="items-start justify-start p-1 text-center text-gray-400 whitespace-nowrap">คะแนนรีวิว
                      <p className="font-bold text-emerald-400">8.5 / 10</p>
                    </div>
                      <div className="items-start justify-start p-1 text-center text-gray-400 whitespace-nowrap">ชั้น
                      <p className="font-bold text-emerald-400">1</p>
                    </div>
                      <div className="items-start justify-start p-1 text-center border-r-2">
                    </div>
                    <div className="items-start justify-start p-1 text-center text-gray-400 whitespace-nowrap">การเดินทาง
                      <p className="font-bold text-emerald-400">รถทุกประเภท</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="p-5">
            <div className="p-4 transition duration-200 transform bg-white border border-gray-200 cursor-pointer rounded-xl hover:shadow-lg hover:-translate-y-3">

              <div className="max-w-sm bg-white rounded-lg">
              
                <Image
                  src="/Zap5.jpg"
                  alt="My Photo"
                  width={500}
                  height={100}
                  className="border rounded-lg"
                />
                <div className="absolute z-50 flex items-center gap-1 px-3 py-1 text-sm text-white rounded shadow-lg top-6 bg-emerald-500">
                  <FaRegThumbsUp />RECOMMENDED
                </div>
                <div className="p-2 ">
                  <div className="p-4 bg-white">
                    <p className="text-lg font-bold text-black">แซ่บนัว ครัวบ้านนาศาลายา</p>
                    <div className="bg-white">
                      <p className="flex gap-2 text-sm text-gray-400"><FaMapMarked className="text-gray-400" /> 150/40 ม.1 ต.ศาลายา อ.พุทธมณฑล จ.นครปฐม</p>
                    </div>
                  </div>   
                  
                  <div className="flex justify-center gap-2 p-3 bg-white border-y">
                    <div className="items-start justify-start p-1 text-center text-gray-400 whitespace-nowrap">ที่จอดรถ
                      <p className="font-bold text-emerald-400">มี</p>
                    </div>
                    <div className="items-start justify-start p-1 text-center border-r-2">
                    </div>
                    <div className="items-start justify-start p-1 text-center text-gray-400 whitespace-nowrap">คะแนนรีวิว
                      <p className="font-bold text-emerald-400">9.5 / 10</p>
                    </div>
                      <div className="items-start justify-start p-1 text-center text-gray-400 whitespace-nowrap">ชั้น
                      <p className="font-bold text-emerald-400">1</p>
                    </div>
                      <div className="items-start justify-start p-1 text-center border-r-2">
                    </div>
                    <div className="items-start justify-start p-1 text-center text-gray-400 whitespace-nowrap">การเดินทาง
                      <p className="font-bold text-emerald-400">รถยนต์</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ร้านอาหารเปิดใหม่ */}
       
        {/* ไอคอนรถไฟฟ้า */}
        <div className="relative w-full bg-white h-72">
          <div className="absolute z-40 w-1/2 text-center top-3 right-1/2">
            <h2 className="font-bold text-green-500 text-md ">ร้านอาหาร ใกล้รถไฟฟ้า</h2>
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
                <p className="mt-2 text-sm font-bold text-blue-900 whitespace-nowrap">รถไฟฟ้าสายสีแดง</p>
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
        {/* ไอคอนรถไฟฟ้า */}

       
     

        <div className="relative w-full gap-5 bg-white h-96">
          <h2 className="font-bold text-green-500 text-md"></h2>
             <div className="absolute z-40 w-1/2 text-center top-3 right-1/2">
            <h2 className="font-bold text-green-500 text-md ">ค้นหาร้านอาหารจากทำเลที่คุณต้องการ</h2>
          </div>
          <div className="flex justify-center gap-3 top-2">
              <div className="-translate-x-2/2 left-1/2">
                <div className="relative bg-white rounded-lg cursor-pointer h-80 w-96 top-16">
                  <Image 
                    src="/ร้านอาหารกทม.jpg" 
                    alt="My Photo" 
                    fill 
                  />
                </div>
              </div>
              <div className="-translate-x-2/2 right-1/2">
                <div className="relative bg-white rounded-lg cursor-pointer h-80 w-96 top-16">
                  <Image 
                    src="/แม่กลอง.jpg" 
                    alt="My Photo" 
                    fill 
                  />
                </div>
              </div>
          </div>
        </div>


       
        <div className="relative w-full gap-5 bg-white h-80">
          <div className="flex justify-center gap-3">
              <div className="-translate-x-2/2 left-1/2">
                <div className="relative bg-white rounded-lg cursor-pointer h-80 w-96 top-5">
                  <Image 
                    src="/นครปฐมครับ.jpg" 
                    alt="My Photo" 
                    fill 
                  />
                </div>
              </div>
               <div className="-translate-x-2/2 left-1/2">
                <div className="relative bg-white rounded-lg cursor-pointer h-80 w-96 top-5">
                  <Image 
                    src="/ราชปรารภ.jpg" 
                    alt="My Photo" 
                    fill 
                  />
                </div>
              </div>
              <div className="-translate-x-2/2 right-1/2">
                <div className="relative bg-white rounded-lg cursor-pointer h-80 w-96 top-5">
                  <Image 
                    src="/อุตรดิต.jpg" 
                    alt="My Photo" 
                    fill 
                  />
                </div>
              </div>
          </div>
        </div>

        <div className="relative w-full gap-5 bg-white h-96">
          <div className="flex justify-center gap-3">
              <div className="-translate-x-2/2 left-1/2">
                <div className="relative bg-white rounded-lg cursor-pointer h-80 w-96 top-5">
                  <Image 
                    src="/รวมอาหารครอบครัว.jpg" 
                    alt="My Photo" 
                    fill 
                  />
                </div>
              </div>
              <div className="-translate-x-2/2 right-1/2">
                <div className="relative bg-white rounded-lg cursor-pointer h-80 w-96 top-5">
                  <Image 
                    src="/Shopee.jpg" 
                    alt="My Photo" 
                    fill 
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
          
        {/* ประกาศล่าสุด */}
        <div className="relative flex justify-center bg-white">
           
          <div className="p-2">
            <div className="p-2 transition duration-200 transform bg-white border border-gray-200 cursor-pointer rounded-xl hover:shadow-lg hover:-translate-y-3">

              <div className="bg-white rounded-lg ">
              
                <Image
                  src="/pizza.jpg"
                  alt="My Photo"
                  width={300}
                  height={100}
                  className="duration-200 border rounded-lg cursor-pointer hover:scale-105 hover:opacity-70"
                />
                
                <div className="p-2 bg-white">
                  <p className="flex gap-2 text-lg font-bold text-black"><FaHotjar className="mt-1 text-red-600" />โปรโมชั่น ซื้อ 1 แถม 3<FaHotjar className="mt-1 text-red-600" /></p>
                  <div className="mt-2 bg-white">
                    <p className="flex gap-2 text-sm text-gray-700"><FaMapPin className="text-green-400" /> Pizza Hut ทุกสาขา</p>
                  </div>
                  <div className="flex gap-3 mt-2 bg-white">
                    <p className="flex gap-3 text-sm text-gray-700"><FaChair className="mt-1 text-green-400" /> 16 </p>
                    <p className="flex gap-3 text-sm text-gray-700"><FaParking className="mt-1 text-green-400" /> 5</p>
                  </div>
                </div> 
                <div className="p-4 bg-white">
                  <p className="text-lg font-bold text-black">฿ 299 - 499</p>
                  <div className="flex justify-between bg-white">
                    <p className="flex gap-2 text-sm text-gray-700"><FaClock className="mt-1 text-gray-400" /> สร้างเมื่อสักครู่</p>
                    <FaHotjar className="text-red-600 " />
                  </div>
                </div>
                
              </div>

              

            </div>
          </div>
          
          <div className="p-2">
            <div className="p-2 transition duration-200 transform bg-white border border-gray-200 cursor-pointer rounded-xl hover:shadow-lg hover:-translate-y-3">

              <div className="bg-white rounded-lg ">
              
                <Image
                  src="/mkduck.jpg"
                  alt="My Photo"
                  width={300}
                  height={100}
                  className="duration-200 border rounded-lg cursor-pointer hover:scale-105 hover:opacity-70"
                />
                <div className="p-2 bg-white">
                  <p className="text-lg font-bold text-black">โปรส่งท้ายเดือน ซื้อ 1 ฟรี 2 !!</p>
                  <div className="mt-2 bg-white">
                    <p className="flex gap-2 text-sm text-gray-700"><FaMapPin className="text-green-400" /> MK เซ็นทรัลลาดพร้าว</p>
                  </div>
                  <div className="flex gap-3 mt-2 bg-white">
                    <p className="flex gap-3 text-sm text-gray-700"><FaChair className="mt-1 text-green-400" /> - </p>
                    <p className="flex gap-3 text-sm text-gray-700"><FaParking className="mt-1 text-green-400" /> -</p>
                  </div>
                </div> 
                <div className="p-4 bg-white">
                  <p className="text-lg font-bold text-black">฿ 999</p>
                  <div className="flex justify-between bg-white">
                    <p className="flex gap-2 text-sm text-gray-400"><FaClock className="mt-1 text-gray-400" /> 23 ก.ย 2025</p>
                    <FaHotjar className="text-red-600 " />
                  </div>
                </div>
                
              </div>

              

            </div>
          </div>

          <div className="p-2">
            <div className="p-2 transition duration-200 transform bg-white border border-gray-200 cursor-pointer rounded-xl hover:shadow-lg hover:-translate-y-3">

              <div className="bg-white rounded-lg ">
              
                <Image
                  src="/1แถม1.jpg"
                  alt="My Photo"
                  width={300}
                  height={100}
                  className="duration-200 border rounded-lg cursor-pointer hover:scale-105 hover:opacity-70"
                />
                <div className="p-2 bg-white">
                  <p className="text-lg font-bold text-black">ข้าวหน้ากุ้งเทมปุระ X2 !!</p>
                  <div className="mt-2 bg-white">
                    <p className="flex gap-2 text-sm text-gray-700"><FaMapPin className="text-green-400" /> KAKASHI สาขา วิคตอเรียการ์เด้น</p>
                  </div>
                  
                  <div className="flex gap-3 mt-2 bg-white">
                    <p className="flex gap-3 text-sm text-gray-700"><FaChair className="mt-1 text-green-400" /> 4 </p>
                    <p className="flex gap-3 text-sm text-gray-700"><FaParking className="mt-1 text-green-400" /> 3</p>
                  </div>
                </div> 
                <div className="p-4 bg-white">
                  <p className="text-lg font-bold text-black">฿ 119</p>
                  <div className="flex justify-between bg-white">
                    <p className="flex gap-2 text-sm text-gray-400"><FaClock className="mt-1 text-gray-400" /> 21 ก.ย 2025</p>
                    <FaHotjar className="text-red-600 " />
                  </div>
                </div>
                
              </div>

            </div>
          </div>

        </div>
        {/* ประกาศล่าสุด */}

{/* ประกาศคอนโดยอดนิยม */}
        <div className="relative flex justify-between p-2 bg-white">
          <div className="w-1/2 p-4">
            <label className="flex items-center justify-center gap-1 text-center text-md text-emerald-500"> ประกาศคอนโดยอดนิยม</label>
          </div>
          <div className="w-1/2 p-4 text-center">
            <a href="#" className="inline-flex items-center justify-center gap-1 text-center text-blue-500 underline text-md">คอนโดทั้งหมด  <FaChevronRight className="text-blue-500" /></a>
          </div>
        </div>
       
        <div className="relative flex justify-center p-2 bg-white rounded-md border-emerald-300">
          <div className="w-1/2 p-4 border rounded-lg border-emerald-400">
            <Swiper
              modules={[Grid, Navigation]}
              slidesPerView={5}             // ลดจาก 5 → 3 (ให้รูปใหญ่ขึ้น)
              grid={{ rows: 2, fill: 'row' }} // 2 แถว
              spaceBetween={20}             // ช่องว่างระหว่างรูป
              slidesPerGroup={3}            // เลื่อนทีละ 3 รูป
            >
              {locationsNotify.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="relative overflow-hidden transition duration-200 border rounded-lg cursor-pointer w-44 h-44 hover:scale-105 hover:opacity-80">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2 text-white bg-black/40">
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="w-full h-32 mt-5">
              <ul className="flex flex-row justify-start gap-4 rounded-lg p-9 lg:overflow-x-auto text-md md:flex-row lg:whitespace-nowrap md:overflow-x-auto md:whitespace-nowrap">
                <li>
                  <a href="#" className="inline-block py-2 text-blue-500 transition duration-100 bg-blue-100 rounded-full px-9 hover:bg-blue-300">ร้านอาหารใกล้ BTS สายหลัก</a>
                </li>
                  <li>
                  <a href="#" className="inline-block py-2 text-blue-500 transition duration-100 bg-blue-100 rounded-full px-9 hover:bg-blue-300">ร้านอาหารใกล้ BTS สายสีทอง</a>
                </li>
                  <li>
                  <a href="#" className="inline-block py-2 text-blue-500 transition duration-100 bg-blue-100 rounded-full px-9 hover:bg-blue-300">ร้านอาหารใกล้ MRT สายสีน้ำเงิน</a>
                </li>
                  <li>
                  <a href="#" className="inline-block py-2 text-blue-500 transition duration-100 bg-blue-100 rounded-full px-9 hover:bg-blue-300">ร้านอาหารใกล้ MRT สายสีม่วง</a>
                </li>
                  <li>
                  <a href="#" className="inline-block py-2 text-blue-500 transition duration-100 bg-blue-100 rounded-full px-9 hover:bg-blue-300">ร้านอาหารใกล้ MRT สายสีเหลือง</a>
                </li>
                <li>
                  <a href="#" className="inline-block py-2 text-blue-500 transition duration-100 bg-blue-100 rounded-full px-9 hover:bg-blue-300">ร้านอาหารใกล้ MRT สายสีชมพู</a>
                </li>
                <li>
                  <a href="#" className="inline-block py-2 text-blue-500 transition duration-100 bg-blue-100 rounded-full px-9 hover:bg-blue-300">ร้านอาหารใกล้ Airport Link</a>
                </li>
                <li>
                  <a href="#" className="inline-block py-2 text-blue-500 transition duration-100 bg-blue-100 rounded-full px-9 hover:bg-blue-300">ร้านอาหารใกล้รถไฟฟ้าสายสีแดง</a>
                </li>
                  <li>
                  <a href="#" className="inline-block py-2 text-blue-500 transition duration-100 bg-blue-100 rounded-full px-9 hover:bg-blue-300">ร้านอาหารใกล้ รถ BRT</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
{/* ประกาศคอนโดยอดนิยม */}


{/* ประกาศบ้านยอดนิยม */}

        <div className="relative flex justify-between p-2 bg-white">
          <div className="w-1/2 p-4">
            <label className="flex items-center justify-center gap-1 text-center text-md text-emerald-500"> ประกาศบ้านยอดนิยม</label>
          </div>
          <div className="w-1/2 p-4 text-center">
            <a href="#" className="inline-flex items-center justify-center gap-1 text-center text-blue-500 underline text-md">บ้านทั้งหมด  <FaChevronRight className="text-blue-500" /></a>
          </div>
        </div>

        <div className="relative flex justify-center p-2 bg-white rounded-md border-emerald-300">
          <div className="w-1/2 p-4 border rounded-lg border-emerald-400">
          <Swiper
            modules={[Grid, Navigation]}
            slidesPerView={4}
            spaceBetween={30}
            slidesPerGroup={4}
          >
            {locationsNotifyHome.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-48 h-48 overflow-hidden transition duration-200 border rounded-lg cursor-pointer hover:scale-105 hover:opacity-80">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-white bg-black/40">
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-full h-32 mt-5">
            <ul className="flex flex-row justify-start gap-4 rounded-lg p-9 lg:overflow-x-auto text-md md:flex-row lg:whitespace-nowrap md:overflow-x-auto md:whitespace-nowrap">
              <li>
                <a href="#" className="inline-block py-2 text-blue-500 transition duration-100 bg-blue-100 rounded-full px-9 hover:bg-blue-300">บ้านใกล้ BTS สายหลัก</a>
              </li>
                <li>
                <a href="#" className="inline-block py-2 text-blue-500 transition duration-100 bg-blue-100 rounded-full px-9 hover:bg-blue-300">บ้านใกล้ BTS สายสีทอง</a>
              </li>
                <li>
                <a href="#" className="inline-block py-2 text-blue-500 transition duration-100 bg-blue-100 rounded-full px-9 hover:bg-blue-300">บ้านใกล้ MRT สายสีน้ำเงิน</a>
              </li>
                <li>
                <a href="#" className="inline-block py-2 text-blue-500 transition duration-100 bg-blue-100 rounded-full px-9 hover:bg-blue-300">บ้านใกล้ MRT สายสีม่วง</a>
              </li>
                <li>
                <a href="#" className="inline-block py-2 text-blue-500 transition duration-100 bg-blue-100 rounded-full px-9 hover:bg-blue-300">บ้านใกล้ MRT สายสีเหลือง</a>
              </li>
              <li>
                <a href="#" className="inline-block py-2 text-blue-500 transition duration-100 bg-blue-100 rounded-full px-9 hover:bg-blue-300">บ้านใกล้ MRT สายสีชมพู</a>
              </li>
              <li>
                <a href="#" className="inline-block py-2 text-blue-500 transition duration-100 bg-blue-100 rounded-full px-9 hover:bg-blue-300">บ้านใกล้ Airport Link</a>
              </li>
                <li>
                <a href="#" className="inline-block py-2 text-blue-500 transition duration-100 bg-blue-100 rounded-full px-9 hover:bg-blue-300">บ้านใกล้รถไฟฟ้าสายสีแดง</a>
              </li>
                <li>
                <a href="#" className="inline-block py-2 text-blue-500 transition duration-100 bg-blue-100 rounded-full px-9 hover:bg-blue-300">บ้านใกล้ รถ BRT</a>
              </li>
            </ul>
          </div>
          </div>
        </div>
{/* ประกาศบ้านยอดนิยม */}
        
        {/* PARTNERSHIP */}
        <div className="relative flex justify-between p-2 bg-white">
          <div className="w-1/2 p-4">
            <label className="flex items-center justify-center gap-1 font-bold text-center text-md text-emerald-500">PARTNERSHIP</label>
          </div>
         
          
        </div>

        <div className="relative flex justify-center gap-5 bg-white">
          
          <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/copper.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

          
          <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/bonchon.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/kfc.jpg"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/mcdonal1.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/mk.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/momo.jpg"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>
          
        </div>

        <div className="relative flex justify-center gap-5 bg-white">
          
          <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/chester.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

          
          <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/santafe.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/subway1.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/sushiro.jpg"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/tenjo.jpg"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/tensai.jpg"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>
          
        </div>

        <div className="relative flex justify-center gap-5 bg-white">
          
          <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/burgerking.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

          
          <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/yayoi.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/นิตยา.jpg"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/barbqueplaza1.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/shabushi.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/วราภรณ์.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>
          
        </div>

        <div className="relative flex justify-center gap-5 bg-white">
          
          <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/afteryou.jpg"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

          
          <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/aka.jpg"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/netagrill.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/youandi.jpg"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/เนื้อแท้.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/coco.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>
          
        </div>

        <div className="relative flex justify-center gap-5 bg-white">
          
          <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/shinkanzen.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

          
          <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/potato.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/ชาตรามือ.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/gaga.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/teenoi.jpg"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/amazon.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>
          
        </div>

        <div className="relative flex justify-center gap-5 bg-white">
          
          <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/starbuck.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

          
          <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/jonesalad.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/guguchicken.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/choongman.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/ทองสมิธ.jpg"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/yamazaki.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>
          
        </div>

        <div className="relative flex justify-center gap-5 bg-white">
          
          <div className="flex items-start justify-start w-36 h-36">
            <Image
              src="/ฮาจิบัง1.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

          <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/sukishi.jpg"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

          <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/swensen.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

          <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/pizzahut.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

          <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/dq.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

          <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/pizzacompany.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>
          
        </div>

        <div className="relative flex justify-center gap-5 bg-white">
          
          <div className="flex items-start justify-start w-36 h-36">
            <Image
              src="/dunkind.jpg"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

          
          <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/fukumatcha.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/krispy.jpg"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/misterdonunt.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/beer.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>

           <div className="flex items-start justify-start cursor-pointer w-36 h-36">
            <Image
              src="/สิงห์.png"
              alt="My Photo"
              width={500}
              height={40}
              className="p-2"
            />
          </div>
          
        </div>

        <div className="w-full text-center bg-slate-300 h-72">
          <div className="p-5"> 
            <h2 className="font-bold text-gray-600">ลงประกาศ ขาย ให้เช่า คอนโด บ้าน ที่ดิน ที่ไหนดี เว็บไหนดี ต้อง LivingInsider.com</h2>
            <label className="text-gray-600">
              Livinginsider.com เป็นเว็บไซต์สำหรับลงประกาศขายและให้เช่าคอนโด บ้าน โดยใช้งานฟรี ไม่มีค่าใช้จ่าย ทั้งเช่าที่อยู่อาศัยในกรุงเทพฯ และทั่วประเทศ ไม่ว่าจะเช่าบ้านเป็นหลัง เช่าห้องในคอนโด ไปจนถึงประกาศหาผู้เช่า ปล่อยขาย และหาผู้ซื้อ ที่นี่คือแหล่งรวมประกาศจากผู้ซื้อขายและให้เช่าที่ดีที่สุด
              ที่เว็บ Livinginsider.com เป็นพื้นที่ลงประกาศขายและให้เช่าบ้าน คอนโดและที่ดิน ฟรี ซึ่งจะช่วยให้สามารถปล่อยขายหรือปล่อยเช่าได้อย่างสะดวก และหากใครที่กำลังมองหาบ้านหรือคอนโด ราคาถูก ไม่ว่าจะเป็น บ้านและคอนโดมือสอง หรือ บ้านและคอนโดใหม่ ในทุกทำเลยอดนิยม จึงควรเลือกใช้บริการจากเรา โดย LivingInsider.com เป็นเว็บที่รู้จักอย่างแพร่หลายและมีผู้ใช้งานเป็นจำนวนมาก เนื่องจากเหตุผลดี ๆ ดังต่อไปนี้
            </label>
            <p className="text-gray-600">

              นอกจากการลงประกาศเช่าที่อยู่อาศัยในกรุงเทพฯ รวมถึงประกาศซื้อขายต่าง ๆ แล้ว Livinginsider.com ยังอัปเดต บทความและข่าวสารด้านอสังหาฯ ทุกวัน ไม่ว่าจะเป็น รีวิวบ้าน รีวิวคอนโด บนทำเลยอดนิยม เพื่อให้ได้ที่อยู่อาศัยที่ดีที่สุด รวมไปถึงแนวทางการตกแต่งบ้านและตกแต่งคอนโด ที่สามารถนำไปประยุกต์ใช้ได้ง่าย ๆ รวมถึงเกร็ดความรู้ด้านการลงทุน ที่จะช่วยให้ทุกคนได้ความรู้ด้านอสังหาฯ อย่างครบรอบด้าน
            </p>
          </div>
          
        
        </div>

      </div>
    </>
     
  );
}
