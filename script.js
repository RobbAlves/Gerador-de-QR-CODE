const wrapper =document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn =wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Generating Qr Code..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=%24=${qrValue}`;
    qrImg.addEventListener("load", () => {
        generateBtn.innerText = "Generate Qr Code"
        wrapper.classList.add("active");
    });
   
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
});