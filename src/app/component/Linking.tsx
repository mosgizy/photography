'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Linking = ({ link }: { link: string }) => {
	return (
		<div className="flex justify-between items-center text-secondary py-3 px-2 border border-black border-x-0">
			<p className="text-2xl">{link} </p>
			<div className="flex justify-center items-center self-end text-3xl w-[53px] h-[53px] border rounded-full border-fadeText cursor-pointer text-fadeText mr-6">
				<FontAwesomeIcon icon={faArrowRight} />
			</div>
		</div>
	);
};

export default Linking;
