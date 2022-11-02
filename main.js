function createGame(player1, hour, player2, group){
  return `
  <li>
         <div>
           <p class="group">Grupo ${group}</p>
           </div>
           <div class="container">
           <div class="team-container">
           <img src="./assets/icon-${player1}.svg" title="${player1}" alt="${player1}">
           <p>${player1}</p>
           </div>
           <strong>${hour}</strong>
          <div class="team-container">
         <img src="./assets/icon-${player2}.svg" title="${player2}" alt="${player2}">
        <p>${player2}</p>
      </div>
    </div>
  </li>
  
  `
}


function createCard(date, day, games) { 
  return `
  <div class="card">
                <h2>${date}<span>${day}</span></h2>
                   <ul> 
                    ${games}
                   </ul>
  </div>
  `
}

document.querySelector("#app").innerHTML = ` 
          <header>    
            <img src="./assets/logo.svg" alt="Logo da NLW">          
           </header>
           <main id="cards">         
             ${createCard('20/11', 'DOMINGO',
            createGame('Catar', '13:00', 'Equador', 'A')
             )}
             ${createCard('21/11', 'SEGUNDA',
            createGame('Inglaterra', '10:00', 'Irã', 'B' ) + 
            createGame('Senegal', '13:00', 'Holanda', 'A') +
            createGame('Estados Unidos', '16:00', 'Gales','B')   
             )}
             ${createCard('22/11', 'TERÇA',
            createGame('Argentina', '07:00', 'Arabia Saudita','C') +
            createGame('Dinamarca', '10:00', 'Tunisia','D') +
            createGame('Mexico', '13:00', 'Polonia','C') +
            createGame('França', '16:00', 'Australia','D')
             )}
           </main>
`