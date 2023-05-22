import Sidebar from '../components/sidebar/Sidebar';

interface UserLayoutProps {
	children: React.ReactNode;
}

const UserLayout = async ({ children }: UserLayoutProps) => {
	return (
		// @ts-expect-error Server Component
		<Sidebar>
			<div className='h-full'>{children}</div>
		</Sidebar>
	);
};

export default UserLayout;
