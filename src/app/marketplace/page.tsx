import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import getData from '../../../utils/api';
import { productI } from '../../../resources/interfaces';
import { PRODUCT_URL } from '../../../resources/constant';
import ProductCard from './components/ProductCard';

const page = async () => {
	const { products }: { products: productI[] } = await getData(PRODUCT_URL);

	const slicedProducts = products.slice(0, 5);

	return (
		<section>
			<header className="px-2 flex flex-col gap-6">
				<p className="text-notActive text-lg border-primary">
					Home/ Marketplace/ <span className="text-secondary">Editorials</span>
				</p>
				<p className="text-notActive text-base">Showing 1-5 of 18 results</p>
			</header>
			<div className="px-2">
				<div className="flex justify-between py-3 px-3 text-lg bg-white shadow-3xl mt-4 mb-5 rounded">
					<div className="flex gap-3 items-center">
						<span>Filters</span>
						<FontAwesomeIcon icon={faChevronDown} />
					</div>
					<div className="flex gap-3 items-center">
						<span>Sort by</span>
						<FontAwesomeIcon icon={faChevronDown} />
					</div>
				</div>
			</div>
			<div className="px-6 flex flex-col gap-5">
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
			<div className="flex gap-5 justify-end items-center mt-10">
				<span>Load more</span>
				<div className="flex justify-center items-center self-end text-3xl w-[53px] h-[53px] border rounded-full border-fadeText cursor-pointer text-fadeText mr-6">
					<FontAwesomeIcon icon={faArrowRight} />
				</div>
			</div>
		</section>
	);
};

export default page;
