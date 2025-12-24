export type UserRole = 'Admin' | 'Editor' | 'Viewer';

export type UserStatus = 'active' | 'inactive';

export type UserDepartment =
    'IT'
  | 'Marketing'
  | 'Finance'
  | 'HR'
  | 'Operations'
  | 'Sales'
;
  
export interface IUser {
  id: string;
  name: string;
  email: string;
  contact: string;
  department: UserDepartment;
  role: UserRole;
  status: UserStatus;
  userImage: string;
}

export interface Ires<T> {
  success: boolean
  data: T
  msg: string
}