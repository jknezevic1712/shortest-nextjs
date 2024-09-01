'use client';

// components
import AuthenticationTemplate from '../_components/templates/authentication/Authentication';
import useServerActions from '../_lib/hooks/useServerActions';

export default function Authentication() {
	const { signInWithProvider } = useServerActions();

	return (
		<AuthenticationTemplate
			authTest={() =>
				signInWithProvider.execute({
					provider: 'github',
				})
			}
		/>
	);
}
