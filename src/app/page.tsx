import { Poppins } from 'next/font/google';
import getData from '../../utils/api';
import { carouselI, featuredI } from '../../resources/interfaces';
import { PRODUCT_URL, CAROUSEL_URL } from '../../resources/constant';
import Footer from './component/Footer';
import dynamic from 'next/dynamic';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

const HomePage = dynamic(() => import('./component/HomePage'), {
	ssr: false,
});

const Home = async () => {
	const { carousel }: { carousel: carouselI[] } = await getData(CAROUSEL_URL);
	const { featured_products }: { featured_products: featuredI[] } =
		await getData(PRODUCT_URL);

	return (
		<section
			className={`${poppins.className} section
		`}
		>
			<HomePage featuredProducts={featured_products} carousel={carousel} />
			<Footer />
		</section>
	);
};

export default Home;
