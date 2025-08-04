const input = document.querySelector("#bookmarkInput")
const btn = document.querySelector("#addBookmarkBtn")
const list = document.querySelector("#bookmarkList")

input.addEventListener("input", () => {
    console.log(input.value);
})
btn.addEventListener("click", () => {
    localStorage.setItem("bookmarkList", input.value);
})

const savedSettings = localStorage.getItem("bookmarkList")

console.log(savedSettings);

localStorage.removeItem("[object HTMLUListElement]");


localStorage.clear();










































