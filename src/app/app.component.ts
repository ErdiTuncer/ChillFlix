import { Component } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi';
import { UserService } from './services/user-service.service';
import { GoogleApiService } from 'ng-gapi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, GoogleApiService, GoogleAuthService]
})
export class AppComponent {
  title = 'app';
  videoId: string;

  constructor(private userService: UserService,
              private authService: GoogleAuthService,
              private gapiService: GoogleApiService) {
      // First make sure gapi is loaded can be in AppInitilizer
      this.gapiService.onLoad().subscribe();
  }

  public isLoggedIn(): boolean {
      return this.userService.isUserSignedIn();
  }

  public signIn() {
      //this.userService.signIn();
      this.authService.getAuth().subscribe((auth) => {
          if (auth.isSignedIn.get()) {
              console.log(auth.currentUser.get().getBasicProfile())
          }else {
              auth.signIn().then((response) => {
                  console.log(response.getBasicProfile());
              })
          }

      })
  }

  public printsomething(payload) {
      console.log(payload);
  }
}
