import Image from 'next/image';
import thankYou from '../../../../../../resources/images/Woman get online delivery.png';

const Page = () => {
	return (
		<section>
			<div className="flex justify-center items-center backdrop-blur-2xl relative">
				<Image
					src={thankYou}
					alt="appreciation page"
					width={500}
					height={500}
					className="w-[275px] h-[246px] z-50 mt-28 mb-10"
				/>
				<span className="absolute inset-0 bg-[rgba(255,255,255,.1)] z-40 backdrop-blur-2xl"></span>
				<span className="w-[78px] h-[80px] bg-[#006CA2] absolute top-16 left-0 rounded-full backdrop-blur-2xl"></span>
				<span className="w-[90px] h-[92px] bg-[#9B62EC] absolute top-14 right-20 rounded-full backdrop-blur-2xl"></span>
				<span className="w-[129px] h-[112px] bg-[#E27625] absolute bottom-6 right-0 rounded-full backdrop-blur-2xl"></span>
			</div>
			<div className="flex flex-col gap-6 items-center text-center mt-6">
				<p className="text-lg">Hey Celestina, thank you for your purchase. </p>
				<p className="text-fadeText text-base">
					You are amazing. Cheers to being{' '}
					<span className="text-nameColor">ARTSY!</span>
				</p>
			</div>
		</section>
	);
};

export default Page;
