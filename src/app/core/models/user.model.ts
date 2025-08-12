export type UserRole = 'Team Member' | 'Team Lead';
export interface User {
  id: string;
  name: string;
  role: UserRole;
}
