import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.

  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let fullName = `<h1>${variables.name} ${variables.lastname} </h1>`;
  let job = `<h2>${variables.role} </h2>`;
  let location = `<h3>${variables.city}, ${variables.country}</h3>`;

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
          ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          ${fullName}
          ${job}
          ${location}
          <ul class="${variables.socialMediaPosition}">
            <li><a target="_blank" rel="noopener" href="https://twitter.com/4geeksacademy"><i class="fa fa-twitter"></i></a></li>
            <li><a target="_blank" rel="noopener" href="https://github.com/${variables.github}"><i class="fa fa-github"></i></a></li>
            <li><a target="_blank" rel="noopener" href="https://linkedin.com/in/${variables.linkedin}"><i class="fa fa-linkedin"></i></a></li>
            <li><a target="_blank" rel="noopener" href="https://instagram.com/${variables.instagram}"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "https://images.pexels.com/photos/1125774/pexels-photo-1125774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // this is the url for the profile avatar
    avatarURL: "https://avatars.githubusercontent.com/u/118434024?v=4",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "LucyMacko",
    linkedin: "lucia-mackova",
    instagram: "lu8cylu",
    name: "Lucy",
    lastname: "Macko",
    role: "Web Developer",
    country: "Spain",
    city: "Malaga"
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? alert("You must write something!")
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
