import {Component, Input, OnInit} from '@angular/core';
import {YoutubeResult} from "../../model/youtube-result";

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {

  @Input() results: YoutubeResult;

  constructor() { }

  ngOnInit() {
  }

}
