import { createClient as createClientSupabase } from '@supabase/supabase-js';

export default function createClient() {
	const client = createClientSupabase(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);
	return client;
}
