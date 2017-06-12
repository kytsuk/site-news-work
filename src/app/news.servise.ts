
export class News {
    id: number;
    title:string;
    text: string;
    date: Date;
    img_url: string;

    constructor(id, title, text, date, img_url ){
        this.id = id;
        this.title = title;
        this.text = text;
        this.date = date;
        this.img_url = img_url;
    }
}