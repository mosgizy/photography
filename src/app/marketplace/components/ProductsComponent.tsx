'use client';

import { productI } from '../../../../resources/interfaces';
import { useState } from 'react';
import ProductCard from './ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProductsComponent = ({ products }: { products: productI[] }) => {
	const [slicedProducts, setSlicedProducts] = useState<productI[]>(
		products.slice(0, 5)
	);
	const [showModal, setShowModal] = useState(false);

	const handleShowMore = () => {
		slicedProducts.length === products.length
			? setSlicedProducts(products.slice(0, 5))
			: setSlicedProducts(products);
	};

	const handleSortProducts = (sortFormat: string) => {
		const tempProducts = products;
		sortFormat === 'price' &&
			tempProducts.sort((a, b) => a.price.usd - b.price.usd);

		sortFormat === 'name' &&
			tempProducts.sort((a, b) => {
				let fa = a.name.toLowerCase(),
					fb = b.name.toLowerCase();

				if (fa < fb) {
					return -1;
				}
				if (fa > fb) {
					return 1;
				}
				return 0;
			});

		setSlicedProducts(tempProducts);
	};

	return (
		<div>
			<div className="w-full flex-[1_1_80%]">
				<div className="px-2">
					<div className="flex justify-between items-center py-3 px-3 text-lg bg-white shadow-3xl mt-4 mb-5 md:mt-0 md:mb-20 rounded relative">
						<div className="flex gap-3 items-center md:hidden">
							<span>Filters</span>
							<FontAwesomeIcon icon={faChevronDown} />
						</div>
						<div className="hidden md:block">
							See 1-5 of {products.length} results
						</div>
						<div
							onClick={() => setShowModal((prev) => !prev)}
							className="flex gap-3 items-center md:border md:rounded-lg md:px-6 md:py-1 md:justify-center cursor-pointer"
						>
							<span>Sort by</span>
							<FontAwesomeIcon icon={faChevronDown} />
						</div>
						{showModal && (
							<div className="absolute right-0 top-16 z-40 rounded-lg w-32 capitalize bg-white shadow-3xl px-4 py-2 flex flex-col gap-2">
								<p
									onClick={() => {
										handleSortProducts('name');
										setShowModal((prev) => !prev);
									}}
									className="cursor-pointer"
								>
									name
								</p>
								<p
									onClick={() => {
										handleSortProducts('price');
										setShowModal((prev) => !prev);
									}}
									className="cursor-pointer"
								>
									price
								</p>
							</div>
						)}
					</div>
				</div>
				<div className="px-6 flex flex-col gap-5 md:grid md:grid-cols-2 grid-flow-row lg:grid-cols-3 md:gap-8">
					{slicedProducts.map((product) => {
						return (
							<ProductCard
								key={product.id}
								name={product.name}
								url={product.url}
								price={product.price.usd}
							/>
						);
					})}
				</div>
			</div>
			<div className="flex gap-5 justify-end items-center mt-10 md:justify-center md:mt-20">
				<div
					onClick={handleShowMore}
					className="flex gap-5 items-center md:hidden"
				>
					<span>
						{slicedProducts.length === products.length
							? 'See less'
							: 'See more'}
					</span>
					<div className="flex justify-center items-center self-end text-3xl w-[53px] h-[53px] border rounded-full border-fadeText cursor-pointer text-fadeText mr-6">
						<FontAwesomeIcon icon={faArrowRight} />
					</div>
				</div>
				<div className="hidden md:block">
					<button
						onClick={handleShowMore}
						className="text-xl px-10 text-center py-2 rounded-lg border border-primary text-primary"
					>
						{slicedProducts.length === products.length
							? 'See less'
							: 'See more'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductsComponent;
