import { FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pdftest';
  user:any;
  loggedIn: any;

  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    try {
      this.authService.authState.subscribe((user) => {
        this.user = user;
        console.log(this.user);
        
        this.loggedIn = (user != null);
      });
    } catch (error) {
      console.log(error);
      
    }
    
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
