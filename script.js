function hostedAway(){
    let confirm = window.confirm("You are about to be redirected! This page is hosted on a different server");

    if(confirm){
        window.alert("Unable to redirect. The host seems to be unavailable at the moment! Sorry for the inconveniences caused.");
    }
}

function goToTop(){
    let topBtn = document.querySelector('.to-top');

    topBtn.addEventListener('click', ()=>{
        window.scrollTo(0,0);
    });
}

goToTop();
