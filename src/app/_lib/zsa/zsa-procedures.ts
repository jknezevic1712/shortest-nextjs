import { createServerActionProcedure } from 'zsa';

export const baseProcedure = createServerActionProcedure().handler(() => {
	return {};
});
