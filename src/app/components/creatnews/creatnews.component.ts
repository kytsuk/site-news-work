import { Component, OnInit } from '@angular/core';
import { News } from "../../news.servise";

import { NewsServise } from "../../news-date.servise";
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-creatnews',
  templateUrl: './creatnews.component.html',
  styleUrls: ['./creatnews.component.css']
})
export class CreatnewsComponent implements OnInit {

  myForm: FormGroup;

  constructor(private dataNews: NewsServise) {
  }

  ngOnInit() {

    this.myForm = new FormGroup({
      title: new FormControl('', Validators.required),
      date: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
      img_url: new FormControl('', Validators.required)
    });

  }


  public  onsubmit(myForm: FormGroup) {

    let item = new  News(null,null, null, null, null);
    item.title = myForm.value.title;
    item.date = myForm.value.date;
    item.text = myForm.value.text;
    item.img_url = myForm.value.img_url;
    console.log(item);
    this.dataNews.addNews(item);
  }

}