import { Poppins } from 'next/font/google';
import getData from '../../utils/api';
import { carouselI, featuredI } from '../../resources/interfaces';
import { PRODUCT_URL, CAROUSEL_URL } from '../../resources/constant';
import HomePage from './component/HomePage';
import Footer from './component/Footer';
import { authOptions } from './api/auth/[...nextauth]/routh';
import { getServerSession } from 'next-auth';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

const Home = async () => {
	const { carousel }: { carousel: carouselI[] } = await getData(CAROUSEL_URL);
	const { featured_products }: { featured_products: featuredI[] } =
		await getData(PRODUCT_URL);

	const session = await getServerSession(authOptions);

	console.log(JSON.stringify(session, null, 2), 'server');

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
