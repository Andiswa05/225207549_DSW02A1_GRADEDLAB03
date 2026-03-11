let addBtn = document.getElementById("add");
let removeBtn = document.getElementById("remove");
let list = document.getElementById("list");
let removedCount = 0;


addBtn.addEventListener("click", function(){
    let input = document.getElementById("item");
    let text = input.value.trim();
    if(text === "") return;
    let words = text.split(" ");
    for(let i = 0; i < words.length; i++){
        let li = document.createElement("li");
        li.textContent = words[i];
        list.appendChild(li);
    }
    updateColors();
    input.value = "";
});



removeBtn.addEventListener("click", function(){
    let input = document.getElementById("item");
    let text = input.value.trim().toLowerCase();
    let items = list.getElementsByTagName("li");
    for(let i = 0; i < items.length; i++){
        if(items[i].textContent.toLowerCase() === text){
            let removedText = items[i].textContent;
            list.removeChild(items[i]);
            removedCount++;
            document.getElementById("removed").innerHTML =
            "<b style='color:red'>" + removedText + "</b>";
            document.getElementById("removed-count").innerHTML =
            "<span style='color:green'>(" + removedCount + ") item removed</span>";
            break;
        }
    }
    updateColors();
    input.value = "";
});



function updateColors(){
    let items = list.getElementsByTagName("li");
    for(let i = 0; i < items.length; i++){
        if(i % 2 === 0){
            items[i].style.backgroundColor = "white";
        }
        else{
            items[i].style.backgroundColor = "yellow";
        }

    }
}