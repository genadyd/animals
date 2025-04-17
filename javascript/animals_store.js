
export function animalsStore(){
    let txt1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6"
    let txt2 = "PIG17, bear29, BiRd8, LiOn7"
    let txt3 = "SNAKE39, donkey14"

    const animalsString = `${txt1}, ${txt2}, ${txt3}`
    const pattern = /^([a-z]{2,15})(\d{1,3})$/i

    return [...new Set(animalsString.split(', '))]
        .map((animal) => {
           let matches = pattern.exec(animal)
            if(!matches.length){
                throw new Error('Animal name or index not matched');
            }
            return {
                'index': matches[2],
                'name':matches[1].toLowerCase(),
                'originalName':matches[1]
            }
        })
}


