//replace with your user:
const GITHUB_URL = "https://api.github.com/users/renzovargas17";
const profileImage = document.getElementById("profile-image");
const profileName = document.getElementById("profile-name");
const spinner = document.querySelector(".spinner");
spinner.classList.add("show");
profileImage.classList.remove("show")
profileImage;
fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    profileImage.src = data.avatar_url;
    profileName.innerText = data.name;
    spinner.classList.remove("show");
    profileImage.classList.add("show");
  });
