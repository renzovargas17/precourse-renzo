const languages = ["HTML", "CSS", "JavaScript", "HTML"];
const footerText = document.getElementById("footer-text");

const printText = (place, array) => {
  const fixedText = "This website has been created with: ";
  const languagesList = [];
  array.forEach((element, index) => {
    let listItem;
    switch (true) {
      case (index == 0 && array.length <= 2) ||
        index == array.length - 2:
        console.log('first case');
        listItem = `${element} `;
        break;
      case index !== array.length - 1 && index !== array.length - 2:
        console.log('second case');
        listItem = `${element}, `;
        break;
      case array.length > 1 && index === array.length - 1:
        console.log('third case ');
        listItem = `and ${element}`;
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
