'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Info = ({ link }: { link: string }) => {
	return (
		<div className="flex justify-between items-center text-primary py-5 px-5 border border-black border-x-0">
			<p className="text-lg font-medium">{link} </p>
			<FontAwesomeIcon icon={faChevronDown} />
		</div>
	);
};

export default Info;
