import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
	return (
		<footer className="mt-16 px-5 text-primary">
			<div className="flex flex-col gap-6">
				<h2 className="text-2xl uppercase font-normal">newsletter</h2>
				<p className="text-xs ">
					SUBSCRIBE TO OUR DAILY UPDATES AND NEWSLETTERS
				</p>
				<input
					className="border border-primary py-4 px-4 text-xs"
					type="text"
					placeholder=" Enter your email here"
				/>
				<button className="bg-primary px-7 py-5 text-white text-xs w-44 uppercase">
					subscribe
				</button>
				<div className="flex flex-col gap-4">
					<h4 className="uppercase font-light">reach us</h4>
					<div className="flex gap-4 items-center">
						<FontAwesomeIcon icon={faEnvelope} className="basis-7" />
						<span className="text-xs">artsystudios@gmail.com</span>
					</div>
					<div className="flex gap-4 items-center">
						<FontAwesomeIcon icon={faLocationDot} className="basis-7" />
						<span className="text-xs">Lagos, Nigeria.</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
