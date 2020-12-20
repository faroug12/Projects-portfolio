const btnScroll=document.querySelector("#btn-scroll");

btnScroll.addEventListener("click", function (){
$("html, body").animate({ scrollTop: 0 }, "slow");
});