import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public isLoggedIn$!: Observable<boolean>;
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.authenticationService.isLoggedIn;
  }
}
