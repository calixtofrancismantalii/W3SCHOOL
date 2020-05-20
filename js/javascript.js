//alter logo onmouseover
function altersrc(){
    document.getElementById("w3school").src = "images/green.png"; 
}
function revertsrc(){
    document.getElementById("w3school").src = "images/W3Schools_logo.png";
}



//show and hide more

function showhidemore(){
    var more, btnmore, downmore, upmore, excercises, btnexercises, upexercises, downexercises;
    more = document.getElementById("more");
    btnmore = document.getElementById("btnmore");
    downmore  = document.getElementById("downmore");
    upmore = document.getElementById("upmore");
    excercises = document.getElementById("excercises");
    btnexercises = document.getElementById("btnexercises");
    upexercises = document.getElementById("upexercises");
    downexercises = document.getElementById("downexercises");

    if(more.style.display === "none"){
        more.style.display = "flex";
        btnmore.style.backgroundColor = "black";
        downmore.style.display = "none";
        upmore.style.display = "";
        excercises.style.display = "none";
        btnexercises.style.backgroundColor = "inherit";
        upexercises.style.display = "none";
        downexercises.style.display = "";
    }
    else{
        more.style.display = "none";
        btnmore.style.backgroundColor = "inherit";
        downmore.style.display = "";
        upmore.style.display = "none";
    }
}




// show and hide

function showhideexcercises(){
    var excercises, btnexercises, downexercises, upexercises, more, btnmore, upmore, downmore;
    excercises = document.getElementById("excercises");
    btnexercises = document.getElementById("btnexercises");
    downexercises = document.getElementById("downexercises");
    upexercises = document.getElementById("upexercises");
    more = document.getElementById("more");
    btnmore = document.getElementById("btnmore");
    upmore = document.getElementById("upmore");
    downmore = document.getElementById("downmore");

    if(excercises.style.display === "none"){
        excercises.style.display = "flex";
        btnexercises.style.backgroundColor = "black";
        downexercises.style.display = "none";
        upexercises.style.display = "";
        more.style.display = "none";
        btnmore.style.backgroundColor = "inherit";
        upmore.style.display = "none";
        downmore.style.display = "";
    }
    else{
        excercises.style.display = "none";
        btnexercises.style.backgroundColor = "inherit";
        downexercises.style.display = "";
        upexercises.style.display = "none";
    }
}




//media query toggle section

function toggles(){
    var aside, toggle, more, btnmore, upmore, downmore, excercises, btnexercises, upexercises, downexercises;
    aside = document.getElementById("aside");
    toggle = document.getElementById("toggle");
    more = document.getElementById("more");
    btnmore = document.getElementById("btnmore");
    upmore = document.getElementById("upmore");
    downmore =document.getElementById("downmore");
    excercises = document.getElementById("excercises");
    btnexercises = document.getElementById("btnexercises");
    upexercises = document.getElementById("upexercises");
    downexercises = document.getElementById("downexercises");
    section = document.getElementById("sec");

    if(aside.style.display === "none"){
        aside.style.display = "block";
        toggle.style.backgroundColor = "black";
        more.style.display = "none";
        btnmore.style.backgroundColor = "inherit";
        upmore.style.display = "none";
        downmore.style.display = "";
        excercises.style.display = "none";
        btnexercises.style.backgroundColor = "inherit";
        upexercises.style.display = "none";
        downexercises.style.display = "";
    }
    else{
        aside.style.display = "none";
        toggle.style.backgroundColor = "inherit";
        more.style.display = "";
        btnmore.style.display = "black";
        excercises.style.display = "black";
        upexercises.style.display = "iherit";
    }
}







































////script for active btnmore
//
//function activemore(){
//    var btnmore, more;
//    btnmore = document.getElementById("btnmore");
//    more = document.getElementById("more");
//    if(more.style.display === "flex"){
//        btnmore.style.backgroundColor = "black";
//    }
//    else{
//        btnmore.style.backgroundColor = "inherit";
//    }
//}
//
////script for dropdowncontent more show
//
//function showhide(){
//    var click, downmore, upmore;
//    click = document.getElementById("more");
//    downmore = document.getElementById("downmore");
//    upmore = document.getElementById("upmore");
//
//    if(click.style.display === "none"){
//        click.style.display = "flex";
//        downmore.style.display = "none";
//        upmore.style.display = "";
//    }
//    else{
//        click.style.display = "none";
//        upmore.style.display = "none";
//        downmore.style.display = "inherit";
//    }
//}
//
//
//
////script for active btnexcercises
//
//function activeexercises(){
//    var btnexercises, excercises, upmore, downmore;
//    btnexercises = document.getElementById("btnexercises");
//    excercises = document.getElementById("excercises");
//    upmore = document.getElementById("upmore");
//    downmore = document.getElementById("downmore");
//    if(excercises.style.display === "flex"){
//        btnexercises.style.backgroundColor = "black";
//        upmore.style.display = "none";
//        downmore.style.display = "inherit";
//
//    }
//    else{
//        btnexercises.style.backgroundColor = "inherit";
//    }
//}
//
////script for dropdowncontent exercises show
//
//function hideshow(){
//    var click, downexercises, upexercises;
//    click = document.getElementById("excercises");
//    downexercises = document.getElementById("downexercises");
//    upexercises = document.getElementById("upexercises");
//    if(click.style.display === "none"){
//        click.style.display = "flex";
//        downexercises.style.display = "none";
//        upexercises.style.display = "";
//    }
//    else{
//        click.style.display = "none";
//        upexercises.style.display = "none";
//        downexercises.style.display = "";
//    }
//}
//
//
////close exercises if more is active
//function closeexercises(){
//    var a, b, btnexercises;
//    a = document.getElementById("more");
//    b = document.getElementById("excercises");
//    btnexercises = document.getElementById("btnexercises");
//    if(a.style.display === "flex"){
//        b.style.display = "none";
//        btnexercises.style.backgroundColor = "inherit";
//    }
//}
//
//
//
////close more if exercises is active
//function closemore(){
//    var excercises, more, btnmore;
//    excercises = document.getElementById("excercises");
//    more = document.getElementById("more");
//    btnmore = document.getElementById("btnmore");
//    if(excercises.style.display === "flex"){
//        more.style.display = "none";
//        btnmore.style.backgroundColor = "inherit";
//    }
//}
//
//
//
//
//
//
//
////script to show sidenav for toggle in  media query
// function toggle(){
//     var toggle, sidenav;
//     toggle = document.getElementById("toggle");
//     sidenav = document.getElementById("sidenav");
//     if(sidenav.style.display === "none"){
//         sidenav.style.display = "block";
//         toggle.style.backgroundColor = "black";
//     }
//     else{
//         sidenav.style.display = "none";
//         toggle.style.backgroundColor = "inherit";
//     }
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
