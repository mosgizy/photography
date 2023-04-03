'use client';

import CartCard from './components/CartCard';
import NavBtn from './components/NavBtn';
import Link from 'next/link';
import { useAppSelector } from '../../../store/hooks';

const Page = () => {
	const { items } = useAppSelector((store) => store.cart);

	const totalCost = items.reduce(
		(total, cost) => total + cost.cost * cost.quantity,
		0
	);

	return (
		<section className="section">
			<header>
				<p className="text-fadeText">
					Home/ Marketplace/ <span className="text-black">Cart</span>
				</p>
			</header>
			<NavBtn />
			<div className="mt-10 flex flex-col gap-10">
				{items.map((item) => {
					return <CartCard key={item.id} items={item} />;
				})}
			</div>
			<div className="flex flex-col gap-5 mt-8">
				<p className="flex justify-between">
					<span className="text-[#888888]">Products in cart : </span>{' '}
					<span>{items.length} items</span>
				</p>
				<p className="flex justify-between">
					<span className="text-[#888888]">Shipping : </span>
					<span>$2.50</span>
				</p>
				<p className="flex justify-between border-b border-dashed pb-3">
					<span className="text-[#888888]">Total : </span>
					<span>${totalCost}</span>
				</p>
				<p className="flex justify-between">
					<span className="text-[#888888]">Grand total : </span>
					<span>${totalCost + 2.5}</span>
				</p>
			</div>
			<div className="btn-container">
				<button className="btn">
					<Link href="cart/shipping">Proceed to checkout</Link>
				</button>
				<Link href="marketplace" className="link">
					Continue shopping
				</Link>
			</div>
		</section>
	);
};

export default Page;
