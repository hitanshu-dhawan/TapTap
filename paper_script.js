var keyData = {
    a: {
        _shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/flash-2.mp3']
        })
    },
    b: {
        _shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/corona.mp3']
        })
    },
    c: {
        _shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/splits.mp3']
        })
    },
    d: {
        _shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/ufo.mp3']
        })
    },
    e: {
        _shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/moon.mp3']
        })
    },
    f: {
        _shape1: null,
        _shape2: null,
        _shape3: null,
        _point_x: null,
        _growing: null,
        draw: function() {
            var limit = 500;
            keyData.f._point_x = view.center.x+limit;
            keyData.f._growing = true;
            if(keyData.f._shape1) keyData.f._shape1.remove();
            if(keyData.f._shape2) keyData.f._shape2.remove();
            if(keyData.f._shape3) keyData.f._shape3.remove();
            keyData.f._shape1 = new Path.Line();
            keyData.f._shape2 = new Path.Line();
            keyData.f._shape3 = new Path.Line();
        },
        animate: function() {
            var limit = 500;
            var speed = 100;
            var spacing = 90;
            if(keyData.f._shape1 && keyData.f._shape2 && keyData.f._shape3) {
                keyData.f._shape1.remove();
                keyData.f._shape2.remove();
                keyData.f._shape3.remove();
                if(keyData.f._growing) {
                    keyData.f._shape1 = new Path.Line({
                        from: [keyData.f._point_x,view.center.y-spacing],
                        to: [view.center.x+limit,view.center.y-spacing],
                        strokeColor: "white",
                        strokeWidth: 60
                    });
                    keyData.f._shape2 = new Path.Line({
                        from: [keyData.f._point_x,view.center.y],
                        to: [view.center.x+limit,view.center.y],
                        strokeColor: "white",
                        strokeWidth: 60
                    });
                    keyData.f._shape3 = new Path.Line({
                        from: [keyData.f._point_x,view.center.y+spacing],
                        to: [view.center.x+limit,view.center.y+spacing],
                        strokeColor: "white",
                        strokeWidth: 60
                    });
                    keyData.f._point_x -= speed;
                    if(keyData.f._point_x <= view.center.x-limit) {
                        keyData.f._growing = false;
                        keyData.f._point_x = view.center.x+limit;
                    }
                }
                else {
                    keyData.f._shape1 = new Path.Line({
                        from: [view.center.x-limit,view.center.y-spacing],
                        to: [keyData.f._point_x,view.center.y-spacing],
                        strokeColor: "white",
                        strokeWidth: 60
                    });
                    keyData.f._shape2 = new Path.Line({
                        from: [view.center.x-limit,view.center.y],
                        to: [keyData.f._point_x,view.center.y],
                        strokeColor: "white",
                        strokeWidth: 60
                    });
                    keyData.f._shape3 = new Path.Line({
                        from: [view.center.x-limit,view.center.y+spacing],
                        to: [keyData.f._point_x,view.center.y+spacing],
                        strokeColor: "white",
                        strokeWidth: 60
                    });
                    keyData.f._point_x -= speed;
                    if(keyData.f._point_x <= view.center.x-limit) {
                        keyData.f._shape1.remove();
                        keyData.f._shape2.remove();
                        keyData.f._shape3.remove();
                        keyData.f._shape1 = null;
                        keyData.f._shape2 = null;
                        keyData.f._shape3 = null;
                    }
                }
            }
        },
        sound: new Howl({
            src: ['sounds/piston-2.mp3']
        })
    },
    g: {
        _shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/bubbles.mp3']
        })
    },
    h: {
        _shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/strike.mp3']
        })
    },
    i: {
        _shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/squiggle.mp3']
        })
    },
    j: {
        _shape: null,
        draw: function() {
            if(keyData.j._shape) keyData.j._shape.remove();
            keyData.j._shape = new Path.RegularPolygon({
                center: view.center,
                sides: 4,
                radius: 1,
                strokeColor: "black",
                strokeWidth: 3
            });
        },
        animate: function() {
            if(keyData.j._shape) {
                keyData.j._shape.rotate(-5);
                keyData.j._shape.scale(1.1);
                keyData.j._shape.opacity *= 0.99;
            }
        },
        sound: new Howl({
            src: ['sounds/prism-2.mp3']
        })
    },
    k: {
        _shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/pinwheel.mp3']
        })
    },
    l: {
        _shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/zig-zag.mp3']
        })
    },
    m: {
        _shape: null,
        draw: function() {
            if(keyData.m._shape) keyData.m._shape.remove();
            keyData.m._shape = new Path.RegularPolygon({
                center: view.center,
                sides: 5,
                radius: 1,
                strokeColor: "black",
                strokeWidth: 2
            });
        },
        animate: function() {
            if(keyData.m._shape) {
                keyData.m._shape.rotate(5);
                keyData.m._shape.scale(1.1);
                keyData.m._shape.opacity *= 0.99;
            }
        },
        sound: new Howl({
            src: ['sounds/prism-3.mp3']
        })
    },
    n: {
        _shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/confetti.mp3']
        })
    },
    o: {
        _shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/glimmer.mp3']
        })
    },
    p: {
        _shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/dotted-spiral.mp3']
        })
    },
    q: {
        _shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/flash-1.mp3']
        })
    },
    r: {
        _shape: null,
        _point_x: null,
        _growing: null,
        draw: function() {
            var limit = 500;
            keyData.r._point_x = view.center.x-limit;
            keyData.r._growing = true;
            if(keyData.r._shape) keyData.r._shape.remove();
            keyData.r._shape = new Path.Line();
        },
        animate: function() {
            var limit = 500;
            var speed = 100;
            if(keyData.r._shape) {
                keyData.r._shape.remove();
                if(keyData.r._growing) {
                    keyData.r._shape = new Path.Line({
                        from: [view.center.x-limit,view.center.y],
                        to: [keyData.r._point_x,view.center.y],
                        strokeColor: "white",
                        strokeWidth: 100
                    });
                    keyData.r._point_x += speed;
                    if(keyData.r._point_x >= view.center.x+limit) {
                        keyData.r._growing = false;
                        keyData.r._point_x = view.center.x-limit;
                    }
                }
                else {
                    keyData.r._shape = new Path.Line({
                        from: [keyData.r._point_x,view.center.y],
                        to: [view.center.x+limit,view.center.y],
                        strokeColor: "white",
                        strokeWidth: 100
                    });
                    keyData.r._point_x += speed;
                    if(keyData.r._point_x >= view.center.x+limit) {
                        keyData.r._shape.remove();
                        keyData.r._shape = null;
                    }
                }
            }
        },
        sound: new Howl({
            src: ['sounds/piston-1.mp3']
        })
    },
    s: {
        _shape: null,
        _point_y: null,
        _growing: null,
        draw: function() {
            keyData.s._point_y = 0;
            keyData.s._growing = true;
            if(keyData.s._shape) keyData.s._shape.remove();
            keyData.s._shape = new Path.Line();
        },
        animate: function() {
            var speed = 35;
            var pause = 700;
            if(keyData.s._shape) {
                keyData.s._shape.remove();
                if(keyData.s._growing) {
                    keyData.s._shape = new Path.Line({
                        from: [view.center.x,0],
                        to: [view.center.x,keyData.s._point_y],
                        strokeColor: "#c5eff7",
                        strokeWidth: view.size.width
                    });
                    keyData.s._shape.sendToBack();
                    keyData.s._point_y += speed;
                    if(keyData.s._point_y >= view.size.height+pause) {
                        keyData.s._growing = false;
                        keyData.s._point_y = 0;
                    }
                }
                else {
                    keyData.s._shape = new Path.Line({
                        from: [view.center.x,keyData.s._point_y],
                        to: [view.center.x,view.size.height],
                        strokeColor: "#c5eff7",
                        strokeWidth: view.size.width
                    });
                    keyData.s._shape.sendToBack();
                    keyData.s._point_y += speed;
                    if(keyData.s._point_y >= view.size.height) {
                        keyData.s._shape.remove();
                        keyData.s._shape = null;
                    }
                }
            }
        },
        sound: new Howl({
            src: ['sounds/veil.mp3']
        })
    },
    t: {
        _shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/timer.mp3']
        })
    },
    u: {
        _shape: null,
        draw: function() {
            if(keyData.u._shape) keyData.u._shape.remove();
            keyData.u._shape = new Path.RegularPolygon({
                center: view.center,
                sides: 3,
                radius: 1,
                strokeColor: "black",
                strokeWidth: 4
            });
        },
        animate: function() {
            if(keyData.u._shape) {
                keyData.u._shape.rotate(5);
                keyData.u._shape.scale(1.1);
                keyData.u._shape.opacity *= 0.99;
            }
        },
        sound: new Howl({
            src: ['sounds/prism-1.mp3']
        })
    },
    v: {
        _shape1: null,
        _shape2: null,
        _shape3: null,
        _shape4: null,
        _shape5: null,
        _point_x: null,
        _growing: null,
        draw: function() {
            var limit = 500;
            keyData.v._point_x = view.center.x-limit;
            keyData.v._growing = true;
            if(keyData.v._shape1) keyData.v._shape1.remove();
            if(keyData.v._shape2) keyData.v._shape2.remove();
            if(keyData.v._shape3) keyData.v._shape3.remove();
            if(keyData.v._shape4) keyData.v._shape4.remove();
            if(keyData.v._shape5) keyData.v._shape5.remove();
            keyData.v._shape1 = new Path.Line();
            keyData.v._shape2 = new Path.Line();
            keyData.v._shape3 = new Path.Line();
            keyData.v._shape4 = new Path.Line();
            keyData.v._shape5 = new Path.Line();
        },
        animate: function() {
            var limit = 500;
            var speed = 100;
            var spacing = 80;
            if(keyData.v._shape1 && keyData.v._shape2 && keyData.v._shape3 && keyData.v._shape4 && keyData.v._shape5) {
                keyData.v._shape1.remove();
                keyData.v._shape2.remove();
                keyData.v._shape3.remove();
                keyData.v._shape4.remove();
                keyData.v._shape5.remove();
                if(keyData.v._growing) {
                    keyData.v._shape1 = new Path.Line({
                        from: [view.center.x-limit,view.center.y-spacing*2],
                        to: [keyData.v._point_x,view.center.y-spacing*2],
                        strokeColor: "white",
                        strokeWidth: 50
                    });
                    keyData.v._shape2 = new Path.Line({
                        from: [view.center.x-limit,view.center.y-spacing],
                        to: [keyData.v._point_x,view.center.y-spacing],
                        strokeColor: "white",
                        strokeWidth: 50
                    });
                    keyData.v._shape3 = new Path.Line({
                        from: [view.center.x-limit,view.center.y],
                        to: [keyData.v._point_x,view.center.y],
                        strokeColor: "white",
                        strokeWidth: 50
                    });
                    keyData.v._shape4 = new Path.Line({
                        from: [view.center.x-limit,view.center.y+spacing],
                        to: [keyData.v._point_x,view.center.y+spacing],
                        strokeColor: "white",
                        strokeWidth: 50
                    });
                    keyData.v._shape5 = new Path.Line({
                        from: [view.center.x-limit,view.center.y+spacing*2],
                        to: [keyData.v._point_x,view.center.y+spacing*2],
                        strokeColor: "white",
                        strokeWidth: 50
                    });
                    keyData.v._point_x += speed;
                    if(keyData.v._point_x >= view.center.x+limit) {
                        keyData.v._growing = false;
                        keyData.v._point_x = view.center.x-limit;
                    }
                }
                else {
                    keyData.v._shape1 = new Path.Line({
                        from: [keyData.v._point_x,view.center.y-spacing*2],
                        to: [view.center.x+limit,view.center.y-spacing*2],
                        strokeColor: "white",
                        strokeWidth: 50
                    });
                    keyData.v._shape2 = new Path.Line({
                        from: [keyData.v._point_x,view.center.y-spacing],
                        to: [view.center.x+limit,view.center.y-spacing],
                        strokeColor: "white",
                        strokeWidth: 50
                    });
                    keyData.v._shape3 = new Path.Line({
                        from: [keyData.v._point_x,view.center.y],
                        to: [view.center.x+limit,view.center.y],
                        strokeColor: "white",
                        strokeWidth: 50
                    });
                    keyData.v._shape4 = new Path.Line({
                        from: [keyData.v._point_x,view.center.y+spacing],
                        to: [view.center.x+limit,view.center.y+spacing],
                        strokeColor: "white",
                        strokeWidth: 50
                    });
                    keyData.v._shape5 = new Path.Line({
                        from: [keyData.v._point_x,view.center.y+spacing*2],
                        to: [view.center.x+limit,view.center.y+spacing*2],
                        strokeColor: "white",
                        strokeWidth: 50
                    });
                    keyData.v._point_x += speed;
                    if(keyData.v._point_x >= view.center.x+limit) {
                        keyData.v._shape1.remove();
                        keyData.v._shape2.remove();
                        keyData.v._shape3.remove();
                        keyData.v._shape4.remove();
                        keyData.v._shape5.remove();
                        keyData.v._shape1 = null;
                        keyData.v._shape2 = null;
                        keyData.v._shape3 = null;
                        keyData.v._shape4 = null;
                        keyData.v._shape5 = null;
                    }
                }
            }
        },
        sound: new Howl({
            src: ['sounds/piston-3.mp3']
        })
    },
    w: {
        _shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/clay.mp3']
        })
    },
    x: {
        _shape: null,
        _point_x: null,
        _growing: null,
        draw: function() {
            keyData.x._point_x = 0;
            keyData.x._growing = true;
            if(keyData.x._shape) keyData.x._shape.remove();
            keyData.x._shape = new Path.Line();
        },
        animate: function() {
            var speed = 50;
            var pause = 900;
            if(keyData.x._shape) {
                keyData.x._shape.remove();
                if(keyData.x._growing) {
                    keyData.x._shape = new Path.Line({
                        from: [0,view.center.y],
                        to: [keyData.x._point_x,view.center.y],
                        strokeColor: "#be90d4",
                        strokeWidth: view.size.height
                    });
                    keyData.x._shape.sendToBack();
                    keyData.x._point_x += speed;
                    if(keyData.x._point_x >= view.size.width+pause) {
                        keyData.x._growing = false;
                        keyData.x._point_x = 0;
                    }
                }
                else {
                    keyData.x._shape = new Path.Line({
                        from: [keyData.x._point_x,view.center.y],
                        to: [view.size.width,view.center.y],
                        strokeColor: "#be90d4",
                        strokeWidth: view.size.height
                    });
                    keyData.x._shape.sendToBack();
                    keyData.x._point_x += speed;
                    if(keyData.x._point_x >= view.size.width) {
                        keyData.x._shape.remove();
                        keyData.x._shape = null;
                    }
                }
            }
        },
        sound: new Howl({
            src: ['sounds/wipe.mp3']
        })
    },
    y: {
        _shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/suspension.mp3']
        })
    },
    z: {
        _shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/flash-3.mp3']
        })
    }
};

var pressAtoZDiv = document.getElementById("press-a2z");
var githubDiv = document.getElementById("github-link");

var divsTimerID = null;
var divsTimeOut = 10*1000; // 10 secs

function makeDivsInvisible() {
    pressAtoZDiv.classList.add("hidden");
    githubDiv.classList.add("hidden");
}

function makeDivsVisible() {
    pressAtoZDiv.classList.remove("hidden");
    githubDiv.classList.remove("hidden");
}

function onKeyDown(event) {
    if(keyData[event.key]) {
        makeDivsInvisible();
        if(divsTimerID) clearTimeout(divsTimerID);
        divsTimerID = setTimeout(makeDivsVisible,divsTimeOut);
        keyData[event.key].draw();
        keyData[event.key].sound.play();
    }
}

function onFrame(event) {
    for(var key="a".charCodeAt(0) ; key <= "z".charCodeAt(0) ; key++)
        keyData[String.fromCharCode(key)].animate();
}
