import Image from 'next/image';
import Link from 'next/link';

interface cardI {
	name: string;
	price: number;
	url: string;
	sign?: boolean;
}

const ProductCard = ({ name, price, url, sign }: cardI) => {
	const card = (
		<div>
			<div>
				<Image
					src={url}
					alt={name}
					width={400}
					height={400}
					className="h-[370px]"
				/>
			</div>
			<div className="flex justify-between text-primary text-2xl py-3">
				<span className="capitalize">{name}</span>
				<div
					className={`flex gap-1 items-center ${
						!sign && 'tracking-tighter gap-0'
					}`}
				>
					<span className={`text-xl ${sign && 'w-4'}`}>{sign ? eth : '$'}</span>
					{price}
				</div>
			</div>
		</div>
	);

	return <>{sign ? card : <Link href={`/marketplace/${name}`}>{card}</Link>}</>;
};

export default ProductCard;

const eth = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
		<path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
	</svg>
);
