'use client';

import Product from './../component/Product';
import Auction from './../component/Auction';
import Linking from './../component/Linking';
import Creators from './../component/Creators';
import Image from 'next/image';
import { carouselI, featuredI } from '../../../resources/interfaces';
import { motion, Variants } from 'framer-motion';

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

	return (
		<>
			<header className="flex flex-col gap-5 text-center px-5">
				<h1 className="text-3xl">
					Photography is poetry and beautiful untold stories
				</h1>
				<p className="text-lg">
					Flip through more than 10,000 vintage shots, old photograghs, historic
					images and captures seamlessly in one place. Register to get top
					access.
				</p>
				<div className="relative flex justify-center h-[320px] mt-6">
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
									}`}
								/>
							</div>
						);
					})}
				</div>
			</header>
			<div className="px-3 mt-24">
				<h1 className="text-3xl font-bold">Featured products</h1>
				<div className="mt-8 flex flex-col gap-12">
					{featuredProducts.map(
						(featured_product: { id: string; url: string; name: string }) => {
							const { id, url, name } = featured_product;
							return <Product key={id} url={url} name={name} />;
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
				<Linking link={'Explore marketplace'} />
				<Linking link={'See auction'} />
			</div>
			<div>
				<Creators />
			</div>
		</>
	);
};

export default HomePage;
