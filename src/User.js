export default class User {
  constructor(hit) {
    this.username = hit.username;
    this.about = hit.about;
    this.karma = hit.karma;
    this.avatarUrl = `https://avatars.dicebear.com/api/avataaars/${this.username}.svg?scale=120&flip=1`;
  }
}
