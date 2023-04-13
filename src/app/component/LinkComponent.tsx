import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LinkComponent = () => {
	const path = usePathname().slice(1);
	const linkText = ['home', 'marketplace', 'auction', 'drops'];
	return (
		<ul className="gap-6 items-center hidden md:flex text-secondary">
			{linkText.map((link, index) => {
				return (
					<li
						key={index}
						className={`navLink ${
							path === (link === 'home' ? '' : link) &&
							'underline underline-offset-4 text-black'
						}`}
					>
						<Link href={`${link === 'home' ? '' : link}`}>{link}</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default LinkComponent;
