export type User = {
    _id: string;
    fullname: string;
    email: string;
    password: string;
    role: number
  };
  
  export type UserResponse = {
    total: number;
    page: number;
    limit: number;
    data: User[];
  };