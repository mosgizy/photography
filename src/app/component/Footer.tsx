import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="mt-16 px-5 text-primary md:max-w-7x">
			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-6 w-full md:border md:border-primary md:flex md:flex-col md:gap-6 md:justify-center md:items-center md:mx-auto md:px-9 md:py-8">
					<h2 className="text-2xl uppercase font-normal">newsletter</h2>
					<p className="text-xs md:text-2xl md:font-normal">
						SUBSCRIBE TO OUR DAILY UPDATES AND NEWSLETTERS
					</p>
					<div className="flex flex-col gap-6 md:flex-row gap-5">
						<input
							className="border border-primary py-4 px-4 text-xs md:py-2 md:px-6 md:text-base"
							type="text"
							placeholder=" Enter your email here"
						/>
						<button className="bg-primary px-7 py-5 md:py-3 text-white text-xs w-44 uppercase">
							subscribe
						</button>
					</div>
				</div>
				<div className="flex flex-col gap-4 md:flex-row md:justify-between md:px-10 md:text-2xl md:text-primary md:font-normal md:mt-8">
					<h4 className="uppercase font-light md:hidden">reach us</h4>
					<div className="hidden md:flex items-center">
						<h1 className="text text-4xl font-semibold">ARTSY.</h1>
					</div>
					<ul className="hidden md:flex flex-col gap-4 md:gap-6">
						<li className="navLink">
							<Link href="/">Home</Link>
						</li>
						<li className="navLink">
							<Link href="marketplace">Marketplace</Link>
						</li>
						<li className="navLink">
							<Link href="auction">Auction</Link>
						</li>
						<li className="navLink">
							<Link href="drops">Drop</Link>
						</li>
					</ul>
					<ul className="hidden md:flex flex-col gap-4 md:gap-6">
						<li>Blog</li>
						<li>Wallets</li>
						<li>Rates</li>
						<li>High bids</li>
					</ul>
					<div className="flex flex-col gap-4 md:gap-6">
						<div className="flex gap-4 items-center">
							<FontAwesomeIcon
								icon={faEnvelope}
								className="basis-7 md:w-[41px] md:h-[34px]"
							/>
							<span className="text-xs md:text-2xl">
								artsystudios@gmail.com
							</span>
						</div>
						<div className="flex gap-4 items-center">
							<FontAwesomeIcon
								icon={faLocationDot}
								className="basis-7 md:w-[41px] md:h-[34px]"
							/>
							<span className="text-xs md:text-2xl">Lagos, Nigeria.</span>
						</div>
					</div>
				</div>
				<div className="md:flex justify-center hidden font-medium text-primary text-2xl mt-10 opacity-50">
					<p>Asterisk © 2022. All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
