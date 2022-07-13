export interface User {
  id?: string;
  username: string;
  password: string | null;
  type: string | number;
}