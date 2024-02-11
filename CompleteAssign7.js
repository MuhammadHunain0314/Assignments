document.addEventListener("DOMContentLoaded", function () {
    var submitButton = document.getElementById("Submit");
    submitButton.addEventListener("click", function (event) {
      event.preventDefault();
      var usernameInput = document.getElementById("username");
      var username = usernameInput.value.trim();
  
      if (validUsername(username)) {
        alert("Success!");
      } else {
        alert(
          "Error! name must be atleast 5 characters long only in alphanumeric characters"
        );
      }
    });
    function validUsername(username) {
      var alphanumericRegex = /^[a-zA-Z0-9]+$/;
      return username.length >= 5 && alphanumericRegex.test(username);
    }
  });
  
  document.getElementById("show").addEventListener("click", () => {
    var visiblity = document.getElementById("hide");
    if (visiblity.style.display === "none") {
      visiblity.style.display = "block";
    } else {
      visiblity.style.display = "none";
    }
  });