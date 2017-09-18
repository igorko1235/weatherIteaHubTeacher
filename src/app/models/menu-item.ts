export class MenuItem {
  link: string;
  title: string;
  activeClass: string;
  constructor(link: string, title: string, activeClass: string) {
    this.link = link;
    this.title = title;
    this.activeClass = activeClass;
  }
}
