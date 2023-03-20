'use client';

import Link from 'next/link';

const Auction = () => {
	return (
		<div className="bg-auction-linear bg-contain my-24 w-full text-white py-8 px-8">
			<div className="flex flex-col gap-3 bg-auction-image py-8 px-2">
				<h2 className="uppercase flex items-center gap-5">
					<div className="basis-10">
						<span className="w-4 h-4 inline-block bg-white rounded-full"></span>
					</div>
					<span className="basis-9/12">monalisa redefined in style</span>
				</h2>
				<p className="flex items-center gap-5">
					<span className="text-[40px] tracking-tighter basis-10">01</span>
					<span className="text-xs basis-9/12">
						Start on : 08:00 GTS . Monday{' '}
					</span>
				</p>
				<div className="ml-14">
					<p className="text-[10px]">
						GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS
						AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST
						BIDS.
					</p>
					<div className="flex justify-end items-center gap-6 mt-6">
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
	);
};

export default Auction;
