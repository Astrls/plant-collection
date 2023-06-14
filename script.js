// Importing dataset from collection
import { PLANTS } from "./collection.js";

//Fonts & Color variables
const font1 = "'Spectral', serif";
const font2 = "'Oswald', sans-serif";
const green1 = "#344E41";
const green2 = "#588157";

//Header and dynamic area container

// Header
let header = document.createElement("header");
header.style.display = "flex";
header.style.backgroundColor = "white";

//Logo
let logo = document.createElement("div");
logo.classList.add("logo");
logo.style.backgroundImage = `url("https://us.123rf.com/450wm/rosustock/rosustock2212/rosustock221200399/195840549-isolated-colored-indoor-plant-icon-vector.jpg?ver=6")`;
logo.style.backgroundSize = "contain";
logo.style.backgroundRepeat = "no-repeat";
logo.style.width = "100px";

// Header Title
let headerTitle = document.createElement("div");
headerTitle.classList.add("header-title");
headerTitle.style.display = "flex";
headerTitle.style.flexDirection = "column";

// Main title
let mainTitle = document.createElement("h1");
mainTitle.innerText = "Fantastic house plants";
mainTitle.style.fontFamily = font1;
mainTitle.style.fontStyle = "italic";
mainTitle.style.lineHeight = "1";

//Main Subtitle
let mainSubtitle = document.createElement("h2");
mainSubtitle.innerText =
  "You’ll find here a collection of house plants with instructions on how to care for them";
mainSubtitle.style.fontWeight = "200";
mainSubtitle.style.fontSize = "16px";
mainSubtitle.style.marginTop = "-20px";

//Collection container
let container = document.createElement("div");
container.classList.add("container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center"
container.style.flex = "1"
container.style.alignItems = "center"

let pFooter = document.createElement("p")
pFooter.textContent = 'Made with ♡ by Antoine Struelens'
pFooter.style.textAlign = "center"
pFooter.style.fontSize = "12px"



let footer = document.createElement("footer")
footer.style.alignSelf = "center"



//Appending static elements
document.body.append(header);
document.body.append(container);
footer.append(pFooter)
document.body.append(footer);
header.append(logo);
header.append(headerTitle);
headerTitle.append(mainTitle);
headerTitle.append(mainSubtitle);

//Body Styling
document.body.style.fontFamily = font2;
document.body.style.background =
  "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(188,208,199,1) 0%, rgba(88,129,87,1) 100%)";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.margin = "0px 0px";
document.body.style.padding = "0px 0px";
document.body.style.boxSizing = "border-box";
document.body.style.minHeight = "100vh"
document.body.style.display = "flex"
document.body.style.flexDirection = "column"
document.body.style.position = "relative"

// Function to add a plant card with its CSS properties
const addCard = (coolplant) => {

  //Card container
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");
  cardContainer.style.position = "relative"
  cardContainer.style.height = "400px";
  cardContainer.style.width = "260px";
  cardContainer.style.backgroundColor = "white";
  cardContainer.style.borderRadius = "15px";
  cardContainer.style.margin = "20px";
  cardContainer.style.filter = "drop-shadow(0px 14px 24px rgba(0, 0, 0, 0.6));";
  

  //Card Image
  let cardImage = document.createElement("div");
  cardImage.classList.add("card-image");
  cardImage.style.backgroundImage = `url("${coolplant.image}")`;
  cardImage.style.height = "200px";
  cardImage.style.borderTopLeftRadius = "15px";
  cardImage.style.borderTopRightRadius = "15px";
  cardImage.style.backgroundSize = "cover";
  cardImage.style.backgroundPosition = "center";

  //Card content
  let cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  cardContent.style.padding = "10px";
  cardContent.style.display = "flex"
  cardContent.style.flexDirection = "column"

  //Card content header
  let cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");

  //Card title
  let cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");

  // Common Name
  let cardH3 = document.createElement("h3");
  cardH3.innerText = coolplant.common_name;
  cardH3.style.fontFamily = font1;
  cardH3.style.fontWeight = "100";
  cardH3.style.fontSize = "18px";
  cardH3.style.color = green1;
  cardH3.style.lineHeight = "0.1";

  // Scientific name
  let cardH4 = document.createElement("h4");
  cardH4.innerText = coolplant.scientific_name;
  cardH4.style.fontFamily = font2;
  cardH4.style.fontWeight = "100";
  cardH4.style.fontSize = "12px";
  cardH4.style.color = "black";
  cardH4.style.lineHeight = "0.1";

  // General info for the plant
  let cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  cardInfo.style.display = "flex";
  cardInfo.style.alignItems = "center";
  cardInfo.style.lineHeight = "0.1";
  cardInfo.style.justifyContent = "space-between";

  // Icon for light needs
  let lightInfo = document.createElement("i");
  lightInfo.className = coolplant.light;
  lightInfo.style.fontSize = "20px";
  if(lightInfo.classList[1] == "fa-cloud-sun"){
    lightInfo.title = "Indirect sunlight"
  }else if (lightInfo.classList[1] == "fa-sun"){
    lightInfo.title = "Direct sunlight"}

  //Water requirements
  let waterInfo = document.createElement("p");
  waterInfo.classList.add("water-info");
  waterInfo.innerText = coolplant.water;
  waterInfo.style.fontSize = "14px";
  waterInfo.style.fontWeight = "200";
  waterInfo.style.color = green2;

  // Description
  let cardDesc = document.createElement("div");
  cardDesc.classList.add("card-desc");
  cardDesc.style.fontSize = "10px";

  // Paragraph for description
  let plantP = document.createElement("p");
  plantP.textContent = coolplant.description;
  plantP.style.fontWeight = "200";
  plantP.style.display = "box";
  plantP.style.maxHeight = "60px";
  plantP.style.overflow = "hidden";
  plantP.style.textOverflow = "ellipsis";

  // Plant care difficulty
  let cardCare = document.createElement("div");
  cardCare.classList.add("card-care");
  cardCare.innerText = coolplant.care_difficulty;
  cardCare.style.display = "flex";
  cardCare.style.justifyContent = "center";
  cardCare.style.fontSize = "12px";
  cardCare.style.color = green2;
  cardCare.style.position = "absolute"
  cardCare.style.bottom = "10px"
  cardCare.style.alignSelf = "center"
  
  //Animations when clicked
  cardContainer.addEventListener("click", (e) =>{
    if(cardContainer.classList[1] !== "zoom"){
    cardContainer.classList.add("zoom")
    cardContainer.style.height = "500px"
    cardContainer.style.width = "300px"
    cardContainer.style.transitionDuration = "0.4s"
    cardImage.style.height = "0px"
    plantP.style.maxHeight = "320px";
    cardDesc.style.fontSize = "18px";
    cardH3.style.fontSize = "24px";
    cardH3.style.textAlign = "center";
    cardH4.style.fontSize = "16px";
    cardH4.style.textAlign = "center";
    }else{
      cardContainer.style.height = "400px";
      cardContainer.style.width = "260px";
      cardContainer.style.transitionDuration = "0.3s"
      cardContainer.classList.remove("zoom")
      cardImage.style.height = "200px";
      plantP.style.maxHeight = "60px";
      cardDesc.style.fontSize = "10px";
      cardH3.style.fontSize = "18px";
      cardH3.style.textAlign = "left";
      cardH4.style.fontSize = "12px";
      cardH4.style.textAlign = "left";
    }
  })

  //Appending all our elements
  container.append(cardContainer);
  cardContainer.append(cardImage);
  cardContainer.append(cardContent);
  cardContent.append(cardTitle);
  cardTitle.append(cardH3);
  cardTitle.append(cardH4);
  cardInfo.append(lightInfo);
  cardInfo.append(waterInfo);
  cardContent.append(cardInfo);
  cardContent.append(cardDesc);
  cardDesc.append(plantP);
  cardContent.append(cardCare);
};

// addCard(plantTest);
// addCard(plantTest);

PLANTS.forEach((plantie) => {
  addCard(plantie);
});
