import {VideoId} from "./video-id";
import {VideoSnippet} from "./video-snippet";

export class Video {
    constructor(public id: VideoId,
                public snippet: VideoSnippet){}
}
