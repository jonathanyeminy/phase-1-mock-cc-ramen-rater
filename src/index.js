// write your code here
document.addEventListener('DOMContentLoaded', () => {
    let globalRamenArray = []
    getRamen()

    function getRamen(){
        fetch('http://localhost:3000/ramens')
        .then(resp => resp.json())
        .then(allRamen => {
            globalRamenArray = allRamen
            renderRamenImages()
        })
    }
    function renderRamenImages() {
        globalRamenArray.forEach(ramen => {
            let imageDiv = document.createElement('img')
            imageDiv.src = ramen.image
            imageDiv.alt = `${ramen.name} pic missing`
            // console.log(ramen.image)
            document.getElementById('ramen-menu').appendChild(imageDiv)
            handleClick(imageDiv, ramen)
        })
    }


    function handleClick(imageDiv, ramen) {
        imageDiv.addEventListener('click', () => {
            //console.log(`clicked ${ramen.name}`)
            let ramenImage = document.querySelector('.detail-image')
                ramenImage.src = ramen.image
            let ramenName = document.querySelector('.name')
                ramenName.innerText = ramen.name
            let ramenRestaurant = document.querySelector('.restaurant')
                ramenRestaurant.innerText = ramen.restaurant
            let ramenComment = document.getElementById('comment-display')
                ramenComment.innerText = ramen.comment
            let ramenRating = document.getElementById('rating-display')
                ramenRating.innerText = ramen.rating
        })

    }
    function handleSubmit () {
        newRamenForm = document.getElementById('new-ramen')
        newRamenForm.addEventListener('submit', (e) => {
            e.preventDefault();
            newName = document.getElementById('new-name').value
            newRestaurant = document.getElementById('new-restaurant').value
            newImage = document.getElementById('new-image').value
            newRating = document.getElementById('new-rating').value
            newComment = document.getElementById('new-Comment').value
            let newRamenObject = {
                name: newName,
                restaurant: newRestaurant,
                image: newImage,
                rating: newRating,
                comment: newComment
            }
            globalRamenArray = [...globalRamenArray, newRamenObject]
            renderRamenImages()
        })
        
    }
})
