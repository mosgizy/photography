import Image from 'next/image';
import creator from '../../../resources/images/creator.png';

const Creators = () => {
	return (
		<div className="mt-12 bg-[#e2e2e2] pt-2 pb-16 relative">
			<div>
				<h2 className="uppercase max-w-[17ch] pl-2 text-2xl">
					top creators of the week
				</h2>
			</div>
			<p className="text-xs text-center mt-6 text-[rgba(0,0,0,0.5)] leading-5">
				“Everything always looked better in black and white. Everything always
				as if it were the first time; there’s always more people in a black and
				white photograph. It just makes it seem that there were more people at a
				gig, more people at a football match, than with colour photography.
				Everything looks more exciting.”– Jack Lowden
			</p>
			<div className="absolute -bottom-8 right-14 w-[230px] h-[240px] z-20">
				<Image
					src={creator}
					alt="creator of the week"
					width={300}
					height={300}
				/>
			</div>
			<ul className="flex gap-3 absolute top-0 right-0 text-primary text-[10px]">
				<li>Editorial</li>
				<li>Fashion</li>
				<li>Lifestyle</li>
			</ul>
			<div className="font-bold text-black flex flex-col gap-2 text-right absolute bottom-0 right-0">
				<span className="text-4xl text-primary">circa</span>
				<span className="text-6xl">1985</span>
			</div>
		</div>
	);
};

export default Creators;
