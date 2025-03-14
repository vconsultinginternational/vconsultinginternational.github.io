
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
   
async function open_terminal(){
  createText("COMMUNICATIONS PLATFORM - VERAS INTERNATIONAL");
  await delay(700);
  createText("[-] Derivating cryptographic keys...");
  await delay(1500);
  createText("[*] Handshake completed. Opening main page...");
  createCode("SERVICES", "Digital Investigations and high value target attribution.");
  createCode("CONTACT", "814D3DA1D6F135AE7316F222C16A6F04DDDA8CE46C484F9C3E8065B570870B6A10375370619C");
  createText('')
  createText("TOX is a distributed end-to-end encrypted chat. Visit <a href='https://tox.chat/faq' style='TEXT-DECORATION: underline'  target='blank'>tox.chat</a> to know more.")

  await delay(500);
  createText("Veras International, OUT.")
}


function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
`${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
