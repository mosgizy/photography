import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faPlus } from '@fortawesome/free-solid-svg-icons';
import meta from '../../../../../resources/icon/MetaMask - jpeg.png';
import coinbase from '../../../../../resources/icon/Coinbase - png.png';
import wallectConnector from '../../../../../resources/icon/WalletConnect - jpeg.png';
import phantom from '../../../../../resources/icon/Phantom - jpeg.png';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
	const wallets = {
		meta: meta,
		coinbase: coinbase,
		wallet: wallectConnector,
		phantom: phantom,
	};

	return (
		<section className="section">
			<header>
				<p className="text-fadeText">
					Home/ Marketplace/ Cart/ Shipping{' '}
					<span className="text-black">Payment</span>
				</p>
			</header>
			<div className="mt-6">
				<div className="flex gap-2 items-center text-[#747474] text-base">
					<FontAwesomeIcon icon={faLock} />
					<span>Secure server</span>
				</div>
				<div className="mt-6 px-4">
					<label
						htmlFor="select wallet"
						className="cursor-pointer flex gap-2 items-center"
					>
						<input
							type="radio"
							name="select wallet"
							checked
							className="bg-[#28a814] cursor-pointer"
						/>
						<span>Select your wallet</span>
					</label>
				</div>
				<p className="mt-6 text-base text-fadeText">
					Connect with one of our available wallet providers or add and connect
					a new wallet.{' '}
				</p>
				<div className="flex justify-center gap-4 items-center mt-6">
					{Object.values(wallets).map((wallet, index) => {
						return (
							<div
								key={index}
								className="w-[42px] h-[42px] relative shadow-4xl rounded-full"
							>
								<Image src={wallet} fill alt={'wallet' + index} />
							</div>
						);
					})}
					<div className="w-[42px] h-[42px] relative shadow-4xl rounded-full flex justify-center items-center text-primary cursor-pointer border-[0.5px] border-primary">
						<FontAwesomeIcon icon={faPlus} className="w-5 h-5" />
					</div>
				</div>
				<div className="mt-6 flex flex-col gap-6">
					<div className="input-container">
						<label htmlFor="wallet type">Wallet type</label>
						<input type="text" name="wallet type" className="input" />
					</div>
					<div className="input-container">
						<label htmlFor="key">Key</label>
						<input
							type="text"
							name="key"
							placeholder="please enter your key"
							className="input"
						/>
					</div>
					<div className="input-container">
						<label htmlFor="expiry date">Expirey date</label>
						<input type="text" name="expiry date" className="input" />
					</div>
					<div className="input-container">
						<label htmlFor="safe code">Safe code</label>
						<input type="text" name="safe code" className="input" />
					</div>
					<div className="flex items-start gap-2 text-base text-[#747474]">
						<input type="checkbox" name="confirm" />
						<span>
							Save my wallet details & information for future transactions
						</span>
					</div>
				</div>
				<div className="btn-container">
					<button className="btn w-9/12">
						<Link href="cart/shipping/payment/thankYou">Confirm</Link>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Page;
