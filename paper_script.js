var keyData = {
    a: {
        shape: null,
        draw: function() {
        },
        animate: function() {
        },
        sound: new Howl({
            src: ['sounds/flash-2.mp3']
        })
    },
    b: {
        shape: null,
        draw: function() {
        },
        animate: function() {
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
        shape1: null,
        shape2: null,
        shape3: null,
        point_x: null,
        growing: null,
        draw: function() {
            var limit = 500;
            keyData.f.point_x = view.center.x+limit;
            keyData.f.growing = true;
            if(keyData.f.shape1) keyData.f.shape1.remove();
            if(keyData.f.shape2) keyData.f.shape2.remove();
            if(keyData.f.shape3) keyData.f.shape3.remove();
            keyData.f.shape1 = new Path.Line();
            keyData.f.shape2 = new Path.Line();
            keyData.f.shape3 = new Path.Line();
        },
        animate: function() {
            var limit = 500;
            var speed = 100;
            var spacing = 90;
            if(keyData.f.shape1 && keyData.f.shape2 && keyData.f.shape3) {
                keyData.f.shape1.remove();
                keyData.f.shape2.remove();
                keyData.f.shape3.remove();
                if(keyData.f.growing) {
                    keyData.f.shape1 = new Path.Line({
                        from: [keyData.f.point_x,view.center.y-spacing],
                        to: [view.center.x+limit,view.center.y-spacing],
                        strokeColor: "white",
                        strokeWidth: 60
                    });
                    keyData.f.shape2 = new Path.Line({
                        from: [keyData.f.point_x,view.center.y],
                        to: [view.center.x+limit,view.center.y],
                        strokeColor: "white",
                        strokeWidth: 60
                    });
                    keyData.f.shape3 = new Path.Line({
                        from: [keyData.f.point_x,view.center.y+spacing],
                        to: [view.center.x+limit,view.center.y+spacing],
                        strokeColor: "white",
                        strokeWidth: 60
                    });
                    keyData.f.point_x -= speed;
                    if(keyData.f.point_x <= view.center.x-limit) {
                        keyData.f.growing = false;
                        keyData.f.point_x = view.center.x+limit;
                    }
                }
                else {
                    keyData.f.shape1 = new Path.Line({
                        from: [view.center.x-limit,view.center.y-spacing],
                        to: [keyData.f.point_x,view.center.y-spacing],
                        strokeColor: "white",
                        strokeWidth: 60
                    });
                    keyData.f.shape2 = new Path.Line({
                        from: [view.center.x-limit,view.center.y],
                        to: [keyData.f.point_x,view.center.y],
                        strokeColor: "white",
                        strokeWidth: 60
                    });
                    keyData.f.shape3 = new Path.Line({
                        from: [view.center.x-limit,view.center.y+spacing],
                        to: [keyData.f.point_x,view.center.y+spacing],
                        strokeColor: "white",
                        strokeWidth: 60
                    });
                    keyData.f.point_x -= speed;
                    if(keyData.f.point_x <= view.center.x-limit) {
                        keyData.f.shape1.remove();
                        keyData.f.shape2.remove();
                        keyData.f.shape3.remove();
                        keyData.f.shape1 = null;
                        keyData.f.shape2 = null;
                        keyData.f.shape3 = null;
                    }
                }
            }
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
            if(keyData.j.shape) keyData.j.shape.remove();
            keyData.j.shape = new Path.RegularPolygon({
                center: view.center,
                sides: 4,
                radius: 1,
                strokeColor: "black",
                strokeWidth: 3
            });
        },
        animate: function() {
            if(keyData.j.shape) {
                keyData.j.shape.rotate(-5);
                keyData.j.shape.scale(1.1);
                keyData.j.shape.opacity *= 0.99;
            }
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
            if(keyData.m.shape) keyData.m.shape.remove();
            keyData.m.shape = new Path.RegularPolygon({
                center: view.center,
                sides: 5,
                radius: 1,
                strokeColor: "black",
                strokeWidth: 2
            });
        },
        animate: function() {
            if(keyData.m.shape) {
                keyData.m.shape.rotate(5);
                keyData.m.shape.scale(1.1);
                keyData.m.shape.opacity *= 0.99;
            }
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
        point_x: null,
        growing: null,
        draw: function() {
            var limit = 500;
            keyData.r.point_x = view.center.x-limit;
            keyData.r.growing = true;
            if(keyData.r.shape) keyData.r.shape.remove();
            keyData.r.shape = new Path.Line();
        },
        animate: function() {
            var limit = 500;
            var speed = 100;
            if(keyData.r.shape) {
                keyData.r.shape.remove();
                if(keyData.r.growing) {
                    keyData.r.shape = new Path.Line({
                        from: [view.center.x-limit,view.center.y],
                        to: [keyData.r.point_x,view.center.y],
                        strokeColor: "white",
                        strokeWidth: 200
                    });
                    keyData.r.point_x += speed;
                    if(keyData.r.point_x >= view.center.x+limit) {
                        keyData.r.growing = false;
                        keyData.r.point_x = view.center.x-limit;
                    }
                }
                else {
                    keyData.r.shape = new Path.Line({
                        from: [keyData.r.point_x,view.center.y],
                        to: [view.center.x+limit,view.center.y],
                        strokeColor: "white",
                        strokeWidth: 200
                    });
                    keyData.r.point_x += speed;
                    if(keyData.r.point_x >= view.center.x+limit) {
                        keyData.r.shape.remove();
                        keyData.r.shape = null;
                    }
                }
            }
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
            if(keyData.u.shape) keyData.u.shape.remove();
            keyData.u.shape = new Path.RegularPolygon({
                center: view.center,
                sides: 3,
                radius: 1,
                strokeColor: "black",
                strokeWidth: 4
            });
        },
        animate: function() {
            if(keyData.u.shape) {
                keyData.u.shape.rotate(5);
                keyData.u.shape.scale(1.1);
                keyData.u.shape.opacity *= 0.99;
            }
        },
        sound: new Howl({
            src: ['sounds/prism-1.mp3']
        })
    },
    v: { //TODO
        shape1: null,
        shape2: null,
        shape3: null,
        shape4: null,
        shape5: null,
        point_x: null,
        growing: null,
        draw: function() {
            var limit = 500;
            keyData.v.point_x = view.center.x-limit;
            keyData.v.growing = true;
            if(keyData.v.shape1) keyData.v.shape1.remove();
            if(keyData.v.shape2) keyData.v.shape2.remove();
            if(keyData.v.shape3) keyData.v.shape3.remove();
            if(keyData.v.shape4) keyData.v.shape4.remove();
            if(keyData.v.shape5) keyData.v.shape5.remove();
            keyData.v.shape1 = new Path.Line();
            keyData.v.shape2 = new Path.Line();
            keyData.v.shape3 = new Path.Line();
            keyData.v.shape4 = new Path.Line();
            keyData.v.shape5 = new Path.Line();
        },
        animate: function() {
            var limit = 500;
            var speed = 100;
            var spacing = 80;
            if(keyData.v.shape1 && keyData.v.shape2 && keyData.v.shape3 && keyData.v.shape4 && keyData.v.shape5) {
                keyData.v.shape1.remove();
                keyData.v.shape2.remove();
                keyData.v.shape3.remove();
                keyData.v.shape4.remove();
                keyData.v.shape5.remove();
                if(keyData.v.growing) {
                    keyData.v.shape1 = new Path.Line({
                        from: [view.center.x-limit,view.center.y-spacing*2],
                        to: [keyData.v.point_x,view.center.y-spacing*2],
                        strokeColor: "white",
                        strokeWidth: 50
                    });
                    keyData.v.shape2 = new Path.Line({
                        from: [view.center.x-limit,view.center.y-spacing],
                        to: [keyData.v.point_x,view.center.y-spacing],
                        strokeColor: "white",
                        strokeWidth: 50
                    });
                    keyData.v.shape3 = new Path.Line({
                        from: [view.center.x-limit,view.center.y],
                        to: [keyData.v.point_x,view.center.y],
                        strokeColor: "white",
                        strokeWidth: 50
                    });
                    keyData.v.shape4 = new Path.Line({
                        from: [view.center.x-limit,view.center.y+spacing],
                        to: [keyData.v.point_x,view.center.y+spacing],
                        strokeColor: "white",
                        strokeWidth: 50
                    });
                    keyData.v.shape5 = new Path.Line({
                        from: [view.center.x-limit,view.center.y+spacing*2],
                        to: [keyData.v.point_x,view.center.y+spacing*2],
                        strokeColor: "white",
                        strokeWidth: 50
                    });
                    keyData.v.point_x += speed;
                    if(keyData.v.point_x >= view.center.x+limit) {
                        keyData.v.growing = false;
                        keyData.v.point_x = view.center.x-limit;
                    }
                }
                else {
                    keyData.v.shape1 = new Path.Line({
                        from: [keyData.v.point_x,view.center.y-spacing*2],
                        to: [view.center.x+limit,view.center.y-spacing*2],
                        strokeColor: "white",
                        strokeWidth: 50
                    });
                    keyData.v.shape2 = new Path.Line({
                        from: [keyData.v.point_x,view.center.y-spacing],
                        to: [view.center.x+limit,view.center.y-spacing],
                        strokeColor: "white",
                        strokeWidth: 50
                    });
                    keyData.v.shape3 = new Path.Line({
                        from: [keyData.v.point_x,view.center.y],
                        to: [view.center.x+limit,view.center.y],
                        strokeColor: "white",
                        strokeWidth: 50
                    });
                    keyData.v.shape4 = new Path.Line({
                        from: [keyData.v.point_x,view.center.y+spacing],
                        to: [view.center.x+limit,view.center.y+spacing],
                        strokeColor: "white",
                        strokeWidth: 50
                    });
                    keyData.v.shape5 = new Path.Line({
                        from: [keyData.v.point_x,view.center.y+spacing*2],
                        to: [view.center.x+limit,view.center.y+spacing*2],
                        strokeColor: "white",
                        strokeWidth: 50
                    });
                    keyData.v.point_x += speed;
                    if(keyData.v.point_x >= view.center.x+limit) {
                        keyData.v.shape1.remove();
                        keyData.v.shape2.remove();
                        keyData.v.shape3.remove();
                        keyData.v.shape4.remove();
                        keyData.v.shape5.remove();
                        keyData.v.shape1 = null;
                        keyData.v.shape2 = null;
                        keyData.v.shape3 = null;
                        keyData.v.shape4 = null;
                        keyData.v.shape5 = null;
                    }
                }
            }
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
