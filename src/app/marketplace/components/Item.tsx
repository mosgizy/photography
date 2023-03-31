'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { productI } from '../../../../resources/interfaces';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { addToCart, itemQuantityChange } from '../../../../store/slice/cart';
import { useEffect, useState } from 'react';

const Item = ({ product }: { product: productI }) => {
	const { id, name, creator, origin, views, price, url } = product;
	const dispatch = useAppDispatch();
	const { items } = useAppSelector((store) => store.cart);
	const [quantity, setQuantity] = useState(1);

	const [tempItem] = items.filter((item) => item.id === id);

	const handleAddToCart = () => {
		const cost: number = price.usd;
		if (!tempItem)
			dispatch(addToCart({ id, name, creator, url, cost, quantity }));
	};

	const handleIncreement = () => {
		setQuantity((prev) => (prev === 10 ? 10 : prev + 1));
		tempItem &&
			dispatch(itemQuantityChange({ id: id, quantity: quantity + 1 }));
	};

	const handleDecreement = () => {
		setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
		tempItem &&
			dispatch(itemQuantityChange({ id: id, quantity: quantity - 1 }));
	};

	return (
		<>
			<div>
				<Image src={url} alt={name} width="500" height="400" />
			</div>
			<div className="flex justify-between text-primary text-base uppercase mt-5 mb-6">
				<span>{name}</span>
				<span>${price.usd}</span>
			</div>
			<div className="text-fadeText flex flex-col gap-4">
				<p className="text-black">
					Creator : <span className="text-nameColor capitalize">{creator}</span>
				</p>
				<p className="capitalize">{origin}</p>
				<p>Total views : {views}</p>
				<div className="flex gap-4 items-center">
					<FontAwesomeIcon
						icon={faMinus}
						className="cursor-pointer"
						onClick={handleDecreement}
					/>
					<span className="text-4xl">{quantity}</span>
					<FontAwesomeIcon
						icon={faPlus}
						className="cursor-pointer"
						onClick={handleIncreement}
					/>
				</div>
				<div className="flex gap-4 items-center">
					<button
						onClick={handleAddToCart}
						className="py-4 px-12 bg-buttonColor rounded text-white text-lg"
					>
						Add to cart
					</button>
					<div className="border border-darkText rounded py-3 px-5 cursor-pointer">
						<FontAwesomeIcon icon={faHeart} className="w-[25px] h-[27px]" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Item;
