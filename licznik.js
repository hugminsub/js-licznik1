let suma = 5 
document.getElementById("wynik").value = suma
document.getElementById("plus").addEventListener("click", function(){
	suma +=1;	
	document.getElementById("wynik").value = suma

})
document.getElementById("minus").addEventListener("click", function(){
	suma -=1;
	document.getElementById("wynik").value = suma
})
document.getElementById("reset").addEventListener("click", function(){
	suma = 0
	document.getElementById("wynik").value = suma
})
