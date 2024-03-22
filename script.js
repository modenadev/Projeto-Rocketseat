function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  //pega a tag img
  const img = document.querySelector("#profile img")

  //substituir img
  if (html.classList.contains("light")) {
    //light mode
    img.setAttribute("src", "./assets/avatar ruan-dark.png")
  } else {
    //darkmode
    img.setAttribute("src", "./assets/avatar ruan.png")
  }

  if (html.classList.contains("light")) {
    // se a classe "light" estiver presente no elemento html, a página está no modo claro
    img.setAttribute("alt", "UM CARA MUITO FODA DE OCULOS PRETO B)")
  } else {
    // se a classe "light" não estiver presente no elemento html, a página está no modo escuro
    img.setAttribute("alt", "UM CARA FODA DE OCULOS DE GRAU B)")
  }
}
