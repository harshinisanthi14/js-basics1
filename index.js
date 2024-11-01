const element=document.getElementById("fruits");
const children =element.children;
 Array.from(children).forEach(child => {
    child.style.backgroundColor="yellow";
 });