function onleft() {
    document.getElementsByClassName('dogbox')[0].style.width = '5%';
    document.getElementsByClassName('catbox')[0].style.width = '95%';
    document.getElementById('dog').style.display = 'none';
    document.getElementById('cat').style.display = 'block';
}
function both() {
    document.getElementsByClassName('dogbox')[0].style.width = '50%';
    document.getElementsByClassName('catbox')[0].style.width = '50%';
    document.getElementById('dog').style.display = 'block';
    document.getElementById('cat').style.display = 'block';
}
function onright() {
    document.getElementsByClassName('dogbox')[0].style.width = '95%';
    document.getElementsByClassName('catbox')[0].style.width = '5%';
    document.getElementById('dog').style.display = 'block';
    document.getElementById('cat').style.display = 'none';
}