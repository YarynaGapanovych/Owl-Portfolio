"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { useEffect, useState } from "react";

type ProjectImageGalleryProps = {
  projectName: string;
  images: string[];
};

export default function ProjectImageGallery({
  projectName,
  images,
}: ProjectImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (images.length === 0) {
    return null;
  }

  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isMobile = windowWidth < 768;

  const hasMultipleImages = isMobile
    ? images.length > 1
    : isTablet
      ? images.length > 2
      : images.length > 3;

  const splideOptions = {
    type: "loop" as const,
    perPage: 3,
    perMove: 1,
    gap: "1rem",
    autoplay: false,
    arrows: true,
    pagination: true,
    height: "250px",
    breakpoints: {
      1024: {
        perPage: 3,
        height: "250px",
      },
      768: {
        perPage: 2,
        height: "250px",
      },
      640: {
        perPage: 1,
        height: "200px",
      },
    },
  };

  const ImageThumbnail = ({
    image,
    index,
    isCarousel = false,
  }: {
    image: string;
    index: number;
    isCarousel?: boolean;
  }) => (
    <div
      className={`relative rounded-lg overflow-hidden cursor-pointer group flex items-center justify-center bg-bunker ${
        isCarousel ? "h-full" : ""
      }`}
      onClick={() => setSelectedImage(image)}
    >
      <div className={`relative w-full ${isCarousel ? "h-full" : "h-64"}`}>
        <Image
          src={image}
          alt={`${projectName} - Image ${index + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
        <svg
          className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
          />
        </svg>
      </div>
    </div>
  );

  return (
    <>
      <div className="mb-12">
        {hasMultipleImages ? (
          <div className="project-gallery-carousel">
            <Splide options={splideOptions}>
              {images.map((image, index) => (
                <SplideSlide key={index} className="h-full">
                  <ImageThumbnail
                    image={image}
                    index={index}
                    isCarousel={true}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        ) : (
          <div
            className={`grid grid-cols-1 ${isTablet ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"} gap-4`}
          >
            {images.map((image, index) => (
              <ImageThumbnail key={index} image={image} index={index} />
            ))}
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt={projectName}
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-subheader transition-colors p-2"
              aria-label="Close image"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
