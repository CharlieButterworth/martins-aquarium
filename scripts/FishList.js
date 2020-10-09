
import {  useFish, mostHolyFish, soldierFish, nonHolyFish  } from "./FishDataProvider.js"
import { Fish } from "./Fish.js"

const buildFishContainerHTML = (arrayOfFish) => {
   
    let fishHTMLRepresentations = ""
for (const fish of arrayOfFish) {
    fishHTMLRepresentations += Fish(fish)
    const fishes = mostHolyFish()

    fishHTMLRepresentations += Fish(fish)

}

    return fishHTMLRepresentations


}



export const FishList = () => {
    const contentElement = document.querySelector(".contentContainer__left")

const holyFishes = mostHolyFish()

const holyFishHTML = buildFishContainerHTML(holyFishes)

const soldierFishes = soldierFish()
const soldierFishHTML = buildFishContainerHTML(soldierFishes)

const regularFishes = nonHolyFish()
const regularFishesHTML = buildFishContainerHTML(regularFishes)



contentElement.innerHTML += `
<section class="fishList">
<h3>Fish List</h3>
<div class="fishContainer">
${holyFishHTML}
${soldierFishHTML}
${regularFishesHTML}
</div>
</section>
`
}