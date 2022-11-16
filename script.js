
let headerLogo = document.getElementById('header__logo'),
    lightButton = document.getElementById('light'),
    temperatetButton = document.getElementById('temperate'),
    darkButton = document.getElementById('dark'),
    mainTitle = document.getElementById('main__title'),
    mainDesc = document.getElementById('main__desc'),
    footerTitle = document.getElementById('footer__title'),
    bodyColor = document.body;


//change theme on light
    lightButton.onclick = function() {
        bodyColor.style = "background-color: white; transition: 1s"; 
        headerLogo.style = "color: black; transition: 2s";
        lightButton.style = "color: black; transition: 2s";
        temperatetButton.style = "color: black; transition: 2s";
        darkButton.style = "color: black; transition: 2s";
        mainTitle.style = "color: rgb(0, 0, 0); transition: 2s";
        mainDesc.style = "color: rgb(0, 0, 0); transition: 2s";
        footerTitle.style = "color: rgb(0, 0, 0); transition: 2s";
    }
//change theme on temperate
    temperatetButton.onclick = function() {
        bodyColor.style = "background-color: rgb(21,76,121); transition: 1s"; 
        headerLogo.style = "color: white; transition: 2s";
        lightButton.style = "color: white; transition: 2s";
        temperatetButton.style = "color: white; transition: 2s";
        darkButton.style = "color: white; transition: 2s";
        mainTitle.style = "color: rgb(226,135,67); transition: 2s";
        mainDesc.style = "color: rgb(226,135,67); transition: 2s";
        footerTitle.style = "color: rgb(226,135,67); transition: 2s";
    }
//change theme on dark
    darkButton.onclick = function() {
        document.location.reload();
    }





