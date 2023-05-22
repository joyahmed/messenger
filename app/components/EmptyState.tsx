const EmptyState = () => {
	return (
		<div
			className='
      flex
      justify-center
      items-center
      px-4
      py-10
      sm:px-6
      lg:px-8
      h-full
      bg-gray-100
      '
		>
			<div
				className='
          flex
          flex-col
          text-center
          items-center
      '
			>
				<h3
					className='
            mt-2
            text-2xl
            font-semibold
            text-gray-900
          '
				>
					Select a chat or start a new conversation
				</h3>
			</div>
		</div>
	);
};

export default EmptyState;
