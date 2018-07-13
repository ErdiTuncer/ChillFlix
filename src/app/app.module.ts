import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { SecuredLoginComponent } from './secured-login/secured-login.component';
import { SearchVideoComponent } from './search-video/search-video.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    SecuredLoginComponent,
    SearchVideoComponent
  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
