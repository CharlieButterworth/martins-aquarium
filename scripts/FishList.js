
import { useFish } from "./FishDataProvider.js"
import { Fish } from "./Fish.js"

export const FishList = () => {
    const contentElement = document.querySelector(".contentContainer__left")



const fishes = useFish()



let fishHTMLRepresentations = ""
for (const fish of fishes) {
    fishHTMLRepresentations += Fish(fish)
    console.log(fish)
}



contentElement.innerHTML += `
<section class="fishList">
<h3>Fish List</h3>
<div class="fishContainer">
${fishHTMLRepresentations}
</div>
</section>
`
}
