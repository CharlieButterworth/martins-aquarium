
import { useFish } from "./FishDataProvider.js"


export const FishList = () => {
    const contentElement = document.querySelector(".contentContainer__left")



const fishes = useFish

let fishHTMLRepresentations = ""
for (const fish of fishes) {
    fishHTMLRepresentations += Fish(fish)
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

=======


export const FishList = () => {
    const contentElement = document.querySelector(".container__left")


    console.log(contentElement)

    contentElement.innerHTML += `
<section class="fishList">
    <h3>Fish List</h3>
    <div class="fishcontainer">
    Placeholder for list of fishes
</div>
    </section>

`
}

