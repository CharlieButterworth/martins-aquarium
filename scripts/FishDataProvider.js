/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Ricky",
        food: "Fish, Algea",
        length: 10,
        location: "Amazon River Basin",
        species: "Symphysodon aequifasciatus",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Blue_Discus.jpg/440px-Blue_Discus.jpg"
    },
    {
        name: "Ricky's Twin",
        food: "Carrots, Apples, Bananas",
        length: 3,
        location: "Greece",
        species: "Symphysodon aequifasciatus",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Blue_Discus.jpg/440px-Blue_Discus.jpg"
    },
    {
        name: "Ricky's Half Brother",
        food: "cereal, worms, insects",
        length: 25,
        location: "Japan",
        species: "Symphysodon aequifasciatus",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Blue_Discus.jpg/440px-Blue_Discus.jpg"
    },
    {
        name: "Ricky's 3rd cousin",
        food: "Pizza, cheese",
        length: 12,
        location: "USA",
        species: "Symphysodon aequifasciatus",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Blue_Discus.jpg/440px-Blue_Discus.jpg"
    }
]
export const useFish = () => {
    return fishCollection.slice()
}

export const addFish = (fishObj) => {
    fishCollection.push(fishObj)
}


export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0)
        // console.log(fish)
        holyFish.push(fish)

    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish

    const soldiers = []

    for (const fish of fishCollection) {
        if (fish.length % 5 === 0)
        soldiers.push(fish)
    }

    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5

    const regularFish = []
for (const fish of fishCollection)
    if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
        regularFish.push(fish)
    }
    
    return regularFish
}