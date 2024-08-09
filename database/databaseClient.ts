import { createClient } from '@supabase/supabase-js';
// types
import type { SupabaseClient } from '@supabase/supabase-js';

export type DatabaseClient = SupabaseClient;

export const databaseClient = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
