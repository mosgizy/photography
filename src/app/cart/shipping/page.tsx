import Link from 'next/link';

const Page = () => {
	return (
		<section className="section">
			<header>
				<p className="text-fadeText">
					Home/ Marketplace/ Cart <span className="text-black">Shipping</span>
				</p>
			</header>
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
				<div className="input-container mt-6">
					<label htmlFor="country">Country</label>
					<select name="country" className="input select">
						<option value="default">default</option>
					</select>
				</div>
				<div className="input-container mt-6">
					<label htmlFor="postal code">Postal code</label>
					<input type="numeric" name="postal code" className="input" />
				</div>
				<div className="input-container mt-6">
					<label htmlFor="phone number">Phone number</label>
					<input type="numeric" name="phone number" className="input" />
				</div>
			</div>
			<div className="btn-container">
				<button className="btn">
					<Link href="cart/shipping/payment">Proceed to payment</Link>
				</button>
				<Link href="cart" className="link">
					Go back to cart
				</Link>
			</div>
		</section>
	);
};

export default Page;
