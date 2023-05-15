'use client';

import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

type Props = {
	children?: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => {
	return (
		<Provider store={store}>
			<SessionProvider>{children}</SessionProvider>
		</Provider>
	);
};
