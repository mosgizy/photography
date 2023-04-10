'use client';

import { useState } from 'react';

const NavBtn = () => {
	const [activeBtn, setActiveBtn] = useState<boolean>(false);

	const handleBtn = () => {
		setActiveBtn((prev) => !prev);
	};

	return (
		<div className="flex justify-center mt-12 md:hidden">
			<div className="w-[85vw] bg-[#3a3a3a] rounded-[40px] px-7 py-1 text-white text-lg flex justify-between">
				<button
					onClick={handleBtn}
					className={`${
						!activeBtn && 'bg-white text-black rounded-[27px] px-8 py-2'
					}`}
				>
					Shop
				</button>
				<button
					onClick={handleBtn}
					className={`${
						activeBtn && 'bg-white text-black rounded-[27px] px-8 py-2'
					}`}
				>
					Schedule
				</button>
			</div>
		</div>
	);
};

export default NavBtn;
