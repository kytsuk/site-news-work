import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { News } from "./news.servise";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import  _ from 'lodash';
@Injectable()
export class NewsServise{
private url = "http://api.test.dev/";
constructor(private http: Http){}

   public getNews():any {
        let news = this.http.get(this.url+"news")
            .map(this.extractNews);
        return news;
    }
    public getNew(id:number):any {
        let onenews = this.http.get(this.url+"news" + "/" +id)
            .map(this.extractNew);
        return onenews;
    }

    public addNews(addnews:News){
    return this.post(this.url+"news" , addnews).subscribe(res=>res);
    }

    public  deleteNews(id){
        return this.post(this.url+'news-remove/'+ id);
    }
    public editNews(id, editnews:News){
        return this.post(this.url+"news/"+ id, editnews).subscribe(res=>res);
    }

    private extractNews (response:Response){
    let res = response.json().news;
    let news : News[] = [];
    for (let i = 0; i<res.length; i++){
        news.push(new News(res[i].id, res[i].title, res[i].text,res[i].date,res[i].img_url));
    }
    return news;
    }
    private extractNew (response:Response){
        let res = response.json().news;
        let news = (new News(res.id, res.title, res.text,res.date,res.img_url));

        return news;
    }

    post(url: string, paramsObj?: Object): Observable<any> {
        let params = new URLSearchParams(),
            headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        // Request params
        if (paramsObj && !_.isEmpty(paramsObj)) {
            _.forEach(paramsObj, (val, key) => params.set(key, val));
        }
        return this.http.post(url, params.toString(), {headers: headers})
            .map(res => res)
            .catch(res=>res);
    }



}
