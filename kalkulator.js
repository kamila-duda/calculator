var a = '';
var znacznik = "";
var b = '';

function kursor ()
{
var t = document.getElementById("wynik");
t.selectionStart = t.selectionEnd = 0; t.focus();
}

function pierwszaLiczba(x)
{
	if (znacznik == "")
	{
	a = a+x;
	document.getElementById("wynik").value=a;
	}
	else{
	b = b + x;
	document.getElementById("wynik").value=a+znacznik+b;
	}
	
}

function dzialanie(x)
{
	znacznik = x;
	
	document.getElementById("wynik").value= a + x;
}


function oblicz()
{
	var wynik = 0;
	var liczbaA = parseFloat(a);
	var liczbaB = parseFloat(b);
	if (b == "") {
	wynik = "niepoprawne działanie";
	document.getElementById("wynik").value= wynik;
	}
	else if (liczbaB == 0 && znacznik == '\\') {
	wynik="nie dzieli się przez 0!";
	document.getElementById("wynik").value= wynik;
	}
	else {
	if (znacznik == '+') wynik = liczbaA + liczbaB;
	else if (znacznik == '-') wynik = liczbaA - liczbaB;
	else if (znacznik == 'x') wynik = liczbaA * liczbaB;
	
	else if (znacznik == '\\') wynik = liczbaA / liczbaB;
	document.getElementById("wynik").value=a + znacznik + b + "=" + wynik;
	}
	
	a = "";
	b = "";
	znacznik = "";
}

function reset()
{
	a = "";
	b = "";
	znacznik = "";
	document.getElementById("wynik").value="";
}
