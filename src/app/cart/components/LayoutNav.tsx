'use client';

import { usePathname } from 'next/navigation';
import { useAppSelector } from '../../../../store/hooks';
import { useRouter } from 'next/navigation';

const LayoutNav = () => {
	const path = usePathname().slice(1);
	const { details } = useAppSelector((state) => state.cart.navBtn);
	const { push } = useRouter();

	const handleClick = (btn: string) => {
		if (btn === 'cart') {
			push('/cart');
		} else if (details === true) {
			push('/cart/shipping');
		}
	};

	return (
		<div className="hidden md:block mt-9 w-max mx-auto">
			<ul className="flex items-center justify-center gap-10 text-[#888888]">
				<li
					onClick={() => handleClick('cart')}
					className={`hover:underline hover:underline-offset-[12px] cursor-pointer ${
						path === 'cart' && 'underline underline-offset-[12px] text-black'
					}`}
				>
					Shopping cart
				</li>
				<li
					onClick={() => handleClick('shipping')}
					className={`hover:underline hover:underline-offset-[12px] cursor-pointer ${
						path === 'cart/shipping' &&
						'underline underline-offset-[12px] text-black'
					}`}
				>
					Shopping details
				</li>
				<li
					className={`hover:underline hover:underline-offset-[12px] cursor-pointer ${
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
