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
        length: 12.3-15.2,
        location: "Amazon River Basin",
        species: "Symphysodon aequifasciatus",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Blue_Discus.jpg/440px-Blue_Discus.jpg"
    },
    {
        name: "Ricky's Twin",
        food: "Carrots, Apples",
        length: 12.3-15.2,
        location: "Greece",
        species: "Symphysodon aequifasciatus",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Blue_Discus.jpg/440px-Blue_Discus.jpg"
    },
    {
        name: "Ricky's Half Brother",
        food: "cereal, worms, insects",
        length: 12.3-15.2,
        location: "Japan",
        species: "Symphysodon aequifasciatus",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Blue_Discus.jpg/440px-Blue_Discus.jpg"
    },
    {
        name: "Ricky's cousin",
        food: "Pizza, cheese",
        length: 12.3-15.2,
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