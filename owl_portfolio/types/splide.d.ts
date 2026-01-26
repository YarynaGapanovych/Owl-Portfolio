declare module "@splidejs/react-splide" {
  import { ComponentType, ReactNode } from "react";

  export interface SplideOptions {
    type?: string;
    perPage?: number;
    perMove?: number;
    gap?: string;
    autoplay?: boolean;
    interval?: number;
    speed?: number;
    pauseOnHover?: boolean;
    resetProgress?: boolean;
    arrows?: boolean;
    pagination?: boolean;
    breakpoints?: Record<number, Partial<SplideOptions>>;
    [key: string]: unknown;
  }

  export interface SplideProps {
    options?: SplideOptions;
    children?: ReactNode;
    className?: string;
    [key: string]: unknown;
  }

  export interface SplideSlideProps {
    children?: ReactNode;
    className?: string;
    [key: string]: unknown;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
}
