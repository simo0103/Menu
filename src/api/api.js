import apiMenu from "./apiMenu.json" ;
//https://codesandbox.io/s/vVoQVk78
//https://codesandbox.io/s/github/reactjs/redux/tree/master/examples/shopping-cart
const MenuAPI = {
    allPizza: function() { return apiMenu.pizze },
    allHamburger: function() { return apiMenu.hamburgers }
}
export default MenuAPI;