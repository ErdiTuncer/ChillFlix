import {Video} from "./video";

export class YoutubeResult {
    constructor(public kind: string,
                public items: Video[]){}
}
