import {animalsStore} from "./animals_store.js";
import State from "./State.js";
import AnimalsList from "./AnimalsList.js";
import Search from "./Search.js";
import NewAnimalForm from "./NewAnimalForm.js";
// console.log(animalsStore())

const stateObject = new State()
const animalsList = new AnimalsList( stateObject )

const search = new Search(stateObject)
search.animalsSearch()

const animalForm = new NewAnimalForm(stateObject)
animalForm.addNewAnimal()

   // state.animals.push(
   //  {'index': '100','name': 'monkey',  'originalName': 'Monkey' }
   //  )
//     state.animals = [...state.animals, {'index': '100','name': 'monkey',  'originalName': 'Monkey' } ]
// setTimeout(() => {
//     console.log(state.animals)
// },2000)
