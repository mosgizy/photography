'use client';

import Link from 'next/link';
import Cart from '../components/Cart';
import { MouseEventHandler, useReducer } from 'react';
import { shoppingFormI } from '../../../../resources/interfaces';
import { useRouter } from 'next/navigation';

const Page = () => {
	const [formData, updateFormData] = useReducer(
		(state: shoppingFormI, action: any) => {
			return { ...state, ...action };
		},
		{
			email: '',
			name: '',
			walletType: '',
			city: '',
			country: '',
			postalCode: 0,
			phoneNumber: 0,
			getUpdate: false,
		} as shoppingFormI
	);

	const { push } = useRouter();

	const handleUpadateFormdata = (e: any) => {
		e.preventDefault();

		if (
			formData.email &&
			formData.name &&
			formData.walletType &&
			formData.city &&
			formData.country &&
			formData.postalCode &&
			formData.phoneNumber
		) {
			push('cart/shipping/payment');
		}
	};

	return (
		<section className="section">
			<header className="md:hidden">
				<p className="text-fadeText">
					Home/ Marketplace/ Cart <span className="text-black">Shipping</span>
				</p>
			</header>
			<div className="md:flex md:gap-16">
				<div className="md:flex-1">
					<form className="mt-6">
						<div className="input-container">
							<label htmlFor="email">Your Email</label>
							<div className="w-full">
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={(e) => updateFormData({ email: e.target.value })}
									placeholder="youremail@email.com"
									className="input"
									required
								/>
								<div className="flex gap-2 items-center mt-2">
									<input
										type="checkbox"
										name="check"
										value={formData.getUpdate}
										onChange={(e) => {
											updateFormData({ getUpdate: e.target.checked });
											console.log(e.target.value);
										}}
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
								value={formData.name}
								onChange={(e) => updateFormData({ name: e.target.value })}
								placeholder="Enter your name"
								className="input"
								required
							/>
						</div>
						<div className="input-container mt-6">
							<label htmlFor="choose wallet">Choose a wallet</label>
							<select
								name="choose wallet"
								onChange={(e) => updateFormData({ walletType: e.target.value })}
								value={formData.walletType}
								className="input select"
							>
								<option value="default">default</option>
								<option value="MetaMask">MetaMask</option>
								<option value="Coinbase">Coinbase</option>
							</select>
						</div>
						<div className="input-container mt-6">
							<label htmlFor="city">City</label>
							<select
								name="city"
								value={formData.city}
								onChange={(e) => updateFormData({ city: e.target.value })}
								className="input select"
							>
								<option value="default">default</option>
								<option value="Lagos">Lagos</option>
							</select>
						</div>
						<div className="md:flex gap-3">
							<div className="input-container mt-6 md:flex-1">
								<label htmlFor="country">Country</label>
								<select
									name="country"
									value={formData.country}
									onChange={(e) => updateFormData({ country: e.target.value })}
									className="input select"
								>
									<option value="default">default</option>
									<option value="Nigeria">Nigeria</option>
								</select>
							</div>
							<div className="input-container mt-6 md:flex-1">
								<label htmlFor="postal code">Postal code</label>
								<input
									type="numeric"
									value={formData.postalCode}
									onChange={(e) =>
										updateFormData({ postalCode: e.target.value })
									}
									name="postal code"
									className="input"
								/>
							</div>
						</div>
						<div className="input-container mt-6">
							<label htmlFor="phone number">Phone number</label>
							<input
								type="numeric"
								value={formData.phoneNumber}
								onChange={(e) =>
									updateFormData({ phoneNumber: e.target.value })
								}
								name="phone number"
								className="input"
							/>
						</div>
						<div className="btn-container">
							<button
								type="submit"
								onClick={handleUpadateFormdata}
								className="btn md:w-full"
							>
								Proceed to payment
							</button>
							<Link href="cart" className="link md:hidden">
								Go back to cart
							</Link>
						</div>
					</form>
				</div>
				<div className="hidden md:block md:flex-1">
					<Cart btn={false} />
				</div>
			</div>
		</section>
	);
};

export default Page;
