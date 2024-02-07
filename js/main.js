function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Oynani chiroyli bo'lishi uchun
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
var modal = document.getElementById('myModal');

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

// Oynani chiroyli bo'lishi uchun
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
document.addEventListener('contextmenu', function (p) {
    p.preventDefault();
    alert("Ko'd ni ko'chirma o'zing yoz ");
});


