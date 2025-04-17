class AnimalsList {

    constructor( state ) {
        this.animalsStore = state.stateGetter()['animals']
        AnimalsList.listRender(this.animalsStore)
        AnimalsList.removeAnimal( state )
    }

    static listRender(animalsStoreArray) {
        animalsStoreArray.sort((a,b) => +a.index - +b.index)
        const listContainer = document.querySelector('#animals_list_container #animals_list_area ul')
        if (!listContainer) {
            return;
        }
        let animalsListHtml = ''
        animalsStoreArray.forEach((animal, key) => {
            animalsListHtml += `<li class="list-group-item d-flex justify-content-between align-items-center" 
            data-key="${key}">
            ${animal.name.charAt(0).toUpperCase()}${animal.name.slice(1)}
            <span class="buttons">
            <span class="badge bg-primary badge-pill">${animal.index}</span>
            <span  class="badge bg-danger remove_button"><ion-icon name="close-outline"></ion-icon></span>
            </span>
            </li>`
        })
        listContainer.innerHTML = animalsListHtml
    }

    static removeAnimal( state ) {
        let animals = state.stateGetter()['animals']
        const listArea = document.getElementById('animals_list_area')
        if( !listArea ) return false
        listArea.addEventListener('click', (e) => {
            if(e.target.classList.contains('remove_button') || e.target.closest('.remove_button')) {
                const index = e.target.closest('li').dataset.key
                animals.splice(+index, 1)
                state.stateSetter(animals)
            }
        })
    }
}

export default AnimalsList