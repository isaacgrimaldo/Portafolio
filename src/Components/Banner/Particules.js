import React from 'react'
import Particles from 'react-particles-js';

import {imgenes} from '../../assets/index'

export const Particules = () => {
    return (
            <Particles
            height="90vh"
            width="100%"
              params ={{

                "particles": {
                    "number": {
                      "value": 28,
                      "density": {
                        "enable": true,
                        "value_area": 1000
                      }
                    },
                    "color": {
                      "value": ["#FF0000"]
                    },
                    "shape": {
                      "type": "images",
                      "image": [
                        {src: imgenes.javascript, width:80},
                        {src: imgenes.css3, width:80},
                        {src: imgenes.html, width:80},
                        {src: imgenes.react, width:80},
                        {src: imgenes.redux, width:80},
                        {src: imgenes.bootstrap, width:80},
                        {src: imgenes.node, width:80}, 
                        {src: imgenes.mongo, width:80},
                        {src: imgenes.firebase, width:80},
                        {src: imgenes.sass, width:80}, 
                      ]
                    },
                    "opacity": {
                      "value": 1,
                      "random": false,
                      "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                      }
                    },
                    "size": {
                      "value": 30,
                      "random": true,
                      "anim": {
                        "enable": false,
                        "speed": 20,
                        "size_min": 0.1,
                        "sync": false
                      }
                    },
                    "line_linked": {
                      "enable": true,
                      "distance": 100,
                      "color": "#ffff",
                      "opacity": 1,
                      "width": 4
                    },
                    "move": {
                      "enable": true,
                      "speed": 3,
                      "direction": "bottom",
                      "random": false,
                      "straight": false,
                      "out_mode": "out",
                      "bounce": false,
                      "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                      }
                    }
                  },
                  "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                     
                      "onclick": {
                        "enable": true,
                        "mode": "push"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 400,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                      },
                      "repulse": {
                        "distance": 200,
                        "duration": 0.4
                      },
                      "push": {
                        "particles_nb": 4
                      },
                      "remove": {
                        "particles_nb": 2
                      }
                    }
                  },
                  "retina_detect": true
                
              }}
            />
    )
}
