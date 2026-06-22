export type UserRole = 'admin' | 'client';

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  role?: UserRole;
}
