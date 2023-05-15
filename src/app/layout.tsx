import NavBar from './component/NavBar';
import './globals.css';
import { productI } from '../../resources/interfaces';
import { PRODUCT_URL } from '../../resources/constant';
import getData from '../../utils/api';
import { Metadata } from 'next';
import { AppProvider } from './provider';
import { Session } from 'next-auth';
import { headers } from 'next/headers';

export const metadata: Metadata = {
	title: 'The Hills',
	description: 'Welcome to The Hills',
};

// async function getSession(cookie: string): Promise<Session> {
// 	const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/session`, {
// 		headers: {
// 			cookie,
// 		},
// 	});

// 	const session = await response.json();

// 	return Object.keys(session).length > 0 ? session : null;
// }

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
	const { products }: { products: productI[] } = await getData(PRODUCT_URL);
	// const session = await getSession(headers().get('cookie') ?? '');
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
