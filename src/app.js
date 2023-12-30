// Will get all the <a> element and console.log() on a click event
let allLinks = document.querySelectorAll('a');
let clickEvent = () => {
    console.log('Clicked!!')
}
allLinks.forEach((elm) => {
    elm.addEventListener('click', clickEvent);
});
