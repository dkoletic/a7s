import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  login(email: string, password: string) {
    this.loginService.loginUser(email, password)
    .subscribe(
      (data) => {
        if (data.user) {
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', JSON.stringify(data.token_key));
            this.router.navigate(['/dashboard']);
        } else {
          this.snackBar.open('There was an error with your login!', null, {
            duration: 5000,
          });
        }
      },
      error => {
        this.snackBar.open('There was an error with your login!', null, {
          duration: 5000,
        });
      }
    );
  }

}
