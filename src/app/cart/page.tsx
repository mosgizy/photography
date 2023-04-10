'use client';

import NavBtn from './components/NavBtn';
import Cart from './components/Cart';

const Page = () => {
	return (
		<section className="section">
			<header className="md:hidden">
				<p className="text-fadeText">
					Home/ Marketplace/ <span className="text-black">Cart</span>
				</p>
			</header>
			<NavBtn />
			<Cart btn={true} />
		</section>
	);
};

export default Page;
