import dashboard from "./views/Dashboard.js";
import setting from "./views/setting.js";
import post from "./views/post.js";


const navigateTo =url=>{
    history.pushState(null,null,url);
    router();
}


const router = async ()=> {
    const routes = [
        { path: "/", view: dashboard},
        { path: "/post",view:post},
        { path: "/setting", view: setting},
    ];


    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname===route.path
        };
    });
  


    let match =potentialMatches.find(potentialMatches=>potentialMatches.isMatch)
    if(!match){
        match={
            route: routes[0],
            isMatch:true
        }
    }


    const view = match.route.view;
    document.querySelector("#app").innerHTML = await view.getHtml()
    
}


window.addEventListener("popstate",router)


document.addEventListener("DOMContentLoaded",()=>{
    document.addEventListener('click',e=>{
        if(e.target.matches("[data-link]"))
        {
            e.preventDefault();
            navigateTo(e.target.href )
        }
    })
    router();
})
