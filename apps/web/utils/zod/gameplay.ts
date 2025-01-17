import { z } from 'zod';
import { PublicUserSchema } from './dash';
export const GameplayTypes = z.enum([
  'VAL',
  'CSG',
  'TF2',
  'APE',
  'COD',
  'R6S',
  'OW2',
  'CS2',
]);
export const CheatTypes = z.enum([
  'NOCHEAT',
  'AIMBOT',
  'TRIGGERBOT',
  'ESP',
  'SPINBOT',
]);
const GameplayVotes = z.array(
  z.object({
    id: z.string().optional(),
    gameplayId: z.string().optional(),
    userId: z.string().optional(),
    isGame: z.boolean().optional(),
    actualGame: GameplayTypes.optional(),
  }),
);
export const GameplaySchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  youtubeUrl: z.string().url(),
  gameplayType: GameplayTypes,
  isAnalyzed: z.boolean(),
  cheats: z.array(CheatTypes),
});

export const GameplaysDashSchema = z.object({
  id: z.string().cuid(),
  userId: z.string().cuid(),
  youtubeUrl: z.string().url(),
  gameplayType: GameplayTypes,
  cheats: z.array(CheatTypes),
  isAnalyzed: z.boolean(),
  user: z.object({
    name: z.string().nullable(),
  }),
  gameplayCount: z.number().optional(),
});

export const ReviewItemsGameplaySchema = GameplaySchema.merge(
  z.object({
    user: PublicUserSchema,
    gameplayVotes: GameplayVotes,
    _count: z.object({ gameplayVotes: z.number() }),
    total: z.number(),
  }),
);

export type GameplayType = z.infer<typeof GameplayTypes>;
export type GameplayTypeWithNull = GameplayType | null;
