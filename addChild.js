import createChild from "./createChild.js";

function addChild(){
    const newChild = createChild();

    const parent = document.getElementById("parent-div");
    parent.appendChild(newChild);


}

export default addChild;