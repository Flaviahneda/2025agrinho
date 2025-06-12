function obterLocalizacao() {
  const resultado = document.getElementById("resultado-localizacao");

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      function (posicao) {
        const latitude = posicao.coords.latitude.toFixed(4);
        const longitude = posicao.coords.longitude.toFixed(4);
        resultado.innerText = Latitude: ${latitude}, Longitude: ${longitude};
      },
      function (erro) {
        switch (erro.code) {
          case 1:
            resultado.innerText = "Permissão negada para acessar localização.";
            break;
          case 2:
            resultado.innerText = "Localização indisponível.";
            break;
          case 3:
            resultado.innerText = "Tempo de espera excedido.";
            break;
          default:
            resultado.innerText = "Erro desconhecido.";
        }
      }
    );
  } else {
    resultado.innerText = "Geolocalização não é suportada neste navegador.";
  }
}