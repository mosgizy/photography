'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Carousel from 'nuka-carousel/lib/carousel';
import { productI } from '../../../../resources/interfaces';
import ProductCard from './ProductCard';

const Collections = ({ products }: { products: productI[] }) => {
	const defaultControlsConfig = {
		nextButtonText: '',
		prevButtonText: '',
		pagingDotsStyle: {
			display: 'none',
		},
	};

	return (
		<div className="border border-primary py-2 px-3">
			<Carousel
				wrapAround={true}
				slidesToShow={1}
				dragging={true}
				dragThreshold={0}
				swiping={true}
				enableKeyboardControls={true}
				defaultControlsConfig={defaultControlsConfig}
				renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
					<button
						onClick={previousSlide}
						disabled={previousDisabled}
						className="border border-white rounded-full w-14 h-14 flex items-center justify-center text-white cursor-pointer"
					>
						<FontAwesomeIcon icon={faChevronLeft} />
					</button>
				)}
				renderCenterRightControls={({ nextDisabled, nextSlide }) => (
					<button
						onClick={nextSlide}
						disabled={nextDisabled}
						className="border border-white rounded-full w-14 h-14 flex items-center justify-center text-white cursor-pointer "
					>
						<FontAwesomeIcon icon={faChevronRight} />
					</button>
				)}
			>
				{products.map((product: productI) => {
					return (
						<div key={product.id}>
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
			</Carousel>
		</div>
	);
};

export default Collections;

const eth = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
		<path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
	</svg>
);
