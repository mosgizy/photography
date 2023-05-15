'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const LoginPage = () => {
	const { status } = useSession();
	const { push } = useRouter();

	console.log(status);

	const handleSignIn = () => {
		signIn();
	};

	const handleSignOut = () => {
		signOut();
		// push('/');
	};

	const signInPage = (
		<div>
			<div>This is a login page</div>
			<button onClick={handleSignIn}>Sign in</button>
		</div>
	);

	const signOutPage = (
		<div>
			<div>This is a logOut page</div>
			<button onClick={handleSignOut}>Sign Out</button>
		</div>
	);

	useEffect(() => {
		status === 'authenticated' && push('/cart/shipping');
	}, [status]);

	return <div>{status === 'authenticated' ? signOutPage : signInPage}</div>;
};

export default LoginPage;
