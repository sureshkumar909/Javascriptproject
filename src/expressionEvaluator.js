function Compute(expr) {
	var num1,
  		num2,
      temp = [],
      noOperation = true;
  
  expr = expr.split(" ");
  for(var i =0; i< expr.length; i++) {
  	if(isNaN(expr[i])) {
    	num2 = temp.pop();
      num1 = temp.pop();
      var x = getComputedValue(expr[i], num1, num2);
      temp.push(x);
      noOperation = false;
    } else {
    	temp.push(expr[i]);
    }
  }
  if(noOperation) {
  	console.log(temp.pop().toString());	
  } else {
		console.log(temp.toString());  
  }
}

function getComputedValue(operation, num1, num2) {
	 num1 = parseFloat(num1);
   num2 = parseFloat(num2);
   switch (operation) {
      case '+':
          return parseFloat(num1 + num2);
      case '-':
          return parseFloat(num1 - num2);
      case '*':
          return parseFloat(num1 * num2);
      case '/':
          return parseFloat(num1 / num2); 
  	}
}
