var salaries = {
  	John: 100,
  	Ann: 160,
  	Pete: 130
};

var salaryArr = Object.values(salaries);
var sum = 0;

for(let salary of salaryArr){
	sum += salary;
}
console.log(sum);