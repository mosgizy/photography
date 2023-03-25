import creator from '../../../../resources/images/creator.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { bidsI } from '../../../../resources/interfaces';

const Bids = ({ bid }: { bid: bidsI }) => {
	const { url, name, creator } = bid;
	return (
		<div className="flex flex-col gap-6">
			<div className="bg-white shadow-4xl rounded-lg py-1 px-3">
				<div>
					<div className="flex justify-end my-1">
						<div className="border border-primary rounded-full flex justify-center items-center w-[28px] h-[28px] px-2 py-2 text-[#E8E0E0]">
							<FontAwesomeIcon icon={faHeart} />
						</div>
					</div>
					<Image
						src={url}
						width={500}
						height={500}
						alt="bids"
						className="w-[359px] h-[184px]"
					/>
				</div>
				<div className="flex justify-between items-center pt-2">
					<p>{name}</p>
					<p>{bid.bid.highest.eth} ETH</p>
				</div>
			</div>
			<div className="capitalize">
				creator : <span className="text-nameColor">{creator}</span>
			</div>
			<div>
				Date : <span>12/08/22</span>
			</div>
			<div className="flex justify-between items-center px-3 py-2 rounded-xl shadow-4xl bg-[rgba(255,255,255,0.1)]">
				<div className="flex flex-col gap-4">
					<p className="text-fadeText">Current bid</p>
					<p className="font-bold">{bid.bid.current.eth} ETH</p>
				</div>
				<button className="bg-buttonColor rounded text-white text-base py-2 px-10">
					Place bid
				</button>
			</div>
		</div>
	);
};

export default Bids;
