const form = document.querySelector('form');
const btn = document.querySelector('.btn');

    btn.addEventListener('click', function(event){
        event.preventDefault();
        const isValidName = handleFullName();
        const isvalidEmail = handleEmail()
        const isValidMessage = handleMessage();

        if(isValidName && isvalidEmail && isValidMessage){
            const formData = new FormData(form)
            console.log('FormData contents:');
            for (let [key, value] of formData.entries()) {
                console.log(key, ':', value);
            }
            async function submitForm(){
                try{
                    const response = await fetch('./php/contact.php',{
                        method: 'POST',
                        body: formData
                    })
                    const result = await response.json();
                    console.log(result);
                    if(result.success){
                        window.location.href = "./page/table.html";
                    }
                }catch(error){
                    console.error('Error:', error);
                }
            }
            submitForm()
            
        }
    })

function handleFullName(){
    const fullName = form.fullName.value.trim();
    const errorName = document.querySelector('.errorName');
    const namePattern = /^[a-zA-Z\s]{3,}$/;

    errorName.style.fontSize = "1rem";
    errorName.style.fontWeight = "800";
    errorName.style.marginTop = "0.2rem";
    errorName.style.color = 'red';
    
    if(fullName === ''){
        errorName.textContent =  "Please enter your full name please.";
        return false;
    }else if(!namePattern.test(fullName)){
        errorName.textContent = "Full name must contain at least 3 letters and only letters and spaces.";
        return false;
    }else{
        errorName.style.color = 'green';
        errorName.textContent = "Valid full name.";
        return true;
    }
}

function handleEmail(){
    const email = form.emailAddress.value.trim();
    const errorEmail = document.querySelector('.errorEmail');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    errorEmail.style.fontSize = "1rem";
    errorEmail.style.fontWeight = "800";
    errorEmail.style.marginTop = "0.2rem";
    errorEmail.style.color = 'red';

    if(email === ''){
        errorEmail.textContent = "Please enter your email address.";
        return false;
    }else if(!emailPattern.test(email)){ 
        errorEmail.textContent = "Please enter a valid email address.";
        return false;
    }else{
        email = "";
        errorEmail.style.color = 'green';
        errorEmail.textContent = "Valid email address.";
        return true;
    }

}

function handleMessage(){
    const message = form.messageBox.value.trim()
    const errorMessage = document.querySelector('.errorMessage');

    errorMessage.style.fontSize = "1rem";
    errorMessage.style.fontWeight = "800";
    errorMessage.style.marginTop = "0.2rem";
    errorMessage.style.color = 'red';
    if(message === ''){
        errorMessage.textContent = "Please enter your message.";
        return false;
    }else{
        errorMessage.style.color = 'green';
        errorMessage.textContent = "Message received.";
        return true;
    }
}