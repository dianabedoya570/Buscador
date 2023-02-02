const btnEnviar=document.querySelector(".btn");
btnEnviar.addEventListener("click",()=>{
    const inputFind=document.querySelector("#toFind");
    const txtFind=document.querySelector("#txtToFind");
    txtFind.innerText=inputFind.value;


});
