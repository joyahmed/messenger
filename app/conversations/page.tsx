'use client';

import EmptyState from '../components/EmptyState';
import useConversation from '../hooks/useConversation';

interface HomeProps {}

const Home = ({}: HomeProps) => {
	const { isOpen } = useConversation();
	return (
		<div
			className={`lg:pl-80 h-full lg:block ${
				isOpen ? 'block' : 'hidden'
			}`}
		>
			<EmptyState />
		</div>
	);
};

export default Home;
