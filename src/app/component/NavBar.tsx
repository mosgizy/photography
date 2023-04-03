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

const NavBar = () => {
	const [toggle, setToggle] = useState<boolean>(false);

	const handleToggle = () => {
		setToggle((prev) => !prev);
	};

	return (
		<div className="">
			<div className="flex justify-between items-center bg-white py-7 px-4 fixed top-0 z-40 w-full">
				<FontAwesomeIcon
					className="h-5 cursor-pointer text-primary"
					icon={faBars}
					onClick={handleToggle}
				/>
				<h1 className="text-2xl uppercase font-bold text-secondary">artsy.</h1>
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
