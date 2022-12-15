const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b3f000323fmsh6ff107931a97b8dp1144e4jsnca58569a710c',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
  
};

  
  async function chamar_api(){

    let resultados = document.getElementById("jogos").children.length
    await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=all&category=sports', options)
      .then(response => response.json())
      .then(response => {
        imprimirjogos(response, resultados)
      })
      .catch(err => console.error(err));
  
    }
    function imprimirjogos(listJogos, resultados){
      let jogosarmazenados = document.getElementById("jogos");
      // let jogos_atuais = resultados
      let intervalo = 10
      let jogos_selecionados = listJogos.slice(resultados, (resultados + intervalo));
      
      jogos_selecionados.map((val) => {
        jogosarmazenados.innerHTML += `
        <div class = "jogosimp">
            <img id = "imagemjogos" src = `+val.thumbnail+`>

            <h2 id ="titulojogos">
            <a style="text-decoration:none;color: #FFF;" target="_blank" href=`+val.freetogame_profile_url+` >`+val.title+`</a> 
              </h2>   

        </div>

        `
      }
      )
    }chamar_api();