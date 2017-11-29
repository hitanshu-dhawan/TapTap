var keyData = {
    a: {
        shape: null,
        draw: function() {
            if(keyData.a.shape) keyData.a.shape.remove();
            keyData.a.shape = new Path.Circle({
                center: view.center,
                radius: 400,
                fillColor: "red"
            });
        },
        animate: function() {
            if(keyData.a.shape) {
                keyData.a.shape.scale(0.92);
                keyData.a.shape.fillColor.hue++;
            }
        },
        sound: new Howl({
            src: ['sounds/flash-2.mp3']
        })
    },
    b: {
        shape: null,
        draw: function() {
            if(keyData.b.shape) keyData.b.shape.remove();
            keyData.b.shape = new Path.RegularPolygon({
                center: view.center,
                sides: 6,
                radius: 1,
                strokeColor: "black"
            });
        },
        animate: function() {
            if(keyData.b.shape) {
                keyData.b.shape.rotate(5);
                keyData.b.shape.scale(1.1);
                keyData.b.shape.opacity *= 0.97;
            }
        },
        sound: new Howl({
            src: ['sounds/corona.mp3']
        })
    },
    c: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/splits.mp3']
        })
    },
    d: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/ufo.mp3']
        })
    },
    e: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/moon.mp3']
        })
    },
    f: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/piston-2.mp3']
        })
    },
    g: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/bubbles.mp3']
        })
    },
    h: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/strike.mp3']
        })
    },
    i: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/squiggle.mp3']
        })
    },
    j: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/prism-2.mp3']
        })
    },
    k: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/pinwheel.mp3']
        })
    },
    l: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/zig-zag.mp3']
        })
    },
    m: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/prism-3.mp3']
        })
    },
    n: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/confetti.mp3']
        })
    },
    o: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/glimmer.mp3']
        })
    },
    p: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/dotted-spiral.mp3']
        })
    },
    q: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/flash-1.mp3']
        })
    },
    r: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/piston-1.mp3']
        })
    },
    s: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/veil.mp3']
        })
    },
    t: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/timer.mp3']
        })
    },
    u: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/prism-1.mp3']
        })
    },
    v: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/piston-3.mp3']
        })
    },
    w: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/clay.mp3']
        })
    },
    x: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/wipe.mp3']
        })
    },
    y: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/suspension.mp3']
        })
    },
    z: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/flash-3.mp3']
        })
    }
};


function onKeyDown(event) {
    if(keyData[event.key]) {
        keyData[event.key].draw();
        keyData[event.key].sound.play();
    }
}

function onFrame(event) {
    for(var key="a".charCodeAt(0) ; key <= "z".charCodeAt(0) ; key++)
        keyData[String.fromCharCode(key)].animate();
}
