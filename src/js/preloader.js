document.body.onload = function () {
    var preloader = document.getElementById('preloader');
    if (!preloader.classList.contains('disable')) {
        preloader.classList.add('disable');
    }
}