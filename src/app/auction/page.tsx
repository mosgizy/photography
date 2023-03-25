import { AUCTION_URL } from '../../../resources/constant';
import { bidsI, productBidI } from '../../../resources/interfaces';
import getData from '../../../utils/api';
import AuctionPage from './components/AuctionPage';

const page = async () => {
	const { products, bids }: { products: productBidI[]; bids: bidsI[] } =
		await getData(AUCTION_URL);

	console.log(products);

	return (
		<section className="px-2">
			<AuctionPage products={products} bids={bids} />
		</section>
	);
};

export default page;
