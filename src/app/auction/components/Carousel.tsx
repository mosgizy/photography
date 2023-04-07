'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { productBidI } from '../../../../resources/interfaces';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Link from 'next/link';

const CarouselWrapper = ({
	products,
	setId,
}: {
	products: productBidI[];
	setId: (id: string) => void;
}) => {
	const responsive = {
		0: {
			items: 1.7,
		},
		768: {
			items: 2.5,
			itemsFit: 'contain',
		},
		1024: {
			items: 3.5,
			itemsFit: 'contain',
		},
	};

	// console.log(products);

	return (
		<AliceCarousel
			mouseTracking
			animationType="slide"
			// disableDotsControls={true}
			keyboardNavigation={true}
			responsive={responsive}
			renderPrevButton={() => (
				<button className="bg-[255,255,255,0.2]shadow-5xl backdrop-blur-[4.6px] rounded-full w-10 h-10 flex items-center justify-center text-white cursor-pointer absolute top-[35%] -translate-y-2/4">
					<FontAwesomeIcon className="w-[5px] h-[8px]" icon={faChevronLeft} />
				</button>
			)}
			renderNextButton={() => (
				<button className="bg-[255,255,255,0.2] shadow-5xl backdrop-blur-[4.6px] rounded-full w-10 h-10 flex items-center justify-center text-white cursor-pointer absolute top-[35%] -translate-y-2/4 right-2">
					<FontAwesomeIcon className="w-[5px] h-[8px]" icon={faChevronRight} />
				</button>
			)}
		>
			{products.map((product) => {
				return (
					<div
						key={product.id}
						className="h-[186px] rounded-lg shadow-4xl overflow-hidden relative cursor-pointer mr-5"
						// onClick={() => handleItemClick(product.id)}
					>
						<Link href={`auction/${product.name}`}>
							<Image
								src={product.url}
								width={500}
								height={500}
								alt="action"
								className="h-full object-cover aspect-[2/3]"
							/>
							<div className="absolute bottom-4 w-full px-2">
								<div className="border-[0.5px] border-white rounded-lg bg-[rgba(245,244,244,0.24)] text-white text-center text-lg py-2 backdrop-blur-[1.5px]">
									6hr : 40mins: 15s
								</div>
							</div>
						</Link>
					</div>
				);
			})}
		</AliceCarousel>
	);
};

export default CarouselWrapper;
