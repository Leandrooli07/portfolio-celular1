const modal = document.querySelector(".modal");
const mascara = document.querySelector(".mascara");

function mostrarModal() {
modal.style.left = '50%'; 
modal.style.transform = 'translate(-50%, -50%)'; 
mascara.style.visibility = 'visible';
}

function esconderModal() {
modal.style.left = '-150%'; 
mascara.style.visibility = 'hidden';
}


document.getElementById("toggleButton").addEventListener("click", 
function() {
	
var info = document.getElementById("info");
    if (info.style.display === "none") {
        info.style.display = "block";
        this.textContent = "SAIBA MENOS";
    } else {
        info.style.display = "none";
        this.textContent = "SAIBA MAIS";
    }
});

document.getElementById("toggleButton").addEventListener("click", 
function() {
	
var info1 = document.getElementById("info1");
    if (info1.style.display === "none") {
        info1.style.display = "block";
        this.textContent = "SAIBA MENOS";
    } else {
        info1.style.display = "none";
        this.textContent = "SAIBA MAIS";
    }
});

