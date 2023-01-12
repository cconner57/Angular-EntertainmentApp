import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  currentRoute = '/home';

  constructor(private router: Router) {}
  
  changeRoute(path: string) {
    this.currentRoute = path;
    this.router.navigate([path]);
  }
  
}
