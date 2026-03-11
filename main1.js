let execute = document.getElementById("Execute");
execute.addEventListener("click", function(){
    let sentence = document.getElementById("sentence").value;
    sentence = sentence.replace(/[^\w\s]/g, "");
    let words = sentence.trim().split(" ");
    let count = words.length;
    document.getElementById("sent-count").value = count;

    let output = "";
    for(let i = 0; i < words.length; i++){
        output += "<u>" + words[i] + "<u>";
    }

    document.getElementById("words").innerHTML = output;
     

})