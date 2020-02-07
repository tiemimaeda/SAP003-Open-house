function Menu (props) {
    const template = `
   <a onclick="button.handleClick(event, ${props.link})">${props.name}</a>
    `;
    return template;
}
window.button = {
    handleClick: (event, callback) => {
      event.preventDefault();
      callback(event);
    },
  };
export default Menu;