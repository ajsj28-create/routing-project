import { Injectable } from '@angular/core';
import { Iuser, Ires } from '../models/users';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  refreshDash$: Subject<boolean> = new Subject()

  usersArray: Array<Iuser> = [
    {
      id: '101',
      name: 'Ankit Sharma',
      email: 'ankit.sharma@gmail.com',
      contact: '9876543210',
      department: 'IT',
      role: 'Admin',
      status: 'active',
      joiningDate: '2022-04-15',
      color: 'color1',
      userImage: 'https://picsum.photos/seed/user101/200/200'
    },
    {
      id: '102',
      name: 'Priya Verma',
      email: 'priya.verma@gmail.com',
      contact: '9823456712',
      department: 'Marketing',
      role: 'Editor',
      status: 'active',
      joiningDate: '2021-08-10',
      color: 'color2',
      userImage: 'https://picsum.photos/seed/user102/200/200'
    },
    {
      id: '103',
      name: 'Rahul Mehta',
      email: 'rahul.mehta@gmail.com',
      contact: '9765432189',
      department: 'Finance',
      role: 'Viewer',
      status: 'inactive',
      joiningDate: '2020-01-05',
      color: 'color3',
      userImage: 'https://picsum.photos/seed/user103/200/200'
    },
    {
      id: '104',
      name: 'Sneha Kulkarni',
      email: 'sneha.k@gmail.com',
      contact: '9898765432',
      department: 'HR',
      role: 'Editor',
      status: 'active',
      joiningDate: '2023-02-20',
      color: 'color4',
      userImage: 'https://picsum.photos/seed/user104/200/200'
    },
    {
      id: '105',
      name: 'Amit Patil',
      email: 'amit.patil@gmail.com',
      contact: '9911223344',
      department: 'Operations',
      role: 'Viewer',
      status: 'active',
      joiningDate: '2019-11-12',
      color: 'color1',
      userImage: 'https://picsum.photos/seed/user105/200/200'
    },
    {
      id: '106',
      name: 'Neha Joshi',
      email: 'neha.joshi@gmail.com',
      contact: '9833445566',
      department: 'IT',
      role: 'Admin',
      status: 'active',
      joiningDate: '2022-07-01',
      color: 'color2',
      userImage: 'https://picsum.photos/seed/user106/200/200'
    },
    {
      id: '107',
      name: 'Kunal Deshpande',
      email: 'kunal.d@gmail.com',
      contact: '9744556677',
      department: 'Sales',
      role: 'Viewer',
      status: 'inactive',
      joiningDate: '2021-03-18',
      color: 'color3',
      userImage: 'https://picsum.photos/seed/user107/200/200'
    },
    {
      id: '108',
      name: 'Pooja Nair',
      email: 'pooja.nair@gmail.com',
      contact: '9812345678',
      department: 'Marketing',
      role: 'Editor',
      status: 'active',
      joiningDate: '2023-09-05',
      color: 'color4',
      userImage: 'https://picsum.photos/seed/user108/200/200'
    }
  ];

  constructor() { }

  fetchAll(): Observable<Ires<Array<Iuser>>> {
    return of({
      success: true,
      data: this.usersArray,
      msg: `All users fetched successfully!`
    })
  }

  fetchSingle(id: string): Observable<Ires<Iuser>> {
    return of({
      success: true,
      data: this.usersArray.find(ele => ele.id === id) as Iuser,
      msg: `User with id ${id} fetched successfully!`
    })    
  }

  postUser(obj: Iuser): Observable<Ires<Iuser>> {
    this.usersArray.push(obj)
    // this.setLocalStorage()
    return of({
      success: true,
      data: obj,
      msg: `User with id ${obj.id} added successfully!`
    }) 
  }

  patchUser(obj: Iuser): Observable<Ires<Iuser>> {
    let ind = this.usersArray.findIndex(ele => ele.id === obj.id)
    this.usersArray[ind] = obj
    // this.setLocalStorage()
    return of({
      success: true,
      data: obj,
      msg: `User with id ${obj.id} updated successfully!`
    }) 
  }

  deleteUser(obj: Iuser) {
    let ind = this.usersArray.findIndex(ele => ele.id === obj.id)
    this.usersArray.splice(ind, 1)
    // this.setLocalStorage()
    return of({
      success: true,
      data: obj,
      msg: `User with id ${obj.id} deleted successfully!`
    })     
  }



  // setLocalStorage() {
  //   localStorage.setItem('usersArray$', JSON.stringify(this.usersArray));
  // }

}
