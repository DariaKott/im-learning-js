const image = document.getElementById('elem-img');
console.log(image);
function backImage() {
    image.src = '/gallery/images/first-photo.jpeg';
}
function forwardImage() {
    image.src = '/gallery/images/photo2.jpeg';
}