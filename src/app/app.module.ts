import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './modules/video-player/video-player.component';
import { SecuredLoginComponent } from './modules/secured-login/secured-login.component';
import { SearchVideoComponent } from './modules/search-video/search-video.component';
import { PlayListComponent } from './modules/play-list/play-list.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {
    GoogleApiModule,
    GoogleApiService,
    GoogleAuthService,
    NgGapiClientConfig,
    NG_GAPI_CONFIG,
    GoogleApiConfig
} from 'ng-gapi';
import { CategoriesComponent } from './modules/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    SecuredLoginComponent,
    SearchVideoComponent,
    PlayListComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule,
    HttpClientModule,
    FormsModule,
    GoogleApiModule.forRoot({
        provide: NG_GAPI_CONFIG,
        useValue: {
            client_id: '401687159558-l8gflpq1gev76m8ba0gtlp6krp1pb8l0.apps.googleusercontent.com',
            discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
            scope: [
                "https://www.googleapis.com/auth/analytics.readonly",
                "https://www.googleapis.com/auth/analytics"
            ].join(" ")
        }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
