'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faCartShopping,
	faMagnifyingGlass,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import NavSlider from './NavSlider';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import LinkComponent from './LinkComponent';
import { productI, toastI } from '../../../resources/interfaces';
import ProductSearch from './ProductSearch';
import useToast from '../../../hooks/toast';
import { useSession, signIn, signOut } from 'next-auth/react';
import profile from '../../../resources/images/profile.webp';
import Image, { StaticImageData } from 'next/image';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setModal } from '../../../store/slice/user';

const NavBar = ({ products }: { products: productI[] }) => {
	const [toggle, setToggle] = useState<boolean>(false);
	const [search, setSearch] = useState<string>('');
	const [profileModal, setProfileModal] = useState<boolean>(false);
	const [profileImage, setProfileImage] = useState<string | StaticImageData>(
		profile
	);
	const { data: session, status } = useSession();

	const dispatch = useAppDispatch();
	const { modal } = useAppSelector((state) => state.user);

	const handleToggle = () => {
		setToggle((prev) => !prev);
	};

	const { toastContainer, notify }: toastI = useToast(
		`${
			status === 'authenticated'
				? 'Welcome ' + session?.user?.name
				: 'User signOut'
		}`
	);

	const btn = (text: string) => {
		const handleClick = () => {
			status === 'authenticated' ? signOut() : signIn();
		};

		return (
			<button className="btn md:w-full" onClick={handleClick}>
				{text}
			</button>
		);
	};

	useEffect(() => {
		session && setProfileImage(session?.user?.image as string);
		status !== 'loading' && notify();
	}, [status]);

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
					<div className="relative" onClick={() => dispatch(setModal(!modal))}>
						<FontAwesomeIcon icon={faUser} className="hidden md:block" />
						<div
							className={`absolute shadow-3xl bg-white text-center right-0 py-2 px-5 mt-2 rounded-xl ${
								modal ? 'flex flex-col gap-2' : 'hidden'
							}`}
						>
							<Image
								src={profileImage}
								alt="profile"
								width={100}
								height={100}
								className="w-16 mx-auto"
							/>
							<p>{session?.user?.name}</p>
							{status === 'authenticated' ? btn('SignOut') : btn('SignIn')}
						</div>
					</div>
				</div>
			</div>
			<NavSlider toggle={toggle} handleToggle={handleToggle} />
			{toastContainer}
		</div>
	);
};

export default NavBar;
