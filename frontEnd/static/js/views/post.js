import abstractViews from "./abstractViews.js";


export default class extends abstractViews{
 constructor(){
   super();
    this.setTitle("postd");
 }   
 async getHtml(){
    return `
   <h1> you are post page</h1>
    `;
 }
}