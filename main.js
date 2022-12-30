const sectionOne = document.querySelector(".section1");
const sectionTwo = document.querySelector(".section2");
const sectionThree = document.querySelector(".section3");
const priceOne = document.querySelector(".price1");
const priceTwo = document.querySelector(".price2");
const priceThree = document.querySelector(".price3");
const moreInfoButtonOne = document.querySelector(".more-info1");
const moreInfoButtonTwo = document.querySelector(".more-info2")
const moreInfoButtonThree = document.querySelector(".more-info3")
// const body = document.querySelector("body");
const moreInfoButton = document.querySelectorAll("button");
const section = document.querySelectorAll("section");

function changePrice() {
    const checkInput = document.getElementById("my-check");
    if (checkInput.checked == true) {
        priceOne.innerHTML = "&dollar;199.99";
        priceTwo.innerHTML = "&dollar;249.99";
        priceThree.innerHTML = "&dollar;399.99";
    }
    else {
        priceOne.innerHTML = "&dollar;19.99";
        priceTwo.innerHTML = "&dollar;24.99";
        priceThree.innerHTML = "&dollar;39.99";
    }
}

findMoreOne = () => {
    if (sectionTwo.classList.contains("active") || sectionThree.classList.contains("active") ) {
        sectionOne.classList.add("active");
        moreInfoButtonOne.classList.add("active-more");
        sectionTwo.classList.remove("active");
        moreInfoButtonTwo.classList.remove("active-more");
        sectionThree.classList.remove("active");
        moreInfoButtonThree.classList.remove("active-more");
    }
    else {
    sectionOne.classList.add("active")
    moreInfoButtonOne.classList.add("active-more");
    }
}
findMoreTwo = () => {
    if (sectionOne.classList.contains("active") || sectionThree.classList.contains("active") ) {
        sectionTwo.classList.add("active");
        moreInfoButtonTwo.classList.add("active-more");
        sectionThree.classList.remove("active");
        moreInfoButtonThree.classList.remove("active-more");
        sectionOne.classList.remove("active");
        moreInfoButtonOne.classList.remove("active-more");
    }
    else {
    sectionTwo.classList.add("active")
    moreInfoButtonTwo.classList.add("active-more");
    }
}
findMoreThree = () => {
    if (sectionTwo.classList.contains("active") || sectionOne.classList.contains("active") ) {
        sectionThree.classList.add("active");
        moreInfoButtonThree.classList.add("active-more");
        sectionTwo.classList.remove("active");
        moreInfoButtonTwo.classList.remove("active-more");
        sectionOne.classList.remove("active");
        moreInfoButtonOne.classList.remove("active-more");
    }
    else {
    sectionThree.classList.add("active")
    moreInfoButtonThree.classList.add("active-more");
    }
}


moreInfoButtonOne.addEventListener("click", findMoreOne);
moreInfoButtonTwo.addEventListener('click', findMoreTwo);
moreInfoButtonThree.addEventListener("click", findMoreThree);
