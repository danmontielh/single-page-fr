const renderPage = (div, template) => {
  return (div.innerHTML = template());
};

const menuListener = (menu, navigation) => {
  menu.forEach(element => {
    element.addEventListener("click", navigation);
  });
};

export { renderPage, menuListener };
