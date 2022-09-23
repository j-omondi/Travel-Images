const items = document.querySelectorAll(".panel1");
items.forEach(function(item){
    item.addEventListener("click", function() {
        removeActiveClasses();
        item.classList.add("active");
    });
});
function removeActiveClasses() {
    items.forEach(function (item) {
        item.classList.remove("active");
    });
}