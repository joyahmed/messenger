'use client';

import Link from 'next/link';

interface MobileItemProps {
	icon: any;
	href: string;
	onClick?: () => void;
	active?: boolean;
}

const MobileItem = ({
	icon: Icon,
	href,
	onClick,
	active
}: MobileItemProps) => {
	const handleClick = () => {
		if (onClick) return onClick();
	};

	return (
		<Link
			onClick={handleClick}
			href={href}
			className={`
        group
        flex
        justify-center
        w-full
        gap-x-3
        text-sm
        leading-6
        font-semibold
        p-4
        text-gray-500
        hover:text-black
        hover:bg-gray-100
				${active && 'bg-gray-100 text-black'}
      `}
		>
			<Icon className='h-6 w-6 shrink-0' />
		</Link>
	);
};

export default MobileItem;
