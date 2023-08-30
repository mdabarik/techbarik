

const toogleDataTheme = () => {
    const element = document.getElementById("html");
    console.log(element);
    const attribute = element.getAttribute('data-theme');
    if (attribute === 'light') {
        element.setAttribute("data-theme", "dark");
    } else {
        element.setAttribute("data-theme", "light");
    }
}