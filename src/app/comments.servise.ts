export class Comments {
    id: number;
    name:string;
    text: string;
    date: Date;
    news_id: number;

    constructor(id, name, text, date, news_id ){
        this.id = id;
        this.name = name;
        this.text = text;
        this.date = date;
        this.news_id = news_id;
    }
}