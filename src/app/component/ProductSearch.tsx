import Image from 'next/image';
import { productI } from '../../../resources/interfaces';
import Link from 'next/link';

const ProductSearch = ({
	products,
	search,
}: {
	products: productI[];
	search: string;
}) => {
	const productData = () => {
		if (search) {
			return products.filter(
				(product) => product.name.toLowerCase().indexOf(search) !== -1
			);
		} else {
			return [];
		}
	};

	return (
		<div className="absolute w-52 top-8 z-40 mt-4 bg-white shadow-4xl h-0 group-hover:h-max group-focus-within:h-max">
			{productData().map((product) => {
				const { url, name, price } = product;
				return (
					<Link
						href={`/marketplace/${name}`}
						key={product.id}
						className="gap-4 w-full px-3 py-2 transition-all h-0 group-hover:h-max group-focus-within:h-max opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 hidden group-focus-within:flex group-hover:flex cursor-pointer"
					>
						<Image src={url} alt="product" width={40} height={40} />
						<div className="flex flex-col justify-between">
							<p>{name}</p>
							<p>${price.usd}</p>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default ProductSearch;
