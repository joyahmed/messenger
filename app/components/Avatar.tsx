'use client';

import { User } from '@prisma/client';
import Image from 'next/image';

interface AvatarProps {
	user?: User;
}

const Avatar = ({ user }: AvatarProps) => {
	return (
		<div className='relative'>
			<div
				className='
          relative
          inline-block
          rounded-full
          overflow-hidden
          w-9
          h-9
          md:w-11
          md:h-11
        '
			>
				<Image
					src={user?.image || '/images/placeholder.jpg'}
					alt='Avatar'
          fill
          sizes="(max-width: 600px) 100vw, 50vw"
				/>
			</div>
			<span
				className='
           absolute
           block
           rounded-full
           bg-green-500
           ring-2
           ring-white
           top-0
           right-0
           w-2
           h-2
           md:w-3
           md:h-3
        '
			></span>
		</div>
	);
};

export default Avatar;
