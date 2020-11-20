$(function(){
    $("a[href^='#About']").click(function()
    {
    let header = document.querySelector('.header')
    let news = document.querySelector('.News')
    let footer = document.querySelector('.footer')
    let albums = document.querySelector('.albums')
    let about = document.querySelector('.About')
    header.style.display = "none";
    footer.style.display = "none";
    albums.style.display = "none";
    news.style.display = "none";
    about.style.display = "block";
    });
});