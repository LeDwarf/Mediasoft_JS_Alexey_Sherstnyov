let a=0;
let b=1;
let op='+';

a=prompt('Введите первое число',1);
op=prompt('Введите операцию','+');
b=prompt('Введите второе число',1);

if(Number.isInteger(+a) && Number.isInteger(+b))
{
	if(op==='+')
	{
		alert('Результат: '+calcPlus(a,b));
	}
	else if(op==='-')
	{
		alert('Результат: '+calcMinus(a,b));
	}
	else if(op==='*')
	{
		alert('Результат: '+calcMult(a,b));
	}
	else if(op==='/')
	{
		if(b != 0){
			alert('Результат: '+calcDiv(a,b));
		}
		else
		{
			alert('На 0 делить нельзя!');
		}
	}
	else 
	{
		alert('Такой операции нет!');
	}
}
else
{
	alert('Допускаются только целые числа');
}

function calcPlus(a,b)
{
	let result = +a + +b;
	return result;
}

function calcMinus(a,b)
{
	let result = +a - +b;
	return result;
}

function calcMult(a,b)
{
	let result = +a * +b;
	return result;
}

function calcDiv(a,b)
{
	let result = +a / +b;
	return result;
}