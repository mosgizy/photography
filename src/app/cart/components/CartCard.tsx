'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { cartItemI } from '../../../../resources/interfaces';
import { useAppDispatch } from '../../../../store/hooks';
import { removeItemFromCart } from '../../../../store/slice/cart';
import { useState } from 'react';
import { itemQuantityChange } from '../../../../store/slice/cart';

const CartCard = ({ items }: { items: cartItemI }) => {
	const { id, url, cost, name, creator, quantity } = items;
	const [itemQuantity, setItemQuantity] = useState(quantity);

	const dispatch = useAppDispatch();

	const handleremoveItem = () => {
		dispatch(removeItemFromCart(id));
	};

	const handleIncreement = () => {
		setItemQuantity((prev) => (prev === 10 ? 10 : prev + 1));
		dispatch(itemQuantityChange({ id: id, quantity: itemQuantity + 1 }));
	};

	const handleDecreement = () => {
		setItemQuantity((prev) => (prev === 0 ? 0 : prev - 1));
		dispatch(itemQuantityChange({ id: id, quantity: itemQuantity - 1 }));
	};

	return (
		<div className="flex justify-between">
			<div className="flex gap-3">
				<div className="relative w-[125px] h-[126px]">
					<Image src={url} fill alt="art" />
				</div>
				<div className="flex flex-col justify-between">
					<p className="text-fadeText italic capitalize">{creator}</p>
					<h3 className="text-xl font-bold capitalize">{name} </h3>
					<div className="border-[0.5px] border-black rounded-xl overflow-hidden flex justify-between text-xl">
						<button
							onClick={handleDecreement}
							className="border-r-[0.5px] px-3"
						>
							-
						</button>
						<p className="border-r-[0.5px] px-3">{itemQuantity}</p>
						<button onClick={handleIncreement} className="px-3">
							+
						</button>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-between items-end">
				<div
					onClick={handleremoveItem}
					className="w-10 h-10 border-[0.5px] border-[#888888] rounded-full flex justify-center items-center cursor-pointer"
				>
					<FontAwesomeIcon
						icon={faXmark}
						className="w-3 h-3 1text-[#888888] font-thin"
					/>
				</div>
				<p className="text-secondary text-2xl">${cost}</p>
			</div>
		</div>
	);
};

export default CartCard;
