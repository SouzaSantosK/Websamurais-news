const button = document.querySelector('input[value="SEND"]');

button.addEventListener("click", (e) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");

  if (name.value && email.value) {
    emailjs
      .send(
        "service_l0s9372",
        "template_1imfn8o",
        { name: name.value, email: email.value },
        "Xts0UwNohpeU1f3pZ"
      )
      .then(
        function () {
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    name.value = "";
    email.value = "";

    const form = document.querySelector(".form");
    if (document.querySelector(".thanks")) {
      document.querySelector(".thanks").remove();
    }
    form.insertAdjacentHTML(
      "afterend",
      '<p class="thanks">Thank you for subscribing to our newsletter!</p>'
    );
  }
});
