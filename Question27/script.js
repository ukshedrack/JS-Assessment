function multiplyNumeric(obj){
	var valuesArr = Object.keys(obj);
	for (let values of valuesArr){
		let value = obj[values];
		if (typeof(value) == "number"){
			value *= 2; 
			obj[values] = value;
		}
	}
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
console.log(menu);