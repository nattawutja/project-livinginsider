import Image from "next/image";


export default function Home() {
  return (
    
    <div className="min-h-screen bg-blue-100" > {/* parent ต้อง relative */}
        <div className="relative w-full h-80 overflow-hidden z-40">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          >
            <source src="/town.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="rounded-xl absolute top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-black p-7 z-50 w-1/2">
          <h1 className="text-xl font-bold text-white">เว็บประกาศ ขาย ให้เช่า คอนโด บ้าน ที่ดิน ยอดนิยม ดีที่สุด ลงประกาศฟรี</h1>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-sm flex flex-col mt-4 rounded-lg md:flex-row gap-4">
                <li>
                  <a href="#" className="inline-block text-white hover:text-amber-500">คอนโดหรู</a>
                </li>
                <li>
                  <a href="#" className="inline-block text-white hover:text-amber-500">เช่าคอนโด</a>
                </li>
                 <li>
                  <a href="#" className="inline-block  text-white hover:text-amber-500">ขายคอนโด</a>
                </li>
                <li>
                  <a href="#" className="inline-block  text-white hover:text-amber-500">เช่าบ้าน</a>
                </li>
                 <li>
                  <a href="#" className="inline-block  text-white hover:text-amber-500">ขายบ้าน</a>
                </li>
                <li>
                  <a href="#" className="inline-block  text-white hover:text-amber-500">ขายที่ดิน</a>
                </li>
            </ul>
          </div>

        </div>

        <div className="relative min-h-screen">
          <div className="bg-white rounded-xl absolute top-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border text-black p-7 z-50 w-1/2">
            <form className="w-full">   
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    
                  </div>
                  <input type="search" className="focus:shadow-[0_0_10px_2px_#d3dff5] block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl focus:outline-none" placeholder="ค้นหาข้อมูล" required />
                  <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
          </div>
          <div className="bg-white rounded-xl absolute top-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border text-black p-7 z-50 w-1/2">
            <form className="w-full">   
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    
                  </div>
                  <input type="search" className="focus:shadow-[0_0_10px_2px_#d3dff5] block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl focus:outline-none" placeholder="ค้นหาข้อมูล" required />
                  <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
          </div>
        </div>

   </div>
     
  );
}
