'use client';

import { usePathname } from 'next/navigation';

const LayoutNav = () => {
	const path = usePathname().slice(1);

	console.log(path);
	return (
		<div className="hidden md:block mt-9 w-max mx-auto">
			<ul className="flex items-center justify-center gap-10 text-[#888888]">
				<li
					className={`${
						path === 'cart' && 'underline underline-offset-[12px] text-black'
					}`}
				>
					Shopping cart
				</li>
				<li
					className={`${
						path === 'cart/shipping' &&
						'underline underline-offset-[12px] text-black'
					}`}
				>
					Shopping details
				</li>
				<li
					className={`${
						path === 'cart/shipping/payment' &&
						'underline underline-offset-[12px] text-black'
					}`}
				>
					Payment details
				</li>
			</ul>
			<hr className="h-5 text-[#888888] mt-[5px]" />
		</div>
	);
};

export default LayoutNav;
