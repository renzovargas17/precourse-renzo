const languages = ["HTML", "CSS", "JavaScript"];
const footerText = document.getElementById("footer-text");

const printText = (place, array) => {
  const fixedText = "This website has been created with: ";
  const languagesList = [];
  array.forEach((lan) => {
    let listItem;
    switch (true) {
      case (lan == array[0] && array.length <= 2) ||
        lan == array[array.length - 2]:
        listItem = `${lan} `;
        break;
      case lan !== array[array.length - 1] && lan !== array[array.length - 2]:
        listItem = `${lan}, `;
        break;
      case array.length > 1 && lan === array[array.length - 1]:
        listItem = `and ${lan}`;
        break;
    }
    languagesList.push(listItem);
  });
  let currentLanguage = "";
  for (const language of languagesList) {
    currentLanguage += language;
  }
  place.innerText = `${fixedText + currentLanguage}.`;
};

printText(footerText, languages);
