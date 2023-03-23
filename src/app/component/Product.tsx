'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import creator1 from '../../../resources/images/creator1.png';
import creator2 from '../../../resources/images/creator2.png';
import creator3 from '../../../resources/images/creator3.png';
import creator4 from '../../../resources/images/creator4.png';
import creator5 from '../../../resources/images/creator5.png';
import Link from 'next/link';

const Product = ({ url, name }: { url: string; name: string }) => {
	const creators = [creator1, creator2, creator3, creator4, creator5];
	return (
		<div className="flex flex-col gap-4">
			<div className="relative">
				<Image
					className="w-full h-[255px]"
					src={url}
					alt="Product"
					width={500}
					height={500}
				/>
				<div className="flex justify-center items-center absolute inset-0 z-30 bg-[rgba(0,0,0,0.6)]">
					<div className="flex flex-col gap-10 max-w-max justify-center text-white">
						<h1 className="text-4xl">Boolean Egyptian</h1>
						<Link
							href={`/marketplace/${name}`}
							className="flex justify-center items-center self-end text-5xl w-[78px] h-[78px] border rounded-full border-white cursor-pointer"
						>
							<FontAwesomeIcon icon={faArrowRight} />
						</Link>
					</div>
				</div>
			</div>
			<p className="text-fadeText">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
				purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
				rhoncus dolor pur
			</p>
			<div className="flex gap-6 items-center border-b max-w-max pb-5">
				<div className="flex -space-x-4 rounded-none overflow-hidden">
					{creators.map((creator, index) => {
						return (
							<Image
								key={index}
								src={creator}
								alt="creator"
								width={42}
								height={42}
							/>
						);
					})}
				</div>
				<span className="font-medium">64 major creators</span>
			</div>
		</div>
	);
};

export default Product;
