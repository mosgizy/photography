// import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faXmark, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const NavSlider = ({
	toggle,
	handleToggle,
}: {
	toggle: boolean;
	handleToggle: () => void;
}) => {
	return (
		<div
			className={`py-7 px-4 bg-white transition-all absolute top-0 z-50 min-h-screen w-full md:hidden ${
				toggle ? 'translate-x-0' : '-translate-x-full'
			}`}
		>
			<div className="flex items-center justify-between">
				<h1 className="text-2xl uppercase font-bold text-secondary">artsy.</h1>
				<FontAwesomeIcon
					className="cursor-pointer h-6"
					icon={faXmark}
					onClick={handleToggle}
				/>
			</div>
			<nav className="flex flex-col gap-8 text-primary mt-10 text-2xl">
				<Link href="/" onClick={handleToggle}>
					Home
				</Link>
				<Link href="auction" onClick={handleToggle}>
					Auction
				</Link>
				<Link href="marketplace" onClick={handleToggle}>
					Marketplace
				</Link>
				<Link href="drops" onClick={handleToggle}>
					Drops
				</Link>
			</nav>
			<div className="absolute bottom-12 right-6 bg-[#3341c1] rounded-full w-16 h-16 flex justify-center items-center">
				<FontAwesomeIcon icon={faMessage} className="h-6 text-white" />
			</div>
		</div>
	);
};

export default NavSlider;
