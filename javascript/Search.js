import AnimalsList from "./AnimalsList.js";

class Search {
    constructor(state) {
        this.state = state
    }

    animalsSearch() {
        const searchInput = document.getElementById('animals_search_value')
        if (!searchInput) {
            return
        }
        searchInput.addEventListener('input', (e) => {
            const animals = this.state.stateGetter()['animals']
            let fieldForSearch = 'name'
            let value = e.target.value
            if (/^\d{0,4}$/.test(value)) {
                fieldForSearch = 'index'
            }
            const filteredArray = animals.filter((animal) => animal[fieldForSearch]
                .toLowerCase().search(value.toLowerCase()) !== -1)
            AnimalsList.listRender(filteredArray)

        })
    }
}

export default Search
