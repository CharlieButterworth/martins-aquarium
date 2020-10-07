

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