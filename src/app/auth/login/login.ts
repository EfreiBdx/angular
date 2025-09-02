import { Component } from '@angular/core';
import { ICredential } from '../../_interfaces/credential';
import { Auth } from '../../_services/auth';
import { Token } from '../../_services/token';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  form: ICredential = {
    email: '',
    password: ''
  }

  constructor(
    private authService: Auth,
    private tokenService: Token
  ){}

  onSubmit(): void{
    console.log(this.form)
    this.authService.login(this.form).subscribe(
      data => {
        console.log(data.access_token)
        this.tokenService.saveToken(data.access_token)
      },
      err => console.log(err)
    )
  }
}
