import getData from '../../../../utils/api';
import Info from '../components/Info';
import Collections from '../components/Collections';
import { productI } from '../../../../resources/interfaces';
import { PRODUCT_URL } from '../../../../resources/constant';
import Item from '../components/Item';

const page = async ({ params }: { params: { product: string } }) => {
	const { products }: { products: productI[] } = await getData(PRODUCT_URL);

	const { product } = params;
	const path = product.replaceAll('%20', ' ');

	const [currentProduct] = products.filter((product) => {
		return product.name === path;
	});

	const moreCollections = products.filter((product) => {
		return product.name !== path;
	});

	return (
		<section className="section md:max-w-5xl mx-auto">
			<header className="px-2">
				<p className="text-notActive text-lg border-primary border-b pb-4 md:border-none  md:mt-8">
					Home/ Marketplace/ Editorials/{' '}
					<span className="text-secondary">{path}</span>
				</p>
			</header>
			<div className="pt-6 px-6 md:border md:border-primary md:p-0 md:mx-auto  md:mt-12">
				<Item product={currentProduct} path={path} />
			</div>
			<div className="mt-12 md:hidden">
				<Info link={'Description'} />
				<Info link={'Listings'} />
				<Info link={'Status'} />
			</div>
			<div className="mt-16 px-2">
				<h2 className="font-normal text-2xl text-secondary my-6 md:hidden">
					More from this collection
				</h2>
				<Collections products={moreCollections} />
			</div>
		</section>
	);
};

export default page;

export async function generateStaticParams() {
	const { products }: { products: productI[] } = await getData(PRODUCT_URL);

	return products.map((product) => ({ product: product.name }));
}
