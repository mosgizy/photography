import getData from '../../../../utils/api';
import Info from '../components/Info';
import Collections from '../components/Collections';
import { productI } from '../../../../resources/interfaces';
import { PRODUCT_URL } from '../../../../resources/constant';
import Item from '../components/Item';

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

	return (
		<section className="section">
			<header className="px-2">
				<p className="text-notActive text-lg border-primary border-b pb-4">
					Home/ Marketplace/ Editorials/{' '}
					<span className="text-secondary">{path}</span>
				</p>
			</header>
			<div className="pt-6 px-6">
				<Item product={currentProduct[0]} />
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
