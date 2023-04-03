'use client';

import Image from 'next/image';
import Carousel from 'nuka-carousel/lib/carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { carouselI } from '../../../../resources/interfaces';

const CarouselWrapper = ({
	products,
	setId,
	setShowLiveStream,
}: {
	products: carouselI[];
	setId: (id: string) => void;
	setShowLiveStream: any;
}) => {
	const defaultControlsConfig = {
		nextButtonText: '',
		prevButtonText: '',
		pagingDotsStyle: {
			fill: '#B8BCB5',
			top: 'unset',
			bottom: '-2rem',
			// position: 'relative',
			display: 'flex',
			gap: '.5rem',
		},
	};

	const handleItemClick = (id: string) => {
		setShowLiveStream();
		setId(id);
	};

	return (
		<Carousel
			wrapAround={true}
			slidesToShow={1.4}
			dragging={true}
			dragThreshold={0}
			swiping={true}
			enableKeyboardControls={true}
			defaultControlsConfig={defaultControlsConfig}
			renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
				<button
					onClick={previousSlide}
					disabled={previousDisabled}
					className="bg-[255,255,255,0.2]shadow-5xl backdrop-blur-[4.6px] rounded-full w-10 h-10 flex items-center justify-center text-white cursor-pointer"
				>
					<FontAwesomeIcon className="w-[5px] h-[8px]" icon={faChevronLeft} />
				</button>
			)}
			renderCenterRightControls={({ nextDisabled, nextSlide }) => (
				<button
					onClick={nextSlide}
					disabled={nextDisabled}
					className="bg-[255,255,255,0.2] shadow-5xl backdrop-blur-[4.6px] rounded-full w-10 h-10 flex items-center justify-center text-white cursor-pointer"
				>
					<FontAwesomeIcon className="w-[5px] h-[8px]" icon={faChevronRight} />
				</button>
			)}
		>
			{products.map((product) => {
				return (
					<div
						key={product.id}
						className="w-[228px] h-[186px] rounded-lg shadow-4xl overflow-hidden relative cursor-pointer"
						onClick={() => handleItemClick(product.id)}
					>
						<Image
							src={product.url}
							width={500}
							height={500}
							alt="action"
							className="h-full object-cover"
						/>
						<div className="absolute bottom-4 w-full px-2">
							<div className="border-[0.5px] border-white rounded-lg bg-[rgba(245,244,244,0.24)] text-white text-center text-lg py-2 backdrop-blur-[1.5px]">
								6hr : 40mins: 15s
							</div>
						</div>
					</div>
				);
			})}
		</Carousel>
	);
};

export default CarouselWrapper;
