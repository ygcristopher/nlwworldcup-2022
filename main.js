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

let delay = -0.3;
function createCard(date, day, games) { 
  delay = delay + 0.3;
  return `
  <div class="card" style="animation-delay: ${delay}s">
                <h2>${date}<span>${day}</span></h2>
                   <ul> 
                    ${games}
                   </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML = ` 
                
             ${createCard(
               "20/11",
               "DOMINGO",
               createGame("Catar", "13:00", "Equador", "A")
             )}
             ${createCard(
               "21/11",
               "SEGUNDA",
               createGame("Inglaterra", "10:00", "Irã", "B") +
                 createGame("Senegal", "13:00", "Holanda", "A") +
                 createGame("Estados Unidos", "16:00", "Gales", "B")
             )}
             ${createCard(
               "22/11",
               "TERÇA",
               createGame("Argentina", "07:00", "Arabia Saudita", "C") +
                 createGame("Dinamarca", "10:00", "Tunisia", "D") +
                 createGame("Mexico", "13:00", "Polonia", "C") +
                 createGame("França", "16:00", "Australia", "D")
             )}
            ${createCard(
              "23/11",
              "QUARTA",
              createGame("Marrocos", "07:00", "Croácia", "F") +
                createGame("Alemanha", "10:00", "Japão", "E") +
                createGame("Espanha", "13:00", "Costa Rica", "E") +
                createGame("Belgica", "16:00", "Canadá", "F")
            )}
            ${createCard(
              "24/11",
              "QUINTA",
              createGame("Suiça", "07:00", "Camarões", "G") +
                createGame("Uruguai", "10:00", "Coreia do Sul", "H") +
                createGame("Portugal", "13:00", "Gana", "H") +
                createGame("Brazil", "16:00", "Sérvia", "G")
            )}
           ${createCard(
             "25/11",
             "SEXTA",
             createGame("Gales", "07:00", "Irã", "B") +
               createGame("Catar", "10:00", "Senegal", "A") +
               createGame("Holanda", "13:00", "Equador", "A") +
               createGame("Inglaterra", "16:00", "Estados Unidos", "B")
           )}
           ${createCard(
             "26/11",
             "SÁBADO",
             createGame("Tunisia", "07:00", "Australia", "D") +
               createGame("Polonia", "10:00", "Arabia Saudita", "C") +
               createGame("França", "13:00", "Dinamarca", "D") +
               createGame("Argentina", "16:00", "Mexico", "C")
           )}
           ${createCard(
             "27/11",
             "DOMINGO",
             createGame("Japão", "07:00", "Costa Rica", "E") +
               createGame("Belgica", "10:00", "Marrocos", "F") +
               createGame("Croácia", "13:00", "Canadá", "F") +
               createGame("Espanha", "16:00", "Alemanha", "E")
           )}
            ${createCard(
              "28/11",
              "DOMINGO",
              createGame("Camarões", "07:00", "Sérvia", "G") +
                createGame("Coreia do Sul", "10:00", "Gana", "H") +
                createGame("Brazil", "13:00", "Suiça", "G") +
                createGame("Portugal", "16:00", "Uruguai", "H")
            )}
            ${createCard(
              "29/11",
              "SEGUNDA",
              createGame("Equador", "07:00", "Senegal", "A") +
                createGame("Holanda", "10:00", "Catar", "A") +
                createGame("Irã", "13:00", "Estados Unidos", "B") +
                createGame("Gales", "16:00", "Inglaterra", "B")
            )}
            ${createCard(
              "30/11",
              "TERÇA",
              createGame("Tunisia", "07:00", "França", "D") +
                createGame("Australia", "10:00", "Dinamarca", "D") +
                createGame("Polonia", "13:00", "Argentina", "B") +
                createGame("Arabia Saudita", "16:00", "Mexico", "C")
            )}
            ${createCard(
              "01/12",
              "QUARTA",
              createGame("Croácia", "07:00", "Belgica", "F") +
                createGame("Canadá", "10:00", "Marrocos", "F") +
                createGame("Japão", "13:00", "Espanha", "E") +
                createGame("Costa Rica", "16:00", "Alemanha", "E")
            )}
            ${createCard(
              "02/11",
              "QUINTA",
              createGame("Coreia do Sul", "07:00", "Portugal", "H") +
                createGame("Gana", "10:00", "Uruguai", "H") +
                createGame("Sérvia", "13:00", "Suiça", "G") +
                createGame("Camarões", "16:00", "Brazil", "G")
            )}
       
`











