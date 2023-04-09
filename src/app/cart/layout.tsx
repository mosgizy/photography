import NavBar from '../component/NavBar';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="mb-10 overflow-x-hidden">
			<div>hello world</div>
			{children}
		</main>
	);
}
