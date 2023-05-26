import getCurrentUser from '@/actions/getCurrentUser';
import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';

interface IParams {
	conversationId?: string;
}

export const POST = async (
	request: Request,
	{ params }: { params: IParams }
) => {
	try {
		const currentUser = await getCurrentUser();
		const { conversationId } = params;

		if (!currentUser?.id || !currentUser?.email)
			return new NextResponse('Unauthorized', { status: 401 });

		// Find the existing conversation
		const conversation = await prisma.conversation.findUnique({
			where: {
				id: conversationId
			},
			include: {
				messages: {
					include: {
						seen: true
					}
				},
				users: true
			}
		});

		if (!conversation)
			return new NextResponse('Invalid ID', { status: 400 });

		// Find the last message
		const lastMessage =
			conversation.messages[conversation.messages.length - 1];

		if (!lastMessage) return NextResponse.json(conversation);

		// Update seen of last message
		const updatedMessage = await prisma.message.update({
			where: {
				id: lastMessage.id
			},
			data: {
				seen: {
					connect: {
						id: currentUser.id
					}
				}
			},
			include: {
				sender: true,
				seen: true
			}
		});

		return NextResponse.json(updatedMessage);
	} catch (error: any) {
		console.log(error, 'ERROR_MESSAGES_SEEN');
		return new NextResponse('Internal Error', { status: 500 });
	}
};
