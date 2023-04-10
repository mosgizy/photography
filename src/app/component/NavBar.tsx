'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faCartShopping,
	faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import NavSlider from './NavSlider';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
	const [toggle, setToggle] = useState<boolean>(false);
	const path = usePathname();

	const handleToggle = () => {
		setToggle((prev) => !prev);
	};

	return (
		<div className="md:flex md:justify-center">
			<div className="flex justify-between items-center bg-white py-7 px-4 fixed md:relative md:bg-transparent top-0 z-40 w-full md:max-w-5xl md:m-auto">
				<div className="h-5 cursor-pointer text-primary md:hidden">
					<FontAwesomeIcon icon={faBars} onClick={handleToggle} />
				</div>
				<h1 className="text-2xl uppercase font-bold text-secondary">artsy.</h1>
				<ul className="gap-6 items-center hidden md:flex text-secondary">
					<li
						className={`navLink ${
							path === '/' && 'underline underline-offset-4 text-black'
						}`}
					>
						<Link href="/">Home</Link>
					</li>
					<li
						className={`navLink ${
							path === '/marketplace' &&
							'underline underline-offset-4 text-black'
						}`}
					>
						<Link href="marketplace">Marketplace</Link>
					</li>
					<li
						className={`navLink ${
							path === '/auction' && 'underline underline-offset-4 text-black'
						}`}
					>
						<Link href="auction">Auction</Link>
					</li>
					<li
						className={`navLink ${
							path === '/drops' && 'underline underline-offset-4 text-black'
						}`}
					>
						<Link href="drops">Drop</Link>
					</li>
				</ul>
				<div className="flex gap-3 items-center">
					<FontAwesomeIcon
						className="h-5 cursor-pointer text-primary"
						icon={faMagnifyingGlass}
					/>
					<Link href="cart" className="relative h-5">
						<span className="absolute right-0 -top-1 rounded-full w-1 h-1 bg-notification"></span>
						<FontAwesomeIcon
							className="h-5 cursor-pointer text-primary"
							icon={faCartShopping}
						/>
					</Link>
				</div>
			</div>
			<NavSlider toggle={toggle} handleToggle={handleToggle} />
		</div>
	);
};

export default NavBar;
