const API_KEY = "953f723e0add2180d2d37eacef2b3f34";
const url = `https://rest.bandsintown.com/artists/voodooslim/events/?app_id=${API_KEY}`;

const calendar = document.getElementById("calendar");
console.log(calendar);

const getGigs = async () => {
  const response = await fetch(url);
  const gigs = await response.json();

  for (i = 0; i < gigs.length; i++) {
    let [title, date, description, venue, location] = [
      gigs[i].title,
      new Date(Date.parse(gigs[i]["datetime"])).toDateString(),
      gigs[i].description,
      gigs[i].venue.name,
      gigs[i].venue.location,
    ];
    let day = date.slice(0, 3);
    let month = date.slice(4, 7);
    let dayNum = date.slice(8, 10).replace("0", "");
    let year = date.slice(11);
    console.log(i);

    let gigDiv = document.createElement("div");
    let dateDiv = document.createElement("div");
    let gigContentDiv = document.createElement("div");
    let pDate = document.createElement("p");
    let pTitle = document.createElement("p");
    let pLocation = document.createElement("p");
    let pDescription = document.createElement("p");

    let hr = document.createElement("hr");

    pDate.innerText = `${month}\n${dayNum}`;
    pTitle.innerText = `${title}`;
    pLocation.innerText = `${location}`;
    pDescription.innerText = `${description}`;

    gigDiv.classList.add("gig-div");
    pDate.classList.add("gig-date");
    gigContentDiv.classList.add("gig-content");
    pDescription.classList.add("gig-description");
    hr.classList.add("gig-hr");
    pTitle.classList.add("gig-title");
    pLocation.classList.add("gig-title");

    calendar.appendChild(gigDiv);
    gigDiv.appendChild(dateDiv);
    gigDiv.appendChild(gigContentDiv);
    dateDiv.appendChild(pDate);
    gigContentDiv.appendChild(pTitle);
    gigContentDiv.appendChild(pLocation);
    // gigContentDiv.appendChild(hr);
    gigContentDiv.appendChild(pDescription);

    calendar.appendChild(hr);
  }
};

getGigs();
