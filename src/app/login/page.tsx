'use client';

import { signIn } from 'next-auth/react';

const LoginPage = () => {
	return (
		<div>
			<div>This is a login page</div>
			<button onClick={() => signIn()}>Sign in</button>
		</div>
	);
};

export default LoginPage;
