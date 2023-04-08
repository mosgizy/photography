import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getData from '../../../utils/api';
import { DROPS_URL } from '../../../resources/constant';
import { dropsI } from '../../../resources/interfaces';
import Drop from './components/Drop';
import Footer from '../component/Footer';

const page = async () => {
	const drops: dropsI[] = await getData(DROPS_URL);

	return (
		<section className="section">
			<div className="hidden md:block text-fadeText mx-4">
				<p>
					Home/ Auctions/ Live bid <span className="text-black">Drop</span>{' '}
				</p>
			</div>
			<header className="flex justify-center">
				<div className="flex flex-col gap-6 items-center justify-center mt-9 mb-8 w-[30ch] text-center md:w-full">
					<h1>Upcoming drops</h1>
					<p className="text-fadeText">
						You may turn on notifications so that no drop will miss you.
					</p>
					<button className="text-lg px-12 py-2 border-[0.6px] border-black rounded-lg font-medium bg-transparent hover:bg-buttonColor hover:text-white md:w-fit">
						Notify me
					</button>
				</div>
			</header>
			<div className="px-4">
				<div className="flex justify-end md:hidden">
					<div className="flex gap-3 items-center">
						<span>Sort by</span> <FontAwesomeIcon icon={faChevronDown} />
					</div>
				</div>
				<div className="mt-8 md:flex md:flex-col md:gap-14">
					{drops.map((drop) => {
						const { id, title, creator, url, date } = drop;
						return (
							<div key={id}>
								<Drop drop={drop} />
							</div>
						);
					})}
				</div>
			</div>
			<div className="hidden md:flex md:justify-center mt-14">
				<button className="text-lg px-12 py-2 border-[0.6px] border-black rounded-lg font-medium bg-transparent hover:bg-buttonColor hover:text-white md:w-fit">
					See more
				</button>
			</div>
			<div className="hidden md:block">
				<Footer />
			</div>
		</section>
	);
};

export default page;
