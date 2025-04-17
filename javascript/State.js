import {animalsStore} from "./animals_store.js";
import AnimalsList from "./AnimalsList.js";

class State{
    constructor() {
        this.state = new Proxy({
            'animals': animalsStore()},
            {
                set:(target, key, newValue) => this.animalsSetValue(target, key, newValue)
            }
        )
    }
    animalsSetValue(target, key, newValue) {
        if(key === 'animals') {
            target = newValue
            AnimalsList.listRender(newValue)
            return true
        }
        return false
    }
    stateGetter(){
        return this.state
    }

    stateSetter( newStoreObject, stateKey = 'animals'){
        this.state[stateKey] = newStoreObject
    }


}

export default State