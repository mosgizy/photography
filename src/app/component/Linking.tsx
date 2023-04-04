'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Linking = ({ link }: { link: string }) => {
	return (
		<div className="flex justify-between items-center text-secondary py-3 px-2 md:px-8 border border-black border-x-0">
			<p className="text-2xl">{link} </p>
			<div className="flex justify-center items-center self-end text-3xl w-[53px] h-[53px] border md:border-none rounded-full border-fadeText cursor-pointer text-fadeText mr-6 md:mr-20">
				<FontAwesomeIcon
					icon={faArrowRight}
					className="md:text-[#4693ED] md:w-20"
				/>
			</div>
		</div>
	);
};

export default Linking;
