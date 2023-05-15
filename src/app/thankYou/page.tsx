'use client';

import Image from 'next/image';
import thankYou from '../../../resources/images/Woman get online delivery.png';
import ellipse from '../../../resources/images/Ellipse 7.png';
import ellipse1 from '../../../resources/images/Ellipse 8.png';
import { useSession } from 'next-auth/react';

const Page = () => {
	const { data: session } = useSession();
	return (
		<section className="section">
			<div className="flex justify-center items-center backdrop-blur-2xl relative">
				<Image
					src={thankYou}
					alt="appreciation page"
					width={500}
					height={500}
					className="w-[275px] h-[246px] z-50 mt-28 mb-10"
				/>
				<span className="absolute inset-0 bg-[rgba(255,255,255,.1)] z-40 backdrop-blur-2xl md:hidden"></span>
				<span className="w-[78px] h-[80px] bg-[#006CA2] absolute top-16 left-0 rounded-full backdrop-blur-2xl opacity-10 md:hidden"></span>
				<span className="w-[90px] h-[92px] bg-[#9B62EC] absolute top-14 right-20 rounded-full backdrop-blur-2xl opacity-10 md:hidden"></span>
				<span className="w-[129px] h-[112px] bg-[#E27625] absolute bottom-6 right-0 rounded-full backdrop-blur-2xl  opacity-10 md:hidden"></span>
			</div>
			<div className="flex flex-col gap-6 items-center text-center mt-6">
				<p className="text-lg">
					Hey <span className="capitalize">{session?.user?.name}</span>, thank
					you for your purchase.{' '}
				</p>
				<p className="text-fadeText text-base">
					You are amazing. Cheers to being{' '}
					<span className="text-nameColor">ARTSY!</span>
				</p>
			</div>
			<div className="absolute top-0 hidden md:block">
				<span className="w-72 h-72 rounded-full block absolute">
					<Image src={ellipse} alt="ellipse" fill />
				</span>
				<span className="rounded-full w-80 h-80 block absolute">
					<Image src={ellipse1} alt="ellipse" fill />
				</span>
			</div>
		</section>
	);
};

export default Page;
