'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { cartItemI, toastI } from '../../../../resources/interfaces';
import { useAppDispatch } from '../../../../store/hooks';
import { removeItemFromCart } from '../../../../store/slice/cart';
import { useState } from 'react';
import { itemQuantityChange } from '../../../../store/slice/cart';
import useToast from '../../../../hooks/toast';

const CartCard = ({ items }: { items: cartItemI }) => {
	const { id, url, cost, name, creator, quantity, size } = items;
	const [itemQuantity, setItemQuantity] = useState(quantity);

	const dispatch = useAppDispatch();

	const { notify, toastContainer }: toastI = useToast(
		`${name} removed from cart`
	);

	const handleremoveItem = () => {
		dispatch(removeItemFromCart(id));
		notify();
	};

	const handleIncreement = () => {
		setItemQuantity((prev) => (prev === 10 ? 10 : prev + 1));
		dispatch(itemQuantityChange({ id: id, quantity: itemQuantity + 1 }));
	};

	const handleDecreement = () => {
		setItemQuantity((prev) => (prev === 0 ? 0 : prev - 1));
		dispatch(itemQuantityChange({ id: id, quantity: itemQuantity - 1 }));
		itemQuantity - 1 === 0 && handleremoveItem();
	};

	return (
		<div className="flex justify-between md:border-b md:border-[#747474] md:pb-10">
			<div className="flex gap-3">
				<div className="relative w-[125px] h-[126px]">
					<Image src={url} fill alt="art" />
					{toastContainer}
				</div>
				<div className="flex flex-col justify-between">
					<h3 className="text-xl font-bold capitalize">{name} </h3>
					<p className="text-fadeText italic capitalize">{creator}</p>
					<p>Size: {size}</p>
					<div className="border-[0.5px] border-black md:border-none rounded-xl overflow-hidden flex justify-between text-xl">
						<button
							onClick={handleDecreement}
							className="border-r-[0.5px] px-3 md:border-none"
						>
							-
						</button>
						<p className="border-r-[0.5px] px-3 md:border-none">
							{itemQuantity}
						</p>
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
