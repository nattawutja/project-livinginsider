import Image from "next/image";


export default function Home() {
  return (
    
    <div className="min-h-screen"> {/* parent ต้อง relative */}
        <div className="relative w-full h-96 overflow-hidden">
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
        <div className="relative z-10 text-white p-4">
          <h1 className="text-xl font-bold">This is my div</h1>
        </div>
   </div>
     
  );
}
