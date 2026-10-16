//selecionar todos os cards
let cards = document.querySelectorAll(".card-destino")

//Percorrer todos os cards selecionados e para cada um (sparadamente) pegar os botões (botão curiosidade e o botão favoritos)
cards.forEach(function (card) {

    let botaoCuriosidade = card.querySelector('.botao-curiosidade')
    let botaoFavorito = card.querySelector('.botao-favorito')
    let curiosidade = card.querySelector('.curiosidade')

    botaoCuriosidade.addEventListener("click", function () {

        if (curiosidade.hidden) {
            curiosidade.hidden = false
            botaoCuriosidade.setAttribute("aria-expanded", "true")
            botaoCuriosidade.textContent = "Ocultar curiosidade"
        }

        else {
            curiosidade.hidden = true
            botaoCuriosidade.setAttribute("aria-expanded", "false")
            botaoCuriosidade.textContent = "Ver curiosidades"
        }

    }) //Fechamento do código do botaoCuriosidade

    botaoFavorito.addEventListener("click", function () {

        //Aplicar/Remover a classe "favoritado"
        //Classe foi aplicada? true
        //Classe foi removida? false

        let favoritado = card.classList.toggle("favoritado")

        //Atualizar o estado (aria-pressed)
        botaoFavorito.setAttribute('aria-pressed', favoritado)

        // Atualizar o texto do botão (☆ Favorito ou ★ Favoritado)

        if (favoritado) {
            botaoFavorito.textContent = "★ Favoritado"
        }

        else {
            botaoFavorito.textContent = "☆ Favorito"

        }
        //chama funcao de atualizacao
        atualizarContadorFavoritos()

    });

}); // fechamento do forEach

/*V2: progamação para o recurso de filtragem de destinos*/

/*Procurar e selecinar os botões de filtro */

const botoesFiltro = document.querySelectorAll("[data-filtro]")


botoesFiltro.forEach(function (botaoFiltro) {


    botaoFiltro.addEventListener("click", function () {

        const filtro = botaoFiltro.dataset.filtro;

        cards.forEach(function (card) {

            const categoria = card.dataset.categoria;

            //mostrar todos os cards ou apenas os cards da categoria filtrada
            if (filtro === "todos" || categoria === filtro) {
                card.hidden = false

            } else {
                card.hidden = true

            }

            //
        })
        botoesFiltro.forEach(function (botaoFiltro) {
            if (botaoFiltro.dataset.filtro === filtro) {

                botaoFiltro.classList.add("filtro-ativo");
                botaoFiltro.setAttribute("aria-pressed", "true")


            } else {
                botaoFiltro.classList.remove("filtro-ativo");

                botaoFiltro.setAttribute("aria-pressed", "false")

            }
        })

    })// fechamento event listenert

});// fechamento forEach


/* Varsao 3: */


// selecionando os elementos que serao manipulados

// botão menu 
const botaoMenu = document.querySelector(".botao-menu")

//navegação principal
const navegacaoPrincipal = document.querySelector("#navegacao-principal");

//detectar o acionamento do botão 
botaoMenu.addEventListener("click", function () {
    // aplicar a classe menu aberto

    const menuAberto = navegacaoPrincipal.classList.toggle("menu-aberto");

    //atualizar o estado do botao usando arial
    botaoMenu.setAttribute("aria-expanded", menuAberto)

    /* EXERCICIO! */
    /* Se o menu estiver aberto, mostre o botão ✖*/
    /* Se o menu estiver fechado, mostre o botão ☰ menu*/

    if (menuAberto) {
        botaoMenu.textContent = " ✖ fechar";

    } else {
        botaoMenu.textContent = "☰ menu"
    }


})


/* versao 4: script para contagem de favorito */

//selecinando o elemento que apresentando de favorito

const quantidadeFavoritos = document.querySelector("#quantidade-favoritos")

function atualizarContadorFavoritos() {

    //guardar em memoria a contagem, começando do 0
    let quantidade = 0

    //percorrer todos os cards, inclusive os ocultos pelos filtros
    cards.forEach(function (card) {

        if (card.classList.contains("favoritado")) {
            //se possuir, icrementos
            quantidade++;

        }
    });

    quantidadeFavoritos.textContent = quantidade

}
/* versao 5  */

const tituloCuriosidadeAleatoria = document.querySelector("#titulo-curiosidade-aleatoria")

const explicacaoCuriosidadeAleatoria = document.querySelector("#explicacao-curiosidade-aleatoria")

const botaoCuriosidadeAleatoria = document.querySelector(".botao-curiosidade-aleatoria")

//lista de curiosidaes a serem usadas pela 
const curiosidadesUniverso = [
  {
    titulo: "A luz do Sol não chega instantaneamente à Terra",
    explicacao: "A luz viaja pelo espaço e leva cerca de 8 minutos para chegar até nós."
  },
  {
    titulo: "Em Vênus, um dia é mais longo que um ano",
    explicacao: "Vênus leva cerca de 243 dias terrestres para girar uma vez em torno do próprio eixo e cerca de 225 dias para completar uma órbita ao redor do Sol."
  },
  {
    titulo: "Marte tem duas luas pequenas",
    explicacao: "As luas de Marte se chamam Fobos e Deimos. Elas têm formas irregulares, diferentes da forma quase esférica da Lua da Terra."
  },
  {
    titulo: "Júpiter tem uma tempestade gigante",
    explicacao: "A Grande Mancha Vermelha é uma enorme tempestade na atmosfera de Júpiter. Ela é mais larga que a Terra e vem sendo observada há séculos."
  },
  {
    titulo: "Europa pode esconder um oceano",
    explicacao: "A lua Europa, de Júpiter, tem uma crosta de gelo. Observações indicam que pode haver um oceano de água líquida sob essa superfície."
  },
  {
    titulo: "Uma lua de Júpiter é maior que Mercúrio",
    explicacao: "Ganimedes é a maior lua do Sistema Solar. Seu diâmetro é maior que o do planeta Mercúrio."
  },
  {
    titulo: "Os anéis de Saturno são feitos de muitos fragmentos",
    explicacao: "Eles contêm bilhões de pedaços de gelo e rocha, desde grãos muito pequenos até blocos enormes."
  },
  {
    titulo: "A Lua mantém quase sempre a mesma face voltada para a Terra",
    explicacao: "A Lua leva praticamente o mesmo tempo para girar em torno de si e para dar uma volta ao redor da Terra. Por isso, vemos quase sempre o mesmo hemisfério."
  },
  {
    titulo: "Mercúrio pode ter gelo em crateras escuras",
    explicacao: "Em crateras profundas próximas aos polos, há regiões que nunca recebem luz solar direta. Essas áreas podem conservar gelo de água apesar do calor em outras partes do planeta."
  },
  {
    titulo: "O Sol também se move pela galáxia",
    explicacao: "O Sol e seu sistema planetário orbitam o centro da Via Láctea. Uma volta completa leva cerca de 230 milhões de anos terrestres."
  },
  {
    titulo: "A Via Láctea é uma galáxia espiral barrada",
    explicacao: "Ela tem uma região central alongada, em forma de barra, e braços espirais. O Sistema Solar fica numa região chamada Braço de Órion."
  },
  {
    titulo: "Há planetas que orbitam duas estrelas",
    explicacao: "Alguns exoplanetas, que são planetas fora do Sistema Solar, orbitam um par de estrelas em vez de uma estrela só."
  }
];
console.log(curiosidadesUniverso)


function exibirCuriosidadeAleatoria() {

    const indiceAleatorio = Math.floor(Math.random() * curiosidadesUniverso.length)
    console.log(indiceAleatorio)

    const curiosidadeEscolhida =curiosidadesUniverso[indiceAleatorio]
    tituloCuriosidadeAleatoria.textContent = curiosidadeEscolhida.titulo
    explicacaoCuriosidadeAleatoria.textContent = curiosidadeEscolhida.explicacao

}

botaoCuriosidadeAleatoria.addEventListener("click", exibirCuriosidadeAleatoria)

exibirCuriosidadeAleatoria()