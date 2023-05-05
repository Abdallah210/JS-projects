
function ChangePhoto() {

    const mastercard = document.getElementById("mastercard");
    const visa = document.getElementById("visa");
    const paypal = document.getElementById("paypal");
    const other = document.getElementById("other");

    if (mastercard.checked) {
        document.getElementById("image").hidden = false;  
        document.getElementById("image").src = "images/"+mastercard.value.toLowerCase()+".png";  
    } 

    if (visa.checked) {
        document.getElementById("image").hidden = false;  
        document.getElementById("image").src = "images/"+visa.value.toLowerCase()+".png";    
    } 

    if (paypal.checked) {
        document.getElementById("image").hidden = false;  
        document.getElementById("image").src = "images/"+paypal.value.toLowerCase()+".png";  
    } 

    if (other.checked) {
        document.getElementById("image").hidden = true;  
    }

}

