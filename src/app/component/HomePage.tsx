'use client';

import Product from './../component/Product';
import Auction from './../component/Auction';
import Linking from './../component/Linking';
import Creators from './../component/Creators';
import Image from 'next/image';
import { carouselI, featuredI } from '../../../resources/interfaces';
import { motion, Variants, useTransform, useScroll } from 'framer-motion';

const HomePage = ({
	featuredProducts,
	carousel,
}: {
	featuredProducts: featuredI[];
	carousel: carouselI[];
}) => {
	const cardVariants: Variants = {
		offscreen: {
			y: 300,
		},
		onscreen: {
			y: 0,
			transition: {
				type: 'spring',
				bounce: 0.4,
				duration: 0.8,
			},
		},
	};

	const shuffle = (array: any[]) => {
		return array
			?.map((value: any) => ({ value, sort: Math.random() }))
			.sort((a: any, b: any) => a.sort - b.sort)
			.map(({ value }: any) => value);
	};

	const { scrollYProgress } = useScroll();
	const yPos = useTransform(scrollYProgress, [0, 1000], [0, -700]);

	return (
		<>
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
							{shuffle(carousel).map(
								(data: { id: string; url: string }, index: number) => {
									return (
										<motion.div
											key={data.id}
											style={{ y: yPos }}
											transition={{
												ease: 'linear',
												duration: 2,
												x: { duration: 1 },
											}}
											className={`h-full origin-right transition-all`}
										>
											<Image
												src={data.url}
												fill
												alt="carousel"
												className={`aspect-square`}
											/>
										</motion.div>
									);
								}
							)}
						</div>
						<div className="w-[358px] h-[428x] relative translate-y-14 overflow-hidden">
							{shuffle(carousel).map(
								(data: { id: string; url: string }, index: number) => {
									return (
										<motion.div
											key={data.id}
											style={{ y: yPos }}
											transition={{ duration: 2, delay: 20 }}
											className={`h-full origin-right transition-all`}
										>
											<Image
												src={data.url}
												fill
												alt="carousel"
												className={`aspect-square`}
											/>
										</motion.div>
									);
								}
							)}
						</div>
						<div className="w-[358px] h-[444px] relative -translate-y-4 overflow-hidden">
							{shuffle(carousel).map(
								(data: { id: string; url: string }, index: number) => {
									return (
										<motion.div
											key={data.id}
											style={{ y: yPos }}
											transition={{ duration: 5, delay: 1 }}
											className={`h-full origin-right transition-all`}
										>
											<Image
												src={data.url}
												fill
												alt="carousel"
												className={`aspect-square`}
											/>
										</motion.div>
									);
								}
							)}
						</div>
						<div className="w-[358px] h-[428px] relative translate-y-11 overflow-hidden">
							{shuffle(carousel).map(
								(data: { id: string; url: string }, index: number) => {
									return (
										<motion.div
											key={data.id}
											style={{ y: yPos }}
											transition={{ duration: 7.5, delay: 10 }}
											className={`h-full origin-right transition-all`}
										>
											<Image
												src={data.url}
												fill
												alt="carousel"
												className={`aspect-square`}
											/>
										</motion.div>
									);
								}
							)}
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
		</>
	);
};

export default HomePage;
