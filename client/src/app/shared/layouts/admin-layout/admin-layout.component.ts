import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  links = [
    {url: '/manage/users', name: 'Пользователи'},
    {url: '/manage/institutions', name: 'Учреждения'},
    {url: '/manage/pictures', name: 'Пиктограммы'}
  ]

  constructor(
    private auth: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logout(event: Event) {
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/login'])
  }


}
