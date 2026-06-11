"use client";

import Navbar from "@/components/Navbar";
import DomeGallery from "../components/DomeGallery";

const myImages = [
  { src: "/photo/photo.jpg", alt: "Foto 1" },
  { src: "/photo/photo2.jpg", alt: "Foto 2" },
  { src: "/photo/photo4.jpg", alt: "Foto 4" },
  { src: "/photo/photo6.jpg", alt: "Foto 6" },
  { src: "/photo/photo7.jpg", alt: "Foto 7" },
  { src: "/photo/photo8.jpg", alt: "Foto 8" },
  { src: "/photo/photo9.jpg", alt: "Foto 9" },
  { src: "/photo/photo11.jpg", alt: "Foto 11" },
  { src: "/photo/photo12.jpg", alt: "Foto 12" },
  { src: "/photo/photo13.jpg", alt: "Foto 13" },
  { src: "/photo/photo14.jpg", alt: "Foto 14" },
  { src: "/photo/photo15.jpg", alt: "Foto 15" },
  { src: "/photo/photo16.jpg", alt: "Foto 16" },
];

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
        <Navbar />
        {/* <main className="relative flex w-full flex-col items-center justify-center py-20"> */}
          <DomeGallery
            images={myImages}
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={3}
            segments={34}
            dragDampening={2.4}
            grayscale
          />
          <div className="fixed bottom-6 left-1/2 z-[50] w-auto max-w-4xl -translate-x-1/2">
            <p className="text-center text-white text-xs">
              © 2026 Street Soul Runners. All rights reserved.
            </p>
          </div>
        {/* </main> */}
    </div>
  );
}
