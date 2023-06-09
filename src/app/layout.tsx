import NavBar from './component/NavBar';
import './globals.css';
import { productI } from '../../resources/interfaces';
import { PRODUCT_URL } from '../../resources/constant';
import getData from '../../utils/api';
import { Metadata } from 'next';
import { AppProvider } from './provider';

export const metadata: Metadata = {
	title: 'The Hills',
	description: 'Welcome to The Hills',
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
	const { products }: { products: productI[] } = await getData(PRODUCT_URL);
	return (
		<html lang="en">
			<body className="mb-10 overflow-x-hidden">
				<AppProvider>
					{products && <NavBar products={products} />}
					<main>{children}</main>
				</AppProvider>
			</body>
		</html>
	);
};

export default RootLayout;
