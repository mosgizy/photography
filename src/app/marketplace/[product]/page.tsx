import Image from 'next/image';
import getData from '../../../../utils/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Info from '../components/Info';
import Collections from '../components/Collections';
import { productI } from '../../../../resources/interfaces';
import { PRODUCT_URL } from '../../../../resources/constant';

const page = async ({ params }: { params: { product: string } }) => {
	const { products }: { products: productI[] } = await getData(PRODUCT_URL);
	const { product } = params;
	const path = product.replace('%20', ' ');

	const currentProduct = products.filter((product: any) => {
		return product.name === path;
	});

	const moreCollections = products.filter((product: any) => {
		return product.name !== path;
	});

	const { id, name, creator, origin, views, price, size, url } =
		currentProduct[0];

	console.log(currentProduct);

	return (
		<section>
			<header className="px-2">
				<p className="text-notActive text-lg border-primary border-b pb-4">
					Home/ Marketplace/ Editorials/{' '}
					<span className="text-secondary">{path}</span>
				</p>
			</header>
			<div className="pt-6 px-6">
				<div>
					<Image src={url} alt={name} width="500" height="400" />
				</div>
				<div className="flex justify-between text-primary text-base uppercase mt-5 mb-6">
					<span>{name}</span>
					<span>${price.usd}</span>
				</div>
				<div className="text-fadeText flex flex-col gap-4">
					<p className="text-black">
						Creator :{' '}
						<span className="text-nameColor capitalize">{creator}</span>
					</p>
					<p className="capitalize">{origin}</p>
					<p>Total views : {views}</p>
					<div className="flex gap-4 items-center">
						<FontAwesomeIcon icon={faMinus} />
						<span className="text-4xl">1</span>
						<FontAwesomeIcon icon={faPlus} />
					</div>
					<div className="flex gap-4 items-center">
						<button className="py-4 px-12 bg-buttonColor rounded text-white text-lg">
							Add to cart
						</button>
						<div className="border border-darkText rounded py-3 px-5 cursor-pointer">
							<FontAwesomeIcon icon={faHeart} className="w-[25px] h-[27px]" />
						</div>
					</div>
				</div>
			</div>
			<div className="mt-12">
				<Info link={'Description'} />
				<Info link={'Listings'} />
				<Info link={'Status'} />
			</div>
			<div className="mt-16 px-2">
				<h2 className="font-normal text-2xl text-secondary my-6">
					More from this collection
				</h2>
				<Collections products={moreCollections} />
			</div>
		</section>
	);
};

export default page;

const eth = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
		<path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
	</svg>
);
