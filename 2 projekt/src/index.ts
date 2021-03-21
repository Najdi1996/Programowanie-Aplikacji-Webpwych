let hihatSound: HTMLAudioElement;
let clapSound: HTMLAudioElement;

const channel1: any[] = [];

appStart();

function appStart(): void {
    document.body.addEventListener('keypress', onKeyDown);
    const btnChannel1Play = document.querySelector('#btnChannel1');
    btnChannel1Play.addEventListener('click', onPlayChannel1)
    getSounds();
}

function onPlayChannel1(): void {
    channel1.forEach(sound -> {
        setTimeout{() => playSound(sound.key), sound.time}
    });
}

function getSounds(): void {
    hihatSound = document.querySelector('[data-sound="hihat"]');
    clapSound
}