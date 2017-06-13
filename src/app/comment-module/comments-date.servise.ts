import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { News } from "../news-module/news.servise";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import  _ from 'lodash';
import { Comments } from "./comments.servise";
@Injectable()
export class CommentsServise{
    private url = "http://api.test.dev/";
    constructor(private http: Http){}

    public getComments(id:number):any {
        let comnt = this.http.get(this.url+"comments/"+ id)
            .map(this.extractComments);
        return comnt;
    }
    public addComment(addcomment:Comments, id:number){
        return this.post(this.url+"comments/" + id , addcomment);
    }
    public  deleteComment(id){
        return this.post(this.url+'comments-remove/'+ id);
    }

    private extractComments (response:Response){
        let res = response.json().comments;
        let comments : Comments[] = [];
        if (res) {
            for (let i = 0; i < res.length; i++) {
                comments.push(new Comments(res[i].id, res[i].name, res[i].text, res[i].date, res[i].news_id));
            }
        }
        return comments;
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
