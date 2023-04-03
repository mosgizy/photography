import Providers from '../../store/provider';
import NavBar from './component/NavBar';
import './globals.css';

export const metadata = {
	title: 'The Hills',
	description: 'Welcome to The Hills',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="mb-10">
				<Providers>
					<NavBar />
					<main>{children}</main>
				</Providers>
			</body>
		</html>
	);
}
