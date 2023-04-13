'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faBell,
	faCartShopping,
	faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import NavSlider from './NavSlider';
import { useState } from 'react';
import Link from 'next/link';
import LinkComponent from './LinkComponent';
import { productI } from '../../../resources/interfaces';
import ProductSearch from './ProductSearch';

const NavBar = ({ products }: { products: productI[] }) => {
	const [toggle, setToggle] = useState<boolean>(false);
	const [search, setSearch] = useState<string>('');

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
				<LinkComponent />
				<div className="flex gap-3 items-center">
					<div className="group flex flex-row-reverse items-center relative">
						<label
							htmlFor="search"
							className="flex items-center absolute top-2/4 -translate-y-2/4 right-1"
						>
							<FontAwesomeIcon
								className="h-5 cursor-pointer text-primary"
								icon={faMagnifyingGlass}
							/>
						</label>
						<input
							type="text"
							value={search}
							onChange={(e) => setSearch(() => e.target.value)}
							className="group-hover:outline group-hover:outline-1 border-none rounded-lg transition-all group-hover:shadow-3xl group-focus-within:shadow-3xl px-3 py-1 bg-transparent w-0 group-hover:w-40 group-focus-within:w-40"
						/>
						<ProductSearch products={products} search={search} />
					</div>
					<Link href="cart" className="relative h-5">
						<span className="absolute right-0 -top-1 rounded-full w-1 h-1 bg-notification"></span>
						<FontAwesomeIcon
							className="h-5 cursor-pointer text-primary"
							icon={faCartShopping}
						/>
					</Link>
					<FontAwesomeIcon icon={faBell} className="hidden md:block" />
				</div>
			</div>
			<NavSlider toggle={toggle} handleToggle={handleToggle} />
		</div>
	);
};

export default NavBar;
