# Dev Jokenpô

<p align="center">
  Um jogo interativo de Pedra, Papel e Tesoura desenvolvido com JavaScript puro.
</p>

<p align="center">
  <a href="https://paulohashisaka.github.io/dev-jokenpo/">🔗 Acesse a demonstração online</a>
</p>

<p align="center">
  <a href="#-funcionalidades">Funcionalidades</a> ·
  <a href="#-tecnologias">Tecnologias</a> ·
  <a href="#-como-jogar">Como jogar</a>
</p>

## ✨ Sobre o projeto

O **Dev Jokenpô** traz o clássico jogo de Pedra, Papel e Tesoura para o navegador. O jogador escolhe uma das três opções, enquanto o computador faz uma escolha aleatória. A aplicação compara as jogadas, informa o resultado da rodada e atualiza a pontuação.

O projeto foi desenvolvido para praticar condicionais, funções, objetos, números aleatórios e manipulação do DOM com JavaScript.

## 🎮 Funcionalidades

- Escolha entre pedra, papel ou tesoura por meio de botões com emojis.
- Geração aleatória da jogada do computador.
- Comparação automática das regras do jogo.
- Mensagem de vitória, derrota ou empate a cada rodada.
- Placar independente para jogador e computador.
- Interface simples e visualmente responsiva.

## 🛠 Tecnologias

- **HTML5** — estrutura da página e elementos interativos.
- **CSS3** — layout, cores e efeitos visuais.
- **JavaScript** — regras do jogo, sorteio da máquina e atualização do placar.

## ▶️ Como jogar

1. Abra o arquivo `index.html` no navegador.
2. Escolha uma opção: ✊ pedra, 🖐️ papel ou ✌️ tesoura.
3. O computador escolhe uma opção aleatoriamente.
4. Confira o resultado e acompanhe a pontuação.

### Regras

| Jogada | Vence de |
| --- | --- |
| ✊ Pedra | ✌️ Tesoura |
| 🖐️ Papel | ✊ Pedra |
| ✌️ Tesoura | 🖐️ Papel |

Escolhas iguais resultam em empate.

## 🧠 Lógica do jogo

As opções são armazenadas em um objeto e a máquina escolhe uma posição aleatória da lista:

```js
const computerChoice = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS];
const randomIndex = Math.floor(Math.random() * 3);
```

Em seguida, as jogadas são comparadas para determinar o vencedor e atualizar o placar correspondente.

## 📁 Estrutura do projeto

```text
JS Desafio 8 Jokenpo/
├── index.html
├── script.js
├── style.css
└── README.md
```

## 👤 Autor

Desenvolvido por [Paulo Hashisaka](https://github.com/paulohashisaka) durante os estudos de JavaScript.

---

Feito com dedicação para praticar lógica de programação e manipulação do DOM. 🚀
