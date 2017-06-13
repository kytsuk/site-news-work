import { Component, OnInit } from '@angular/core';
import { NewsServise } from "../news-date.servise";
import { News } from "../news.servise";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
   public post:News[];
  constructor(private newsdate: NewsServise) { }

  ngOnInit() {
    this.getNews()
  }
    refresh(){
      this.getNews();
    }
private getNews(){
    this.newsdate.getNews().subscribe(
       data => this.post = data
    );
}
}
