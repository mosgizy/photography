import Link from 'next/link';
import Cart from '../components/Cart';

const Page = () => {
	return (
		<section className="section">
			<header className="md:hidden">
				<p className="text-fadeText">
					Home/ Marketplace/ Cart <span className="text-black">Shipping</span>
				</p>
			</header>
			<div className="md:flex md:gap-16">
				<div className="md:flex-1">
					<div className="mt-6">
						<div className="input-container">
							<label htmlFor="email">Your Email</label>
							<div className="w-full">
								<input
									type="email"
									name="email"
									placeholder="youremail@email.com"
									className="input"
								/>
								<div className="flex gap-2 items-center mt-2">
									<input
										type="checkbox"
										name="check"
										className="rounded-md bg-[#d9d9d9]"
									/>
									<span className="text-xs">
										Get updates about new drops & exclusive offers
									</span>
								</div>
							</div>
						</div>
						<div className="input-container mt-6">
							<label htmlFor="name">Your full name</label>
							<input
								type="text"
								name="name"
								placeholder="Enter your name"
								className="input"
							/>
						</div>
						<div className="input-container mt-6">
							<label htmlFor="choose wallet">Choose a wallet</label>
							<select name="choose wallet" className="input select">
								<option value="default">default</option>
							</select>
						</div>
						<div className="input-container mt-6">
							<label htmlFor="city">City</label>
							<select name="city" className="input select">
								<option value="default">default</option>
							</select>
						</div>
						<div className="md:flex gap-3">
							<div className="input-container mt-6 md:flex-1">
								<label htmlFor="country">Country</label>
								<select name="country" className="input select">
									<option value="default">default</option>
								</select>
							</div>
							<div className="input-container mt-6 md:flex-1">
								<label htmlFor="postal code">Postal code</label>
								<input type="numeric" name="postal code" className="input" />
							</div>
						</div>
						<div className="input-container mt-6">
							<label htmlFor="phone number">Phone number</label>
							<input type="numeric" name="phone number" className="input" />
						</div>
					</div>
					<div className="btn-container">
						<Link href="cart/shipping/payment" className="btn md:w-full">
							Proceed to payment
						</Link>
						<Link href="cart" className="link md:hidden">
							Go back to cart
						</Link>
					</div>
				</div>
				<div className="hidden md:block md:flex-1">
					<Cart btn={false} />
				</div>
			</div>
		</section>
	);
};

export default Page;
