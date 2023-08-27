export const USER_ROLE = {
  ADMIN: "ADMIN",
  USER: "USER",
} as const;

type ObjectValues<T extends Record<string, unknown>> = T[keyof T];

export type UserRole = ObjectValues<typeof USER_ROLE>;
