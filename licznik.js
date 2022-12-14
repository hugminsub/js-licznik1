let suma = 5 
function wyswietl_sume(){
document.getElementById("wynik").value = suma
}
document.getElementById("plus").addEventListener("click", function(){
	suma +=1;	
	wyswietl_sume()
})
document.getElementById("minus").addEventListener("click", function(){
	suma -=1;
	wyswietl_sume()
})
document.getElementById("reset").addEventListener("click", function(){
	suma = 0
	wyswietl_sume()
})
