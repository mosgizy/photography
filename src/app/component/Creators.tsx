import Image from 'next/image';
import creator from '../../../resources/images/creator.png';

const Creators = () => {
	return (
		<div className="mt-12 md:mt-20 md:px-12 md:py-10 bg-[#e2e2e2] pt-2 pb-16 relative">
			<div>
				<h2 className="uppercase max-w-[17ch] pl-2 text-2xl md:text-[45px] md:leading-[70px]">
					top creators of the week
				</h2>
			</div>
			<p className="text-xs md:text-2xl md:font-extralight md:mt-28 md:text-left md:mb-32 text-center mt-6 text-[rgba(0,0,0,0.5)] leading-5">
				“Everything always looked better in black and white. Everything always
				as if it were the first time; there’s always more people in a black and
				white photograph. It just makes it seem that there were more people at a
				gig, more people at a football match, than with colour photography.
				Everything looks more exciting.”– Jack Lowden
			</p>
			<div className="absolute -bottom-8 right-14 md:right-32 w-[230px] h-[240px] md:w-[526px] md:h-[535px] z-20">
				<Image
					src={creator}
					alt="creator of the week"
					width={800}
					height={800}
					className="object-contain w-full h-full"
				/>
			</div>
			<div className="absolute top-0 right-0 md:top-12 md:right-16 flex gap-6 items-start">
				<div className="hidden md:block bg-[#AEAEAE] w-2 h-[13rem] rounded-3xl overflow-hidden rotate-180">
					<div className="w-full h-8 bg-secondary"></div>
				</div>
				<ul className="flex gap-3 text-primary text-[10px] md:text-3xl md:flex-col md:gap-6 md:font-normal">
					<li>Editorial</li>
					<li>Fashion</li>
					<li>Lifestyle</li>
					<li>Blueprint</li>
				</ul>
			</div>
			<div className="font-bold text-black flex flex-col gap-2 text-right absolute bottom-0 right-0 md:bottom-16 md:right-32 md:items-start">
				<span className="text-4xl md:text-5xl text-primary md:pl-24">
					circa
				</span>
				<span className="text-6xl md:text-9xl">1985</span>
			</div>
		</div>
	);
};

export default Creators;
