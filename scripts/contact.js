// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

var SUBMITBUTTON = document.getElementById("submit-button");
var contact = document.getElementById("contact-page");
function thankyou() {
    contact.innerHTML = '';
    const output = document.createElement("p");
    output.innerHTML = "Thank you for your message!";
    output.style.fontSize = '24px';
    contact.append(output);
}
SUBMITBUTTON.addEventListener("click", thankyou);