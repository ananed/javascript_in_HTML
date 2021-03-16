// if we don't want to have javaScript in html
//we just to all the stuff of this form :)

//firstly, we have to put in html the next thing

// <script src="./index.js" type="text/script"></script>

//do it always before the botton thing

//and then you can copy the code here baby


//let's create a function
            //the trick is that we can access by this way to the document model
            //and modify it
            function addChildren(){
                //firstly we want to get a parent, like the parent use an id
                //we use it when we look for it
                const parent = document.getElementById("parent-div");
                //like we want to create a new children and to do it we need the name of the tag
                //that's why we use a div
                const newChildren = document.createElement("div");
                //once I have this I need to put a style on it
                newChildren.classList.add("children");
                //??
                parent.appendChild(newChildren);
            }