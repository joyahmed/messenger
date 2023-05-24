import getUsers from '../actions/getUsers';
import Sidebar from '../components/sidebar/Sidebar';
import UserList from './components/UserList';

interface UserLayoutProps {
	children: React.ReactNode;
}

const UserLayout = async ({ children }: UserLayoutProps) => {
	const users = await getUsers();

	return (
		// @ts-expect-error Server Component
		<Sidebar>
			<div className='h-full'>
				<UserList {...{ users }} />
				{children}
			</div>
		</Sidebar>
	);
};

export default UserLayout;
