let formItemsOdd = document.querySelectorAll('input:nth-child(odd)');
console.log(formItemsOdd);
for (let i = 0; i < formItemsOdd; i++) {
	formItemsOdd[i].value = "tom";
}
