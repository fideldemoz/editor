const aboutLink = document.querySelector("#about_a");
const supportLink = document.querySelector("#support_a");
const helpLink = document.querySelector("#help_a");
const homeLink = document.querySelector("#home_a");

const partOne = document.querySelector(".main");

const links = [aboutLink, supportLink, helpLink, homeLink];

const moreDiv = document.querySelector("#more");

const firstPage = document.querySelector("#one");
const secondPage = document.querySelector("#two");
const thirdPage = document.querySelector("#three");

links.forEach( (item)  => { 
		item.addEventListener("click", () => {
		  if (item === aboutLink) {
			partOne.style.display = 'none';
			moreDiv.style.display = 'flex';
			firstPage.style.display = 'block';
			secondPage.style.display = 'none';
			thirdPage.style.display = 'none';
		} else if (item === helpLink) {
			partOne.style.display = 'none';
			moreDiv.style.display = 'flex';
			firstPage.style.display = 'none';
			secondPage.style.display = 'block';
			thirdPage.style.display = 'none';
		} else  if (item === supportLink) {
			partOne.style.display = 'none';
			moreDiv.style.display = 'flex';
			firstPage.style.display = 'none';
			secondPage.style.display = 'none';
			thirdPage.style.display = 'block';
		} else if (item === homeLink) {
			partOne.style.display = 'block';
			moreDiv.style.display = 'none';
		}
})});