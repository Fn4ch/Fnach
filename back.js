$(function(){
    $("a[href^='#back']").click(function()
    {
    let header = document.querySelector('.header')
    let news = document.querySelector('.News')
    let footer = document.querySelector('.footer')
    let albums = document.querySelector('.albums')
    let about = document.querySelector('.About')
    header.style.display = "flex";
    footer.style.display = "flex";
    albums.style.display = "block";
    news.style.display = "block";
    about.style.display = "none";
    });
});