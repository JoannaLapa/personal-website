import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React from 'react';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): React.ReactElement => {
  const renderLetter = (name: KeyTextField, key: string) => {
    if (!name) return;
    return name.split("").map((letter, i) => (
      <span
        key={i}
        className={`name-animation name-animation-${key} inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid min-h-[70vh] grid-cols-1 items-center">
        <div className="col-start-1 md:row-start-1">
          <h1
            className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-tracking-tighter"
            aria-label={`${slice.primary.firstname} ${slice.primary.lastname}`}
          >
            <span className="block text-slate-300">
              {renderLetter(slice.primary.firstname, "first")}
            </span>
            <span className="-mt[0.2em] block text-slate-500">
              {renderLetter(slice.primary.lastname, "last")}
            </span>
            <span className="block bg-gradient-to-tr from-yellow-500 via-red-200 bg-clip-text text-2xl font-bold uppercase teacking-[.2em] text-transparent opacity-100 md:text-4xl">
              {slice.primary.description}
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
