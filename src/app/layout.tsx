import Footer from './component/Footer';
import NavBar from './component/NavBar';
import './globals.css';

export const metadata = {
	title: 'Create Next App',
	description: 'Lets build a photograper profile',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="mb-10">
				<NavBar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
