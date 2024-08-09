import { createClient } from '@supabase/supabase-js';
// types
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './database.type';

export type DatabaseClient = SupabaseClient<Database>;

export const databaseClient = createClient<Database>(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
