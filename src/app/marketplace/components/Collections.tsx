'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { productI } from '../../../../resources/interfaces';
import ProductCard from './ProductCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Collections = ({ products }: { products: productI[] }) => {
	const responsive = {
		0: {
			items: 1,
		},
		768: {
			items: 2.3,
			itemsFit: 'contain',
		},
		1024: {
			items: 2.5,
			itemsFit: 'contain',
		},
	};

	return (
		<div className="border border-primary py-2 px-3 md:px-0 md:pb-8 md:border-0 md:flex md:flex-col md:gap-16 relative">
			<div className="bg-white shadow-3xl px-3 py-5 hidden md:block">
				<p>Explore more from this collection</p>
				<div></div>
			</div>

			<AliceCarousel
				mouseTracking
				animationType="slide"
				disableDotsControls={true}
				keyboardNavigation={true}
				responsive={responsive}
				renderPrevButton={() => (
					<button className="prev carousel-nav">
						<FontAwesomeIcon icon={faChevronLeft} />
					</button>
				)}
				renderNextButton={() => (
					<button className="next carousel-nav">
						<FontAwesomeIcon icon={faChevronRight} />
					</button>
				)}
			>
				{products.map((product: productI) => {
					return (
						<div
							key={product.id}
							className="md:border md:border-primary md:py-2 md:px-3 md:mr-5"
						>
							<div className="flex justify-end text-3xl my-2">
								<FontAwesomeIcon icon={faHeart} />
							</div>
							<ProductCard
								name={product.name}
								url={product.url}
								price={product.price.eth}
								sign={true}
							/>
						</div>
					);
				})}
			</AliceCarousel>
			<div className="flex justify-center">
				<button className="rounded-xl text-primary border border-primary px-8 py-2">
					Explore all
				</button>
			</div>
		</div>
	);
};

export default Collections;

const eth = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
		<path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
	</svg>
);
