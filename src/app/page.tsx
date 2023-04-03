import { Poppins } from 'next/font/google';
import getData from '../../utils/api';
import { carouselI, featuredI } from '../../resources/interfaces';
import { PRODUCT_URL, CAROUSEL_URL } from '../../resources/constant';
import HomePage from './component/HomePage';
import Footer from './component/Footer';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

const Home = async () => {
	const { carousel }: { carousel: carouselI[] } = await getData(CAROUSEL_URL);
	const { featured_products }: { featured_products: featuredI[] } =
		await getData(PRODUCT_URL);

	return (
		<section className={`section ${poppins.className}`}>
			<HomePage featuredProducts={featured_products} carousel={carousel} />
			<Footer />
		</section>
	);
};

export default Home;
