module.exports = {
	createEle: (ele="div",cnt="Hello World") => {
		let temp = document.createElement(ele);
		temp.textContent = cnt;
		return temp;
	}
}