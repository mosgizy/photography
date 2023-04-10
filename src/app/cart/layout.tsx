import LayoutNav from './components/LayoutNav';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="mb-10 overflow-x-hidden">
			<LayoutNav />
			{children}
		</main>
	);
}
