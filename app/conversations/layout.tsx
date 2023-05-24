import getConversations from '../actions/getConversations';
import Sidebar from '../components/sidebar/Sidebar';
import ConversationList from './components/ConversationList';

interface ConversationsLayoutProps {
	children: React.ReactNode;
}

const ConversationsLayout = async ({
	children
}: ConversationsLayoutProps) => {

  const conversations = await getConversations()

	return (
		// @ts-expect-error Server Component
		<Sidebar>
      <div className='h-full'>
        <ConversationList {...{conversations}} />
        {children}
      </div>
		</Sidebar>
	);
};

export default ConversationsLayout;
