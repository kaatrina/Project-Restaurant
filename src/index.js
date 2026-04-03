import "./style.css"; 
import "./style-menu.css";   

import "./style-about.css";       

console.log("Все работает")

import { pageLoad } from './main-page.js'

import { menuLoad } from './menu-page.js'

import { aboutLoad } from './about-page.js'

pageLoad()

const buttonMenu = document.getElementById('menu')
buttonMenu.addEventListener('click', () => {
    menuLoad()

})

const buttonMain = document.getElementById('main')
buttonMain.addEventListener('click', () => {
    pageLoad()

})

const buttonAboutUs = document.getElementById('about')
buttonAboutUs.addEventListener('click', () => {
    aboutLoad()

})