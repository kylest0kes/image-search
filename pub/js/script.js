// Event listeners
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchImgs();
});

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchImgs();
})



// Flickr search function
function searchImgs() {
    const userSearch = searchInput.value;
    // console.log(userSearch);

    const APIkey = "bevIgf94Ark43ohNfDdIwuO3xgHO1Jl0b1bMiqV4QnM";
    const URL = `https://api.unsplash.com/search/photos?page=1&query=${userSearch}&client_id=${APIkey}`


    if (userSearch.length > 0) {
       $('#search-results').html(`<p id="searched">You searched for "${userSearch.toUpperCase()}":</p>`);

        $.ajax({
            method: 'GET',
            url: URL,
            success: (data) => {
                console.log(data);
                if (data != '') {
                    data.results.forEach(img => {
                       $('#search-results').append(`
                        <img class='result-img' src='${img.urls.regular}' alt='img' />
                       `) 
                    });
                } else {
                    $('#searched').text('No available results');
                }

            }
        })
    } else {
        $('#searched').text('Please enter valid search terms');
    }
}