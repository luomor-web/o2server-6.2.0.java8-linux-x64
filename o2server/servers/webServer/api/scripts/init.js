function isIE() { //ie?
    if (!!window.ActiveXObject || "ActiveXObject" in window)
        return true;
    else
        return false;
}

function processIE() {
    var body = document.getElementsByTagName("body");
    body[0].innerHTML = "<div style='margin: 20px auto;font-size: 18px;'>抱歉，本文档不支持IE，请使用Chrome、Firefox、Edge、Safari、Opera等现代浏览器打开。</div>"
}

function showNavi(){
    //by default all submenut items are hidden
    //but we need to rehide them for search
    // document.querySelectorAll("nav > ul > ul > ul.nav-sub-content").forEach(function(parent) {
    //     parent.style.display = "none";
    // });

    //only current page (if it exists) should be opened
    var file = window.location.pathname.split("/").pop().replace(/\.html/, '');
    document.querySelectorAll("nav > ul span.is-class > a, nav > ul span.is-module > a").forEach(function(parent) {
        var href = parent.attributes.href.value.replace(/\.html/, '');
        if (file === href) {
            if( !window.location.hash ){
                window.location.hash = href;
            }
            document.querySelectorAll("nav > ul.nav-sub-content").forEach(function(elem) {
                parent.parentNode.parentNode.parentNode.appendChild(elem)
            });
            // parent.parentNode.parentNode.parentNode.querySelectorAll("ul.nav-sub-content").forEach(function(elem) {
            //     elem.style.display = "block";
            // });
        }
    });
}

function load() {
    if( isIE() ){
        processIE();
    }else{
        showNavi();
    }
}

load();

