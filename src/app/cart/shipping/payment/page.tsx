'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faPlus } from '@fortawesome/free-solid-svg-icons';
import meta from '../../../../../resources/icon/MetaMask - jpeg.png';
import coinbase from '../../../../../resources/icon/Coinbase - png.png';
import wallectConnector from '../../../../../resources/icon/WalletConnect - jpeg.png';
import phantom from '../../../../../resources/icon/Phantom - jpeg.png';
import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '../../../../../store/hooks';

const Page = () => {
	const wallets = {
		meta: meta,
		coinbase: coinbase,
		wallet: wallectConnector,
		phantom: phantom,
	};

	const { items } = useAppSelector((store) => store.cart);
	const totalCost = items.reduce(
		(total, cost) => total + cost.cost * cost.quantity,
		0
	);

	return (
		<section className="section">
			<header className="md:hidden">
				<p className="text-fadeText">
					Home/ Marketplace/ Cart/ Shipping{' '}
					<span className="text-black">Payment</span>
				</p>
			</header>
			<div className="mt-6">
				<div className="md:flex md:justify-between md:mb-8">
					<p className="hidden md:block">Payment method</p>
					<div className="flex gap-2 items-center text-[#747474] text-base">
						<FontAwesomeIcon icon={faLock} />
						<span>Secure server</span>
					</div>
				</div>
				<div className="md:flex">
					<div>
						<div className="md:border md:border-white md:py-6 md:px-4 md:rounded-lg md:shadow-[0px_0px_5px_rgba(0,0,0,0.25)]">
							<div>
								<div className="md:flex md:justify-between md:items-center">
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
									<p className="mt-6 text-base text-fadeText md:hidden">
										Connect with one of our available wallet providers or add
										and connect a new wallet.{' '}
									</p>
									<div className="flex justify-center gap-4 items-center mt-6 md:mt-0">
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
								</div>
								<p className="mt-6 text-base text-fadeText hidden md:block md:text-center">
									Connect with one of our available wallet providers or add and
									connect a new wallet.{' '}
								</p>
							</div>
							<form className="mt-6 flex flex-col gap-6">
								<div className="input-container">
									<label htmlFor="wallet type">Wallet type</label>
									<input type="text" name="wallet type" className="input" />
								</div>
								<div className="input-container">
									<label htmlFor="key">Key</label>
									<div className="relative">
										<input
											type="text"
											name="key"
											placeholder="please enter your key"
											className="input"
										/>
										<span className="absolute h-7 w-7 right-4 top-2/4 -translate-y-2/4">
											<Image
												src={meta}
												fill
												alt="key"
												className="object-contain aspect-[2/3]"
											/>
										</span>
									</div>
								</div>
								<div className="flex flex-col gap-6 md:flex-row md:gap-3">
									<div className="input-container md:flex-1">
										<label htmlFor="expiry date">Expirey date</label>
										<input
											type="text"
											name="expiry date"
											className="input"
											placeholder="MM/YY"
										/>
									</div>
									<div className="input-container md:flex-1">
										<label htmlFor="safe code">CVV</label>
										<input
											type="text"
											name="safe code"
											className="input"
											placeholder="***"
										/>
									</div>
								</div>
								<div className="flex items-center gap-2 text-base text-[#747474]">
									<input type="checkbox" name="confirm" />
									<span>
										Save my wallet details & information for future transactions
									</span>
								</div>
							</form>
						</div>
						<div className="btn-container">
							<Link className="btn w-9/12  md:w-full" href="/thankYou">
								Confirm
							</Link>
						</div>
					</div>
					<div className="hidden text-secondary md:flex md:flex-col md:gap-6 md:px-6">
						<p className="text-2xl border-b border-[#747474] pb-6">
							Payment Summary
						</p>
						<div className="border-b border-[#747474] pb-6">
							<p className="text-xl">Metamask wallet : 002345KJi90pzzz3</p>
							<p className="text-lg text-fadeText mt-4">
								Actively linked to Yaba, Lagos Nigeria.
							</p>
						</div>
						<p className="border-b border-[#747474] pb-6">
							Expected arrival date: Between 22nd September and 26th September
							20222
						</p>
						<div className="flex flex-col gap-6">
							<div className="flex justify-between items-center">
								<p className="text-[#88888]">Products in cart:</p>
								<span>{items.length}</span>
							</div>
							<div className="flex justify-between items-center">
								<p className="text-[#88888]">Shipping:</p>
								<span>$2.50</span>
							</div>
							<div className="flex justify-between items-center">
								<p className="text-[#88888]">Total:</p>
								<span> ${totalCost + 2.5}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Page;
