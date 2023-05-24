'use client';

import Avatar from '@/app/components/Avatar';
import { User } from '@prisma/client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

interface UserBoxProps {
	user: User;
}

const UserBox = ({ user }: UserBoxProps) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const handleClick = useCallback(() => {
		setIsLoading(true);

		axios
			.post('/api/conversations', {
				userId: user.id
			})
			.then(data => {
				router.push(`/conversations/${data.data.id}`);
			})
			.finally(() => setIsLoading(false));
	}, [user, router]);
	return (
		<div
			onClick={handleClick}
			className='
      relative
      flex
      items-center
      w-full
      space-x-3
      bg-white
      p-3
      hover:bg-neutral-100
      rounded-lg
      transition
      cursor-pointer
    '
		>
			<Avatar {...{ user }} />
			<div className='flex-1 min-w-0'>
				<div className='focus:outline-none'>
					<div
						className='
              flex
              justify-between
              items-center
              mb-1
            '
					>
						<p
							className='
                text-sm
                font-medium
                text-gray-900
              '
						>
							{user.name}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserBox;
