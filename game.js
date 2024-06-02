var t = [];
const div = document.createElement("div");
fetch("words.txt")
    .then(function (res) {
        return res.text();
    })
    .then(function (data) {
        let text = data.toString().split("\n");
        for (let i = 0; i < text.length; i++) {
            let node2 = document.createTextNode(text[i] + " ");
            div.appendChild(node2);
            t.push(text[i]);
        }
    });
console.log(t);
const element = document.getElementById("maintext");
element.appendChild(div);


