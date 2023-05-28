var numberOfDrumsButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumsButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function () {


        var buttonInnerHTML = this.textContent;

        switch (buttonInnerHTML) {
          case "w":
            alert("I am done!");
            break;
          case "a":
            alert("I am okay!");
            break;
          default:

        }

}
);
}
