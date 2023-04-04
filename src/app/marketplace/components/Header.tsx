'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = ({
	text,
	children,
}: {
	text: string;
	children: JSX.Element;
}) => {
	const [toggled, setToggled] = useState(false);

	const handleToggle = () => {
		setToggled((prev) => !prev);
	};

	return (
		<div>
			<div
				className="flex justify-between items-center cursor-pointer"
				onClick={handleToggle}
			>
				<div className="text-xl">{text}</div>
				<span>
					{toggled ? (
						<FontAwesomeIcon icon={faChevronUp} className="text-[#999999]" />
					) : (
						<FontAwesomeIcon icon={faChevronDown} className="text-[#999999]" />
					)}
				</span>
			</div>
			<div className={`mt-6 ${toggled ? 'block' : 'hidden'}`}>{children}</div>
		</div>
	);
};

export default Header;
