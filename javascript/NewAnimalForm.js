class NewAnimalForm {
    constructor( state ) {
        this.state = state

    }
    addNewAnimal(){
        // get button element
        // const submitButton = document.querySelector('#new_animal_form button[type=button]')
        const newAnimalForm = document.getElementById('new_animal_form')
        // if(!submitButton) return false
        newAnimalForm.addEventListener('submit',(e)=>{
            e.preventDefault()
            this.addNewAnimalHandler(e)
        })
        // submitButton.addEventListener('click', (e) => {
        //     e.preventDefault()
        //     this.addNewAnimalHandler(e)
        // })

    }
    addNewAnimalHandler(event) {
        let animalsStore = this.state.stateGetter()['animals']
        // get input element
        const newAnimalNameInput = event.target.closest('#new_animal_form')
            .querySelector('input#animal_name')
        if(!newAnimalNameInput) return false

        const animalName = newAnimalNameInput.value
        if(!animalName) {
            alert ('Animal name Is Empty !')
            newAnimalNameInput.value = ''
            throw new Error('Animal name Is Empty !')
        }
        //Check is name exists
       const checkArrayLength = animalsStore.filter(
           (animal) =>  animal.name.toLowerCase() === animalName.toLowerCase()).length
        if(checkArrayLength){
            alert ('This Animal Is Exists !')
            newAnimalNameInput.value = ''
            throw new Error('This Animal Is Exists !')
        }
        animalsStore.sort((a, b) => b.index - a.index )
        const newAnimalObject = {
            'index' : (parseInt(animalsStore[0].index) + 1).toString(),
            'name' : animalName,
            'originalName' : animalName
        }
        newAnimalNameInput.value = ''
        animalsStore.push(newAnimalObject)
        this.state.stateSetter(animalsStore)
    }


}
export default NewAnimalForm