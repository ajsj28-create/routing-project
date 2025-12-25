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

export type UserColor =
    'color1'
  | 'color2'
  | 'color3'
  | 'color4'
;
  
export interface Iuser {
  id: string;
  name: string;
  email: string;
  contact: string;
  department: UserDepartment;
  role: UserRole;
  status: UserStatus;
  joiningDate: number;
  color: UserColor;
  userImage: string;
}

export interface Ires<T> {
  success: boolean
  data: T
  msg: string
}