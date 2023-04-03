'use client';

import Image from 'next/image';
import { productBidI } from '../../../../resources/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import {
	faHeart,
	faXmark,
	faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import creator from '../../../../resources/images/creator3.png';

const Livestream = ({
	auctionId,
	products,
	setShowLiveStream,
}: {
	auctionId: string;
	products: productBidI[];
	setShowLiveStream: any;
}) => {
	const liveBid = products.filter((product) => product.id === auctionId);
	const { name, url, current } = liveBid[0];

	const bidder = (
		<div className="flex gap-1 text-xs mb-4">
			<div className="w-8 h-8">
				<Image src={creator} alt="bidder" width={300} height={400} />{' '}
			</div>
			<div className="flex flex-col gap-1">
				<span>boma jango</span>
				<span>God abeg</span>
			</div>
		</div>
	);

	const hearts = (
		<div className="flex flex-col mb-4 gap-1">
			<FontAwesomeIcon
				icon={faHeart}
				className="text-[#F44336] translate-x-3 -rotate-45"
			/>
			<FontAwesomeIcon
				icon={faHeart}
				className="text-[#9747FF] -translate-x-3 rotate-45"
			/>
			<FontAwesomeIcon
				icon={faHeart}
				className="text-[#F44336] translate-x-2 rotate-90"
			/>
			<FontAwesomeIcon
				icon={faHeart}
				className="text-[#4693ED] -translate-x-2 rotate-45"
			/>
			<FontAwesomeIcon
				icon={faHeart}
				className="text-[#E31616] translate-x-1 -rotate-45"
			/>
			<FontAwesomeIcon
				icon={faHeart}
				className="text-[#4693ED] -translate-x-1 rotate-45"
			/>
		</div>
	);

	return (
		<div className="absolute min-h-screen inset-0 z-50 text-white overflow-hidden">
			<div className="h-full">
				<Image
					src={url}
					width={1600}
					height={1600}
					alt={name}
					className="object-cover h-full"
				/>
			</div>
			<div className="absolute z-40 inset-0 top-0 pt-5 pb-3 px-5 text-base">
				<div className="flex justify-between items-center">
					<div>Tag: {name}</div>
					<div className="flex items-center gap-3 text-xs">
						<div className="flex items-center gap-2">
							<div className="bg-nameColor px-2 py-1 rounded-md cursor-pointer">
								LIVE
							</div>
							<div className="flex items-center gap-2 px-2 py-1 rounded-md bg-transparentWhite cursor-pointer">
								<FontAwesomeIcon icon={faEye} />
								<span>295</span>
							</div>
						</div>
						<div>
							<FontAwesomeIcon
								icon={faXmark}
								className="w-5 h-5 cursor-pointer"
								onClick={setShowLiveStream}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute z-40 bottom-2 w-full h-2/4">
				<div className="">
					<h1 className="text-center">Current bid : ${current}</h1>
					<div className="absolute z-40 bottom-0 w-full flex justify-center">
						<div className="w-[85vw] flex justify-between items-end gap-8">
							<div className="flex-1">
								<div>
									{bidder}
									{bidder}
									{bidder}
									{bidder}
								</div>
								<div className="relative">
									<input
										type="text"
										placeholder="Join conversation"
										className="bg-transparent w-full border border-white rounded-2xl text-[11px] px-4 py-2 outline-none"
									/>
									<FontAwesomeIcon
										icon={faPaperPlane}
										className="absolute right-5 top-2/4 -translate-y-2/4"
									/>
								</div>
							</div>
							<div>
								{hearts}
								<div className="bg-transparentWhite flex items-center justify-center rounded-full h-7 w-7 cursor-pointer">
									<FontAwesomeIcon
										icon={faHeart}
										className="text-checkedHeart w-[18px] h-[18px]"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Livestream;
