// components
import { Button } from '../../atoms/button/Button';

export default function AuthenticationTemplate({ authTest }: any) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>
				Authentication
				<Button onClick={authTest}>Auth Test</Button>
			</div>
		</main>
	);
}
