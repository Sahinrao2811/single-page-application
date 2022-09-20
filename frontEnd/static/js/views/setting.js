import abstractViews from "./abstractViews.js";


export default class extends abstractViews{
 constructor(){
   super();
    this.setTitle("Setting");
 }   
 async getHtml(){
    return `
    <h1> Welcome to setting page</h1>
    <p>a distinct section of a piece of writing, usually dealing with a single theme and indicated by a new line, indentation, or numbering:</p>
    <p>
    <a href="/posts" data-link>View recnt post</a>
    </p>
    `;
 }
}