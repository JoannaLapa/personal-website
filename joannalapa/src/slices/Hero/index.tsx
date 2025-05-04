'use client'
import { Content, KeyTextField } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import React from 'react'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import Bounded from '@/components/Bounded'
import Shapes from './Shapes';


/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): React.ReactElement => {
	const component = useRef(null)

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline()
			tl.fromTo(
				'.name-animation',
				{ x: -100, opacity: 0, rotate: -10 },
				{
					x: 0,
					opacity: 1,
					rotate: 0,
					ease: 'elastic.out(1, 0.3)',
					duration: 1,
					transformOrigin: 'left top',
					stagger: {
						each: 0.1,
						from: 'random',
					},
				}
			)

      tl.fromTo(".description", {
        y: 20,
        opacity: 0,
        scale: 1.2
      }, {
        y:0,
        opacity: 1,
        duration: 1,
        scale: 1,
        ease: 'elastic.out(1, 0.3)',
        delay: 0.5
      })
		}, component)
		return () => ctx.revert()
	}, [])
	const renderLetter = (name: KeyTextField, key: string) => {
		if (!name) return
		return name.split('').map((letter, i) => (
			<span key={i} className={`name-animation name-animation-${key} inline-block opacity-0`}>
				{letter}
			</span>
		))
	}

	return (
		<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation} ref={component}>
			<div className='grid min-h-[70vh] grid-cols-1 items-center md:grid-cols-2'>
        <Shapes />
				<div className='col-start-1 md:row-start-1'>
					<h1
						className='mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-tracking-tighter'
						aria-label={`${slice.primary.firstname} ${slice.primary.lastname}`}>
						<span className='block text-slate-100'>{renderLetter(slice.primary.firstname, 'first')}</span>
						<span className='-mt[0.2em] block textslate-100'>{renderLetter(slice.primary.lastname, 'last')}</span>
					</h1>
          <span className='description block text-slate-100 text-2xl font-bold uppercase teacking-[.2em] md:text-4xl opacity-0'>
							{slice.primary.description}
						</span>
				</div>
			</div>
		</Bounded>
	)
}

export default Hero
