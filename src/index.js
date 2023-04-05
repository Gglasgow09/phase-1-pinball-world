//1. fetch my data from somewhere(usually server)
//2. render data to the page
//3. add event listeners to the age 
//4. make event listeners manipulate the page
//5. save changes to where ever data came from (usually from the server )

//Make a request to http://localhost:3000/games and 
const baseUrl = 'http://localhost:3000/'
const gamesUrl = baseUrl + 'games/'


const fetchGames = () =>
    fetch(gamesUrl)
    .then(response => response.json())
    //.then(console.log)
    .then(gamesData => renderGames(gamesData))

fetchGames()

//add the names of all the games in the #game-list nav element. 
const renderGames = games => {
    //console.log(games)
    renderGameDetails( games[0])
    const gameListNav = document.getElementById('game-list')
    //console.log(gameListNav)
    games.forEach(game => {
     //should be of the format name (manufacturer). For example, Ghostbusters (Stern).
    const gameNameH5 = document.createElement('h5')
    gameListNav.appendChild(gameNameH5)

    gameNameH5.textContent = `${game.name} (${game.manufacturer_name})`

    //When the user clicks on one of the games in the list, display all the details of that game.
    gameNameH5.onclick = ( ) => {
        renderGameDetails(game)

    }
})
}



//When the page loads, show the info of the the first game in 
//the array returned from your fetch.

const renderGameDetails = game => {
    //console.log(game)
    const gameDetailsImage = document.getElementById('detail-image')
    //console.log(gameDetailsImage)
    gameDetailsImage.src = game.image

    const gameTitleH2 = document.getElementById ('detail-title')
    gameTitleH2.textContent = game.name

    const gameHighScoreSpan = document.getElementById('detail-high-score')
    gameHighScoreSpan.textContent = game.high_score

    //The user should be able to enter a high score in the form on 
    //the right side and have it show that value for "high score".
    // const highScoreForm = document.getElementById('high-score-form')
    const highScoreForm = document.getElementById('high-score-form')
    
    highScoreForm.onsubmit = (event) => {
        event.preventDefault()
        const scoreInput = document.getElementById('score-input').value

        game.high_score = parseInt(scoreInput)
        gameHighScoreSpan.textContent = game.high_score

        highScoreForm.reset()
    }
//    highScoreForm.addEventListener('submit', function (event) {
//     event.preventDefault()

//     const scoreInput = document.getElementById('score-input').value
//     //console.log(scoreInput)
//     game.high_score = parseInt(scoreInput)
//     gameHighScoreSpan.textContent = game.high_score
//     }) 

}



