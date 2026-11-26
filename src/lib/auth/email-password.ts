/**
 * Local email/password on this app's Better Auth DB — the same account as the
 * notebook and the exams, not a second registry.
 *
 * On so the course can ask for a name and an email. The signup form requires
 * both; the password is how that same account is opened again. OAuth (Google, X)
 * stays available and still lands in this user table.
 *
 * Do NOT edit `server.ts` for this — that file is frozen pre-wired config.
 */
export const emailAndPasswordEnabled = true;
