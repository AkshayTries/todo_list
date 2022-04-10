var s;
var n;
var element;
var x;
function dose()
{
	s = document.getElementById("input");
	n = document.createElement("li");
	n.innerHTML = s.value;
	localStorage.name = s.value
	list.appendChild(n);
	s.value="";
	s.focus();
} 

function deletelast()
{
	element=document.getElementById("list");
	x = element.lastElementChild;
	x.remove();

}