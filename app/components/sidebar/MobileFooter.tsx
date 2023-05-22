'use client';

import useConversation from '@/app/hooks/useConversation';
import useRoutes from '@/app/hooks/useRoutes';
import React from 'react';
import MobileItem from './MobileItem';

interface MobileFooterProps {}

const MobileFooter = ({}: MobileFooterProps) => {
	const routes = useRoutes();
	const { isOpen } = useConversation();

	if (isOpen) return null;

	return (
		<div
			className='
      fixed
      flex
      items-center
      justify-between
      w-full
      bottom-0
      z-40
      bg-white
      border-t-[1px]
      lg:hidden
    '
		>
			{routes.map(route => (
				<MobileItem
					key={route.label}
					{...{
						href: route.href,
						icon: route.icon,
						active: route.active,
						onClick: route.onClick
					}}
				/>
			))}
		</div>
	);
};

export default MobileFooter;
