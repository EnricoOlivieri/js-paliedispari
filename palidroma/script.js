function isPalindroma(inputString){
	var arrChars = inputString.split("");
	arrChars.reverse();
	var invertedString = arrChars.join("");

	var palindroma = false;
	if(inputString === invertedString){
		palindroma = true;
	}

	return palindroma;
}

console.log("ciaone", isPalindroma("ciaone")); // false
console.log("anna", isPalindroma("anna")); // true
console.log("i topi non avevano nipoti", isPalindroma("i topi non avevano nipoti")); // true
