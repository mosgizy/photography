'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const Auction = () => {
	const cardVariants: Variants = {
		offscreen: {
			x: 500,
		},
		onscreen: {
			x: 0,
			transition: {
				type: 'spring',
				bounce: 0.4,
				duration: 0.8,
			},
		},
	};
	return (
		<motion.div
			className="bg-auction-linear bg-contain my-24 w-full text-white py-8 px-8 md:py-4 md:px-16 origin-bottom"
			variants={cardVariants}
		>
			<div className="w-max hidden md:block">
				<h1 className="font-medium pb-2">
					See Upcoming Auctions and Exhibitions
				</h1>
				<hr className="text-white px-6 block pb-4" />
			</div>
			<div className="bg-auction-image bg-no-repeat bg-cover py-8 px-2 md:px-8">
				<div className="flex flex-col gap-3 md:gap-0 md:mt-52">
					<h2 className="uppercase flex items-center gap-5 md:w-[25ch]">
						<div className="basis-10 flex justify-end">
							<span className="w-4 h-4 inline-block bg-white rounded-full"></span>
						</div>
						<span className="basis-9/12 md:font-normal">
							monalisa redefined in style
						</span>
					</h2>
					<p className="flex items-center gap-5 h-min">
						<span className="text-[40px] tracking-tighter basis-10">01</span>
						<span className="text-xs basis-9/12">
							Start on : 08:00 GTS . Monday{' '}
						</span>
					</p>
					<div className="ml-14 md:flex justify-between items-start h-min">
						<p className="text-[10px]">
							GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
							INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST
							AND LOWEST BIDS.
						</p>
						<div className="flex justify-end items-center gap-6 mt-6 md:mt-0 flex-[0_0_35%]">
							<Link href={'#'} className="underline text-xs">
								See more
							</Link>
							<button className="border border-white text-xs py-2 px-1 rounded-md">
								Set a reminder
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="md:flex justify-between items-center py-3 hidden">
				<div className="h-2 w-52 rounded-3xl bg-[#AEAEAE] overflow-hidden">
					<div className={`bg-white h-full ${'w-[10%]'}`}></div>
				</div>
				<div className="flex items-center gap-3">
					<div className="h-[50px] w-[50px] bg-[rgba(255,255,255,0.2)] shadow-[7px_7px_11px_rgba(0,0,0,0.15)] backdrop-blur-[7.77px] rounded-full flex justify-center items-center cursor-pointer text-[10px]">
						{'<'}
					</div>
					<div className="h-[50px] w-[50px] bg-[rgba(255,255,255,0.2)] shadow-[7px_7px_11px_rgba(0,0,0,0.15)] backdrop-blur-[7.77px] rounded-full flex justify-center items-center cursor-pointer text-[10px]">
						{'>'}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Auction;
