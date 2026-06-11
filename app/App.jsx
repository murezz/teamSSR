import Orb from "../components/Orb";
import Navbar from '../components/Navbar';
import Image from "next/image";

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans">
      <Navbar />
      <main className="relative flex w-full flex-col items-center justify-center py-20">
        {/* Kontainer Utama untuk Orb dan Teks */}
        <div
          className="relative flex items-center justify-center"
          style={{ width: "100%", height: "600px" }}
        >
          {/* Komponen Orb */}
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={250} // Ubah hue ke sekitar 250 untuk warna biru/ungu seperti di gambar
            forceHoverState={false}
          />

          {/* Konten Teks di Atas Orb */}
          <div className="absolute inset-0 px-12 flex flex-col items-center justify-center text-center z-10 pointer-events-none">
            <div className="flex w-full justify-items-stretch">
              <div className="w-full flex flex-col items-start justify-center gap-6">

                <h1 className="text-4xl font-sembold tracking-tight text-white">
                  Hello, My Name is
                </h1>
                <h1 className="text-5xl font-bold tracking-tight text-white">
                  Muhammad Reza Aditya
                </h1>

                <div className="mt-8 flex gap-4 pointer-events-auto">
                  <button className="rounded-xl bg-white px-8 py-3 font-semibold text-black transition-transform hover:scale-105">
                    Get started
                  </button>
                  <button className="rounded-xl bg-zinc-800/50 border border-zinc-700 px-8 py-3 font-semibold text-white transition-all hover:bg-zinc-800">
                    Learn more
                  </button>
                </div>
              </div>
              <div className="w-full flex items-center justify-center">
                <Image
                  className="dark:invert w-2/3 h-auto backdrop-blur-md"
                  src="/profile.png"
                  alt="Profile image"
                  width={200}
                  height={200}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
