import { Component, inject, OnInit } from '@angular/core';
import { IUser } from '../../../_interfaces/user';
import { User } from '../../../_services/user';

@Component({
  selector: 'app-uindex',
  standalone: false,
  templateUrl: './uindex.html',
  styleUrl: './uindex.css'
})
export class Uindex implements OnInit {
  userList: IUser[] = []
  userService = inject(User)

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: data => {
        console.log(data)
        this.userList = data.data
      },
      error: err => console.log(err)
    })
  }

  trash(cid: number | undefined): void {
    this.userService.trashUser(cid).subscribe({
      next: data => {
        console.log(data)
        this.ngOnInit()
      },
      error: err => console.log(err)
    })
  }

  unTrash(cid: number | undefined): void {
    console.log(cid)
    this.userService.untrashUser(cid).subscribe({
      next: () => {
        this.ngOnInit()
      },
      error: err => console.log(err)
    })
  }

  hardDel(cid: number | undefined): void {
    console.log(cid)
    this.userService.deleteUser(cid).subscribe({
      next: () => {
        this.ngOnInit()
      },
      error: err => console.log(err)
    })
  }
}
