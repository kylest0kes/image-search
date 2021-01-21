const serachBtn = document.getElementById('search-btn');

serachBtn.addEventListener('click', searchImgs);

$('form').submit((e) => {
    e.preventDefault();
    searchImgs();
});

function searchImgs() {
    console.log('click works');
}