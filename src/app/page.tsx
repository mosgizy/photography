import Image from 'next/image';
import { Poppins } from 'next/font/google';
import getData from '../../utils/api';
import Product from './component/Product';
import Auction from './component/Auction';
import Linking from './component/Linking';
import Creators from './component/Creators';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

const carouselUrl = 'carousel.json';
const productUrl = 'products.json';

const Home = async () => {
	const { carousel } = await getData(carouselUrl);
	const { featured_products } = await getData(productUrl);

	return (
		<section className={poppins.className}>
			<header className="flex flex-col gap-5 text-center px-5">
				<h1 className="text-3xl">
					Photography is poetry and beautiful untold stories
				</h1>
				<p className="text-lg">
					Flip through more than 10,000 vintage shots, old photograghs, historic
					images and captures seamlessly in one place. Register to get top
					access.
				</p>
				<div className="relative flex justify-center h-[320px] even:rotate-12">
					{carousel.map((data: { id: string; url: string }) => {
						return (
							<div key={data.id} className="absolute w-[320px] h-[280px]">
								<Image
									src={data.url}
									width={500}
									height={800}
									alt="carousel"
									className="aspect-square"
								/>
							</div>
						);
					})}
				</div>
			</header>
			<div className="px-3 mt-24">
				<h1 className="text-3xl font-bold">Featured products</h1>
				<div className="mt-8 flex flex-col gap-12">
					{featured_products.map(
						(featured_product: { id: string; url: string }) => {
							return (
								<Product key={featured_product.id} url={featured_product.url} />
							);
						}
					)}
				</div>
			</div>
			<div>
				<Auction />
			</div>
			<div>
				<Linking link={'Explore marketplace'} />
				<Linking link={'See auction'} />
			</div>
			<div>
				<Creators />
			</div>
		</section>
	);
};

export default Home;
