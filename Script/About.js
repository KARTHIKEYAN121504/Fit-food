function searchSite() {
const query = document.getElementById("searchBar").value;
if(query) {
alert("Searching for: " + query);
// You can add real search logic here
} else {
alert("Please enter a search term.");
}
}