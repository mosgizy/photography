import Image from 'next/image';
import { productBidI } from '../../../../resources/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import {
	faHeart,
	faXmark,
	faPaperPlane,
	faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import creator from '../../../../resources/images/creator3.png';
import { AUCTION_URL } from '../../../../resources/constant';
import getData from '../../../../utils/api';
import Link from 'next/link';

const Page = async ({ params }: { params: { livestream: string } }) => {
	const { products }: { products: productBidI[] } = await getData(AUCTION_URL);
	const { livestream } = params;
	const path = livestream.replaceAll('%20', ' ');
	const [liveBid] = products.filter((product) => product.name === path);
	const { name, url, current } = liveBid;
	console.log(path);

	const bidder = (
		<div className="flex gap-1 text-xs mb-4">
			<div className="w-8 h-8">
				<Image src={creator} alt="bidder" width={300} height={400} />{' '}
			</div>
			<div className="flex flex-col gap-1">
				<span className="md:text-primary">boma jango</span>
				<span className="md:text-black">God abeg</span>
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
		<div className="absolute min-h-screen inset-0 z-50 text-white md:bg-white">
			<div className="md:max-w-7xl md:mx-auto md:px-16 md:pb-8">
				<div className="hidden md:block text-fadeText my-10 mx-4">
					<p>
						Home/ Auctions/ <span className="text-black">Live bid</span>{' '}
					</p>
				</div>
				<div className=" md:flex md:border md:border-primary md:gap-12 md:h-[70vh]">
					<div className="relative h-screen md:flex-[0_0_45%] md:h-[70vh]">
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
									<Link href="auction">
										<FontAwesomeIcon
											icon={faXmark}
											className="w-5 h-5 cursor-pointer"
										/>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute z-40 bottom-2 w-full h-2/4 md:relative md:bottom-8 md:h-[70vh] md:right-4 md:flex-[0_0_50%]">
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
												className="bg-transparent w-full border border-white md:border-primary rounded-2xl text-[11px] px-4 py-2 outline-none"
											/>
											<FontAwesomeIcon
												icon={faPaperPlane}
												className="absolute right-5 top-2/4 -translate-y-2/4"
											/>
										</div>
									</div>
									<div>
										{hearts}
										<div className="bg-transparentWhite flex items-center justify-center rounded-full h-7 w-7 cursor-pointer md:border md:border-primary">
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
				<div className="hidden md:flex text-black gap-4 items-center mt-8 px-4">
					<h2>See upcoming drops</h2>
					<span className="justify-center items-center self-end text-5xl w-[60px] h-[60px] border rounded-full border-primary cursor-pointer hidden md:flex">
						<FontAwesomeIcon icon={faArrowRight} />
					</span>
				</div>
			</div>
		</div>
	);
};

export default Page;
