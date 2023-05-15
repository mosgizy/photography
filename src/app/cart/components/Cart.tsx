'use client';

import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { handleBtnClicks } from '../../../../store/slice/cart';
import CartCard from './CartCard';
import useLocal from '../../../../hooks/localStorage';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Cart = ({ btn }: { btn: boolean }) => {
	const { items } = useAppSelector((store) => store.cart);
	const totalCost = items.reduce(
		(total, cost) => total + cost.cost * cost.quantity,
		0
	);
	const dispatch = useAppDispatch();

	const { push } = useRouter();

	const handleSubmit = () => {
		if (items.length > 0) {
			push('cart/shipping');
			dispatch(handleBtnClicks({ details: true }));
		}
	};

	useLocal(items);

	return (
		<div>
			<div className="mt-10 flex flex-col gap-10 md:border-t md:border-[#747474] md:pt-10">
				{items.map((item) => {
					return <CartCard key={item.id} items={item} />;
				})}
			</div>
			<div className="mt-8 md:flex md:flex-row-reverse md:w-full md:justify-between">
				<div
					className={`flex flex-col gap-5 w-full ${btn && 'flex-[0_0_50%]'}`}
				>
					<p className="flex justify-between">
						<span className="text-[#888888]">Products in cart : </span>{' '}
						<span>{items.length} items</span>
					</p>
					<p className="flex justify-between">
						<span className="text-[#888888]">Shipping : </span>
						<span>$2.50</span>
					</p>
					<p className="flex justify-between border-b border-dashed pb-3 md:border-none md:pb-0">
						<span className="text-[#888888]">Total : </span>
						<span>${totalCost.toFixed(2)}</span>
					</p>
					<p className="flex justify-between">
						<span className="text-[#888888]">Grand total : </span>
						<span>${(totalCost + 2.5).toFixed(2)}</span>
					</p>
				</div>
				{btn && (
					<div className="btn-container md:mt-0 md:justify-start">
						<button type="button" onClick={handleSubmit} className="btn">
							Proceed to checkout
						</button>
						<Link href="marketplace" className="link">
							Continue shopping
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
