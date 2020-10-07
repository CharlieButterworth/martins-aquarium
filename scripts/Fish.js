export const fish = (fishObj) => {
    return `<div class="fishcontainer">
    <p class="fish__Name">${fishObj.name}</p>
    <p class="fish__Image"><img src=${fishObj.image}></p>
    <p class="fish__species">${fishObj.species}</p>
    <p class="fish__location">${FishObj.location}</p>
    <p class="fish__length">${fishObj.length}</p>
    <p class="fish__diet">D${fishObj.food}</p>
</div>
    `
}