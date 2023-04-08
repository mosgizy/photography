import Image from 'next/image';
import Link from 'next/link';
import { dropsI } from '../../../../resources/interfaces';

const Drop = ({ drop }: { drop: dropsI }) => {
	const { title, creator, url, date } = drop;

	return (
		<div className="mt-6 flex flex-col gap-4 md:flex-row">
			<div className="text-white w-full relative rounded-xl overflow-hidden">
				<div className="absolute top-2 right-2 z-30 text-xs bg-[#4693ED] px-3 py-1 rounded-md md:hidden">
					upcoming
				</div>
				<Image
					src={url}
					width={500}
					height={600}
					alt="drops"
					className="w-full h-full aspect-[3/2] object-cover"
				/>
				<div className="flex justify-center">
					<div className="bg-drops-linear w-[80%] py-2 px-4 border-[0.5px] rounded-lg backdrop-blur-[1.5px] absolute bottom-2">
						<p className="text-base">Time remaining</p>
						<div className="flex justify-between items-center">
							<p className="text-2xl">06 hrs : 45 min : 22 s</p>
							<div className="hidden md:block text-xs w-fit text-center uppercase bg-[#4693ED] px-3 py-1 rounded-2xl text-white">
								join
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-4 md:justify-between">
				<div className="hidden md:block text-lg w-fit text-center uppercase bg-[#4693ED] px-3 py-1 rounded-md text-white">
					upcoming
				</div>
				<p className="text-base capitalize">
					{date.month} {date.day} at {date.time} {date.timezone}
				</p>
				<h2 className="font-medium uppercase">{title}</h2>
				<p className="text-fadeText text-base">
					Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae
					tempus. Sed nunc tempus aliquet lectus ut vulputate.
				</p>
				<p className="text-xl">
					Creator : <span className="text-nameColor capitalize">{creator}</span>
				</p>
				<Link href="#" className="text-nameColor underline text-base">
					Get notified
				</Link>
			</div>
		</div>
	);
};

export default Drop;
