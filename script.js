var textarea = document.querySelector("input-field");
var result = document.getElementById("result");
var myText = document.getElementById("input-field");
var limit = 140;
result.textContent = 0 + "/" + limit;

myText.addEventListener("input", function () {
  var textLength = myText.value.length;
  result.textContent = textLength + "/" + limit;

  if (textLength > limit) {
    myText.style.borderColor = "blue";
    result.style.color = "blue";
  } else {
    myText.style.borderColor = "#b2b2b2";
    result.style.color = "#737373";
  }
});

let commentList = [];

var list = document.querySelector("#comments");

// Loop through each gallery and create a list item
function load() {
  list.innerHTML = "";
  commentList.forEach(function (item) {
    // inject each list item into the ul
    list.innerHTML +=
      '<div class="card"> <div class="container"><h4><b>' +
      item.Name +
      "</b></h4><p>" +
      item.Comment +
      "</p></div></div>";
  });
}

function addComment() {
  var form = document.getElementById("contact-form");
  let name = form.elements["name"].value;
  let comment = form.elements["comment"].value;
  let email = form.elements["email"].value;
  commentList.push({ Name: name, Email: email, Comment: comment });
  load();
}
