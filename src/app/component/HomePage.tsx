'use client';

import Product from './../component/Product';
import Auction from './../component/Auction';
import Linking from './../component/Linking';
import Creators from './../component/Creators';
import Image from 'next/image';
import { carouselI, featuredI } from '../../../resources/interfaces';
import { motion, useTransform, useScroll } from 'framer-motion';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import shuffle from '../../../utils/shuffle';
import { useState, useEffect } from 'react';

const HomePage = ({
	featuredProducts,
	carousel,
}: {
	featuredProducts: featuredI[];
	carousel: carouselI[];
}) => {
	const randomImages = carousel.map((data) => {
		return (
			<div key={data.id} className="h-96">
				<Image
					src={data.url}
					width={768}
					height={30}
					alt="carousel"
					className="h-full object-cover aspect-[2/3]"
				/>
			</div>
		);
	});

	const carouselContainer = (data: carouselI[]) => (
		<AliceCarousel
			items={data}
			autoPlay
			infinite
			autoPlayInterval={1000}
			disableButtonsControls={true}
			disableDotsControls={true}
			animationType="slide"
			animationDuration={200}
			ssrSilentMode
		/>
	);

	return (
		<section className="overflow overflow-hidden">
			<header className="flex flex-col gap-5 text-center px-5">
				<h1 className="text-3xl md:text-[80px] md:max-w-5xl text-center md:leading-[100px] md:px-12 md:mx-auto">
					Photography is poetry & beautiful untold stories
				</h1>
				<p className="text-lg md:max-w-4xl md:mx-auto md:mt-6">
					Flip through more than 10,000 vintage shots, old photograghs, historic
					images and captures seamlessly in one place. Register to get top
					access.
				</p>
				<div className="relative flex justify-center h-[320px] mt-6 md:hidden">
					{carousel.map((data: { id: string; url: string }, index: number) => {
						return (
							<div key={data.id} className="absolute w-[320px] h-[280px]">
								<Image
									src={data.url}
									width={500}
									height={800}
									alt="carousel"
									className={`aspect-square ${
										index % 2 === 0
											? '-rotate-[7deg]'
											: index === 1
											? 'rotate-[9.31deg]'
											: ''
									} md:w-[356px] md:h-[444px]`}
								/>
							</div>
						);
					})}
				</div>
				<div className="hidden md:block mt-6">
					<div className="flex gap-4 justify-center">
						<div className="w-[358px] h-[332px] relative translate-y-20 overflow-hidden">
							{carouselContainer(shuffle(randomImages))}
						</div>
						<div className="w-[358px] h-[428x] relative translate-y-14 overflow-hidden">
							{carouselContainer(shuffle(randomImages))}
						</div>
						<div className="w-[358px] h-[444px] relative -translate-y-4 overflow-hidden">
							{carouselContainer(shuffle(randomImages))}
						</div>
						<div className="w-[358px] h-[428px] relative translate-y-11 overflow-hidden">
							{carouselContainer(shuffle(randomImages))}
						</div>
					</div>
				</div>
			</header>
			<div className="px-3 mt-24 md:mt-36  md:max-w-7xl mx-auto">
				<h1 className="text-3xl font-bold md:text-[40px] md:font-medium">
					Featured products
				</h1>
				<div className="mt-8 flex flex-col gap-12">
					{featuredProducts.map(
						(featured_product: { id: string; url: string; name: string }) => {
							const { id, url, name } = featured_product;
							return (
								<div key={id}>
									<hr className="hidden md:block mb-12 text-primary" />
									<Product url={url} name={name} />
								</div>
							);
						}
					)}
				</div>
			</div>
			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.8 }}
			>
				<Auction />
			</motion.div>
			<div>
				<Linking title={'Explore marketplace'} link="marketplace" />
				<Linking title={'See auction'} link="auction" />
			</div>
			<div>
				<Creators />
			</div>
		</section>
	);
};

export default HomePage;
