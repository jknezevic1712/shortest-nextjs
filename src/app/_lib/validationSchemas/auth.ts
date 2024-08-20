import { z } from 'zod';

// input schemas
export const signInUserInputSchema = z.object({
	provider: z.string(),
});

// output schemas
export const getUserOutputSchema = z.object({
	id: z.string(),
	app_metadata: z.object({
		provider: z.string().optional(),
	}),
	user_metadata: z.object({}),
	aud: z.string(),
	confirmation_sent_at: z.string().optional(),
	recovery_sent_at: z.string().optional(),
	email_change_sent_at: z.string().optional(),
	new_email: z.string().optional(),
	new_phone: z.string().optional(),
	invited_at: z.string().optional(),
	action_link: z.string().optional(),
	email: z.string().optional(),
	phone: z.string().optional(),
	created_at: z.string(),
	confirmed_at: z.string().optional(),
	email_confirmed_at: z.string().optional(),
	phone_confirmed_at: z.string().optional(),
	last_sign_in_at: z.string().optional(),
	role: z.string().optional(),
	updated_at: z.string().optional(),
	identities: z
		.object({
			id: z.string(),
			user_id: z.string(),
			identity_id: z.string(),
			provider: z.string(),
			identity_data: z.object({}).optional(),
			created_at: z.string().optional(),
			last_sign_in_at: z.string().optional(),
			updated_at: z.string().optional(),
		})
		.optional(),
	is_anonymous: z.boolean().optional(),
	factors: z
		.object({
			id: z.string(),
			factor_type: z.literal('totp'),
			status: z.enum(['verified', 'unverified']),
			created_at: z.string(),
			updated_at: z.string(),
			friendly_name: z.string().optional(),
		})
		.optional(),
});
