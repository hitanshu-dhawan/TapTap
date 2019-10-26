var keyData = {
    a: {
        sound: new Howl({
            src: ['sounds/flash-2.mp3']
        })
    },
    b: {
        sound: new Howl({
            src: ['sounds/corona.mp3']
        })
    },
    c: {
        sound: new Howl({
            src: ['sounds/splits.mp3']
        })
    },
    d: {
        sound: new Howl({
            src: ['sounds/ufo.mp3']
        })
    },
    e: {
        sound: new Howl({
            src: ['sounds/moon.mp3']
        })
    },
    f: {
        sound: new Howl({
            src: ['sounds/piston-2.mp3']
        })
    },
    g: {
        sound: new Howl({
            src: ['sounds/bubbles.mp3']
        })
    },
    h: {
        sound: new Howl({
            src: ['sounds/strike.mp3']
        })
    },
    i: {
        sound: new Howl({
            src: ['sounds/squiggle.mp3']
        })
    },
    j: {
        sound: new Howl({
            src: ['sounds/prism-2.mp3']
        })
    },
    k: {
        sound: new Howl({
            src: ['sounds/pinwheel.mp3']
        })
    },
    l: {
        sound: new Howl({
            src: ['sounds/zig-zag.mp3']
        })
    },
    m: {
        sound: new Howl({
            src: ['sounds/prism-3.mp3']
        })
    },
    n: {
        sound: new Howl({
            src: ['sounds/confetti.mp3']
        })
    },
    o: {
        sound: new Howl({
            src: ['sounds/glimmer.mp3']
        })
    },
    p: {
        sound: new Howl({
            src: ['sounds/dotted-spiral.mp3']
        })
    },
    q: {
        sound: new Howl({
            src: ['sounds/flash-1.mp3']
        })
    },
    r: {
        sound: new Howl({
            src: ['sounds/piston-1.mp3']
        })
    },
    s: {
        sound: new Howl({
            src: ['sounds/veil.mp3']
        })
    },
    t: {
        sound: new Howl({
            src: ['sounds/timer.mp3']
        })
    },
    u: {
        sound: new Howl({
            src: ['sounds/prism-1.mp3']
        })
    },
    v: {
        sound: new Howl({
            src: ['sounds/piston-3.mp3']
        })
    },
    w: {
        sound: new Howl({
            src: ['sounds/clay.mp3']
        })
    },
    x: {
        sound: new Howl({
            src: ['sounds/wipe.mp3']
        })
    },
    y: {
        sound: new Howl({
            src: ['sounds/suspension.mp3']
        })
    },
    z: {
        sound: new Howl({
            src: ['sounds/flash-3.mp3']
        })
    }
};

var pressAtoZDiv = document.getElementById("press-a2z");
var githubDiv = document.getElementById("github-link");

var divsTimerID = null;
var divsTimeOut = 3 * 1000; // 3 secs

function makeDivsInvisible() {
    pressAtoZDiv.classList.add("hidden");
    githubDiv.classList.add("hidden");
}

function makeDivsVisible() {
    pressAtoZDiv.classList.remove("hidden");
    githubDiv.classList.remove("hidden");
}

function onKeyDown(event) {
    if (keyData[event.key]) {
        makeDivsInvisible();
        if (divsTimerID) clearTimeout(divsTimerID);
        divsTimerID = setTimeout(makeDivsVisible, divsTimeOut);
        keyData[event.key].sound.play();
    }
}
