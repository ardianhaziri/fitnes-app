// convex/getRandomUsers.ts
import { query } from "./_generated/server";

export const getRandomUsers = query({
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();
    if (users.length === 0) return [];

    // Shuffle and return up to 3
    return users.sort(() => 0.5 - Math.random()).slice(0, 3);
  },
});
