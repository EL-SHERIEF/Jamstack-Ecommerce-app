import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim

import { useCallback, useMemo } from "react";
const particals = (props) => {
  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
    
      interactivity: {
        events: {
          onClick: {
            enable: true, // enables the click event
            mode: "push", // adds the particles on click
          },
        },
        modes: {
          push: {
            quantity: 20, // number of particles to add on click
          },
          repulse: {
            distance: 2, // distance of the particles from the cursor
          },
        },
      },
      particles: {
        opacity: {
          value: 1,
          animation: {
            enable: true,
            minimumValue: 0,
            speed: 2,
            startValue: "max",
            destroy: "min"
          }
        },
        size: {
          value: 12,
          random: {
            enable: true,
            minimumValue: 5
          }
        },
        links: {
          enable: false
        },
        life: {
          duration: {
            sync: true,
            value: 5
          },
          count: 1
        },
        move: {
          enable: true,
          gravity: {
            enable: true,
            acceleration: 20
          },
          speed: 80,
          decay: 0.1,
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "destroy",
            top: "none"
          }
        },
        rotate: {
          value: {
            min: 0,
            max: 360
          },
          direction: "random",
          move: true,
          animation: {
            enable: true,
            speed: 60
          }
        },
        tilt: {
          direction: "random",
          enable: true,
          move: true,
          value: {
            min: 0,
            max: 360
          },
          animation: {
            enable: true,
            speed: 60
          }
        },
        roll: {
          darken: {
            enable: true,
            value: 25
          },
          enable: true,
          speed: {
            min: 15,
            max: 25
          }
        },
        wobble: {
          distance: 30,
          enable: true,
          move: true,
          speed: {
            min: -15,
            max: 15
          }
        }, 

        color: {
          value: ["#8132ff", "#350a7a"]
        },



            shape: {
        type: "character",
        character: {
          value: ["💜"]
        }},

      },
    };
  }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default particals;