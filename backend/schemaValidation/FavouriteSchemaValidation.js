import z from 'zod';

const favouritesSchemaValidation = z.object({
  qauteId: z.string(),
  content: z.string(),
  author: z.string(), 
  authorId: z.string(),
  authorSlug: z.string(),

});

export { favouritesSchemaValidation };
