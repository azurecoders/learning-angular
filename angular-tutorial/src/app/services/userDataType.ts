export interface UsersAPIResponse {
  users: User[];
}

export interface User {
  id?: number;
  name: string;
  age: number;
  email: string;
}
