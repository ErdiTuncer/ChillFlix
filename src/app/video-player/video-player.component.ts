import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  player: YT.Player;
  private id = 'KQZOQ--i87A';

  constructor() { }

  ngOnInit() {
  }

  savePlayer(player) {
    this.player = player;
    console.log('Video Url', player);
  }
  playBtn(){
    if (this.player !== undefined){
      this.player.playVideo();
    }
  }
  breakBtn(){
    if (this.player !== undefined){
      this.player.pauseVideo();
    }
  }

  onStateChange(event) {
    console.log('player state', event.data);
  }

}
