import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {YoutubeResult} from '../../model/youtube-result';
import {YoutubeAPIService} from '../../services/youtube-api.service';

@Component({
  selector: 'app-search-video',
  templateUrl: './search-video.component.html',
  styleUrls: ['./search-video.component.css'],
  providers: [ YoutubeAPIService ]
})
export class SearchVideoComponent implements OnInit {

  searchString = '';
  youtuberesults: YoutubeResult = new YoutubeResult('', []);
  @Output() selected = new EventEmitter();

  constructor(private youtubeAPIService: YoutubeAPIService) { }

  ngOnInit() {
  }

  search() {
      this.youtubeAPIService.getData(this.searchString).subscribe(result => {
            this.youtuberesults = result;
          // console.log(result.items[0].id.videoId);
          // console.log(result.items[0].snippet.title);
          // console.log(result.items[0].snippet.thumbnails.medium.url);
          // console.log(result.items[1].id.videoId);
          // console.log(result.items[1].snippet.title);
          // console.log(result.items[1].snippet.thumbnails.medium.url);
      });
  }

}
