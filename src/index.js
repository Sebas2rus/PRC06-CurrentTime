import joke from "./generateJoke";
import './styles/main.scss'
import person from './assets/person.svg'

const personImg = document.getElementById('person')
personImg.src = person
console.log(joke());