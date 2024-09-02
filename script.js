// script.js

// Função para tocar um áudio
function playAudio(url) {
    const audio = new Audio(url);
    audio.play();
}

// URL do áudio (substitua pela URL do seu áudio no GitHub)
const audioUrl = 'https://raw.githubusercontent.com/seu-usuario/seu-repositorio/main/audio.mp3';

// Tocar o áudio quando a página carregar
window.onload = function() {
    playAudio(audioUrl);
};
  
