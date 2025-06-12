function obterLocalizacao() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao, mostrarErro);
  } else {
    alert("Geolocalização não é suportada pelo seu navegador.");
  }
}

function mostrarLocalizacao(posicao) {
  const latitude = posicao.coords.latitude;
  const longitude = posicao.coords.longitude;

  const mapa = document.getElementById("mapa");
  mapa.innerHTML = `
    <p>Sua localização:</p>
    <p>Latitude: ${latitude}</p>
    <p>Longitude: ${longitude}</p>
    <iframe
      width="100%"
      height="250"
      frameborder="0" 
      style="border:0"
      src="https://www.google.com/maps?q=${latitude},${longitude}&hl=pt&z=14&output=embed"
      allowfullscreen>
    </iframe>
  `;
}

function mostrarErro(erro) {
  const mapa = document.getElementById("mapa");
  mapa.innerHTML = <p>Não foi possível obter a localização: ${erro.message}</p>;
}