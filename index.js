function service(){
    document.getElementById("serv").style.display = "grid";
    document.getElementById("abt").style.display = "none";
    document.getElementById("cont").style.display = "none";

    document.getElementById("service").style.backgroundColor = "wheat";
    document.getElementById("about").style.backgroundColor = "darkcyan";
    document.getElementById("contact").style.backgroundColor = "darkcyan";

    document.getElementById("service").style.color = "darkcyan";
    document.getElementById("about").style.color = "ghostwhite";
    document.getElementById("contact").style.color = "ghostwhite";
    if(window.screen.width<768){
        document.getElementById("resToggle").style.display = "block";
        document.getElementById("nav_contact").style.display = "none";
        document.getElementById("nav_button").style.display = "none";

    }

}

function about(){
    document.getElementById("serv").style.display = "none";
    document.getElementById("abt").style.display = "block";
    document.getElementById("cont").style.display = "none";

    document.getElementById("service").style.backgroundColor = "darkcyan";
    document.getElementById("about").style.backgroundColor = "wheat";
    document.getElementById("contact").style.backgroundColor = "darkcyan";

    document.getElementById("service").style.color = "ghostwhite";
    document.getElementById("about").style.color = "darkcyan";
    document.getElementById("contact").style.color = "ghostwhite"; 
    
    if(window.screen.width<768){
        document.getElementById("resToggle").style.display = "block";
        document.getElementById("nav_contact").style.display = "none";
        document.getElementById("nav_button").style.display = "none";

    }
}

function contact(){
    document.getElementById("serv").style.display = "none";
    document.getElementById("abt").style.display = "none";
    document.getElementById("cont").style.display = "block";

    document.getElementById("service").style.backgroundColor = "darkcyan";
    document.getElementById("about").style.backgroundColor = "darkcyan";
    document.getElementById("contact").style.backgroundColor = "wheat";

    document.getElementById("service").style.color = "ghostwhite";
    document.getElementById("about").style.color = "ghostwhite";
    document.getElementById("contact").style.color = "darkcyan";

    if(window.screen.width<768){
        document.getElementById("resToggle").style.display = "block";
        document.getElementById("nav_contact").style.display = "none";
        document.getElementById("nav_button").style.display = "none";

    }
}
function showToggle(){
    document.getElementById("nav_contact").style.display = "flex";
    document.getElementById("nav_button").style.display = "grid";
    document.getElementById("resToggle").style.display = "none";
}
function submit(){
    var name = document.getElementById("name").value;
    var num = document.getElementById("num").value;
    var mail = document.getElementById("mail").value;
    var services = document.getElementById("services").value;
    name = name.replace(/\s/g,"%20");
    
    var url = "https://wa.me/+919096823991?text="+name+"%0a"+mail+"%0a"+num+"%0a"+services;
    window.open(url,"_blank");
}