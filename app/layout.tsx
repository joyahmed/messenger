import { Inter } from 'next/font/google';
import React, { ReactNode } from 'react';
import AuthContext from './context/AuthContext';
import ToasterContext from './context/ToasterContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
	children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang='en'>

			<body className={inter.className}>
				<AuthContext>
					<ToasterContext />
					{children}
				</AuthContext>
			</body>
		</html>
	);
};

export default RootLayout;
