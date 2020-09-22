const input = document.getElementById('sendMessage');
const messageField = document.querySelector('div.message > ul')

input.onkeyup = event => {
    
    if (event.keyCode === 13) {

        const messageValue = input.value
  
        messageField.innerHTML = messageField.innerHTML + `<li class="message"><span class="developer">Livrodjx: ${messageValue.replace(/(<([^>]+)>)/gi, "")}</span></li>`
        event.preventDefault();

        input.value = ''
    }


    return messageField;
}
