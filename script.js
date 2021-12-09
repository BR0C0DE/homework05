document.getElementById('text').addEventListener('click', event => {
  event.preventDefault()
  const record = {
    username: document.getElementById('username').value,
    score: points
  }
  scores.push(record)
  localStorage.setItem('scores', JSON.stringify(scores))
  document.getElementById('addScores').style.display = 'none'
  document.getElementById('displayScores').style.display = 'block'
  scores = scores.sort((a, b) => b.score - a.score)
  scores.forEach(score => {
    let scoreElem = document.createElement('div')
    scoreElem.innerHTML = `<h6>Username: ${score.username} | Score: ${score.score}</h6><hr>`
    document.getElementById('displayScores').append(scoreElem)
  })
  points = 0
  document.getElementById('start').style.display = 'block'
})