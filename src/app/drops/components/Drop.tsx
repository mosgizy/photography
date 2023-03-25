import Image from 'next/image';
import Link from 'next/link';
import { dropsI } from '../../../../resources/interfaces';

const Drop = ({ drop }: { drop: dropsI }) => {
	const { title, creator, url, date } = drop;

	return (
		<div className="mt-6 flex flex-col gap-4 rounded-xl overflow-hidden">
			<div className="text-white h-[224px] w-full relative">
				<div className="absolute top-2 right-2 z-30 text-xs bg-[#4693ED] px-3 py-1 rounded-md">
					upcoming
				</div>
				<Image src={url} fill alt="drops" />
				<div className="flex justify-center">
					<div className="bg-drops-linear w-[87vw] py-2 px-4 border-[0.5px] rounded-lg backdrop-blur-[1.5px] absolute bottom-2">
						<p className="text-base">Time remaining</p>
						<p className="text-2xl">06 hrs : 45 min : 22 s</p>
					</div>
				</div>
			</div>
			<p className="text-base">
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
	);
};

export default Drop;
