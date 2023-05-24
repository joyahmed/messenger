'use client';

import useRoutes from '@/app/hooks/useRoutes';
import { User } from '@prisma/client';
import { useState } from 'react';
import Avatar from '../Avatar';
import DesktopItem from './DesktopItem';

interface DesktopSidebarProps {
	currentUser: User;
}

const DesktopSidebar = ({ currentUser }: DesktopSidebarProps) => {
	const routes = useRoutes();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className='
        hidden
        lg:fixed
        lg:flex
        lg:flex-col
        justify-between
        lg:inset-y-0
        lg:left-0
        lg:z-40
        lg:w-20
        xl:px-6
        lg:overflow-y-auto
        lg:bg-white
        lg:border-r-[1px]
        lg:pb-4
      '
		>
			<nav
				className='
          flex
          flex-col
          justify-between
          mt-4
        '
			>
				<ul
					role='list'
					className='
            flex
            flex-col
            items-center
            space-y-1
          '
				>
					{routes.map(route => (
						<DesktopItem
							key={route.label}
							{...{
								href: route.href,
								label: route.label,
								icon: route.icon,
								active: route.active,
								onClick: route.onClick
							}}
						/>
					))}
				</ul>
			</nav>
			<nav
				className='
							flex
							flex-col
							items-center
							justify-between
							mt-4
				'
			>
				<div
					onClick={() => setIsOpen(true)}
					className='
							cursor-pointer
							hover:opacity-75
							transition
					'
				>
					<Avatar {...{ user: currentUser }} />
				</div>
			</nav>
		</div>
	);
};

export default DesktopSidebar;
