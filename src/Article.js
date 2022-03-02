import Util from "./Util";

export default class Article {
  constructor(hit) {
    this.title = hit.title;
    this.url = hit.url;
    this.date = new Date(Date.parse(hit.created_at)).toDateString();
    this.age = Util.toRelativeTimeStr(new Date() - Date.parse(hit.created_at));
    this.author = hit.author;
    this.points = hit.points;
    this.id = hit.objectID;
    this.commentCount = hit.num_comments ? hit.num_comments : 0;
    this.tags = hit._tags;
  }
}
