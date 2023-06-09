'use client';

import Bids from './../components/Bids';
import CarouselWrapper from './../components/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { bidsI, productBidI } from '../../../../resources/interfaces';
import { useState, useEffect } from 'react';

const AuctionPage = ({
	products,
	bids,
}: {
	products: productBidI[];
	bids: bidsI[];
}) => {
	return (
		<div>
			<div>
				<div>
					<p className="text-primary text-lg">
						Here’s an overview of products actively on auction, explore!
					</p>
					<div className="mt-8">
						<CarouselWrapper products={products} />
					</div>
				</div>
				<div className=" md:">
					<h3 className="my-6 md:font-bold md:text-2xl">
						Top bids from popular creators{' '}
					</h3>
				</div>
				<div className="flex flex-col gap-10 md:flex-row">
					{bids.map((bid) => {
						return <Bids key={bid.id} bid={bid} />;
					})}
				</div>
				<div className="flex gap-5 justify-center items-center mt-10 md:hidden">
					<span>Load more</span>
					<div className="flex justify-center items-center self-end text-3xl w-[53px] h-[53px] border rounded-full border-fadeText cursor-pointer text-fadeText mr-6">
						<FontAwesomeIcon icon={faArrowRight} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuctionPage;
