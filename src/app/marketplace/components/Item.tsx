'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { productI } from '../../../../resources/interfaces';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { addToCart, itemQuantityChange } from '../../../../store/slice/cart';
import { useState, useEffect } from 'react';
import Info from './Info';
import useLocal from '../../../../hooks/localStorage';
import 'react-toastify/dist/ReactToastify.css';
import useToast from '../../../../hooks/toast';
import fetchData from '../../../../utils/fetchData';

const Item = ({ product, path }: { product: productI; path: string }) => {
	const { name, creator, origin, views, price, url, size } = product;
	const [id, setId] = useState<string>('');
	const [cost, setCost] = useState<number>(0);

	const dispatch = useAppDispatch();
	const { items } = useAppSelector((store) => store.cart);
	const [quantity, setQuantity] = useState(1);

	const { notify } = useToast(`${name} added to cart`);

	const [tempItem] = items.filter((item) => item.id === id);
	const sizeFt = size.ft;

	const handleAddToCart = () => {
		const size: number = sizeFt;
		if (!tempItem) {
			dispatch(addToCart({ id, name, creator, url, cost, quantity, size }));
			notify();
		}
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

	useLocal(items);

	useEffect(() => {
		try {
			fetchData('/api/getProducts').then((res) => {
				const [currentProductId] = res.filter((productItem: any) => {
					return productItem.nickname === path;
				});
				setId(currentProductId.id);
				setCost(currentProductId.unit_amount / 100);
			});
		} catch (error) {
			console.error(error);
		}
	}, [path]);

	return (
		<div className="md:flex">
			<div className="relative md:border-r md:border-primary md:pr-8 md:pl-4 md:py-6">
				<Image
					src={url}
					alt={name}
					width={800}
					height={800}
					className="w-full md:w-[357px] h-[384px] md:h-[626px]"
				/>
			</div>
			<div className="md:flex-[0_0_60%] md:flex md:flex-col md:justify-between">
				<div className="flex justify-between text-primary text-base uppercase mt-5 mb-6 md:mb-0 md:text-4xl md:font-bold md:border-b md:border-primary md:pb-6 md:px-5">
					<span>{name}</span>
					<span>${price.usd}</span>
				</div>
				<div className="text-fadeText flex flex-col gap-4 md:px-5">
					<p className="text-black">
						Creator :{' '}
						<span className="text-nameColor capitalize">{creator}</span>
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
				<div className="hidden md:block w-full">
					<Info link={'Description'} />
					<Info link={'Listings'} />
					<Info link={'Status'} />
				</div>
			</div>
		</div>
	);
};

export default Item;
