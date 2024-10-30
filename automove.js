
var jumpscare = false;

AFRAME.registerComponent('auto-move-forward', {
    schema: {
      speed: { type: 'number', default: 0.015 } // Movement speed
    },
  
    tick: function (time, timeDelta) {
      // Get the current position and rotation of the camera
      const position = this.el.getAttribute('position');
      const rotation = this.el.getAttribute('rotation');
  
      // Convert rotation to radians manually
      const rotationYRad = rotation.y * (Math.PI / 180);
  
      // Calculate forward movement based on the camera's rotation
      const dx = -Math.sin(rotationYRad) * this.data.speed;
      const dz = -Math.cos(rotationYRad) * this.data.speed;
  
      // Update the camera's position
      this.el.setAttribute('position', {
        x: position.x + dx,
        y: position.y,
        z: position.z + dz
      });

      const newPosition = this.el.getAttribute('position');
      if(!jumpscare && (newPosition.x > 8.8 && newPosition.x < 11.6) && (newPosition.z > 4.2 && newPosition.z < 7.2)) {
        jumpscare = true;
        JumpscareAnim();
      }
    }
  });

  
  function JumpscareAnim() {
    const spider = document.querySelector("#spider1");
    spider.object3D.position.x = 11.07;
    spider.object3D.position.y = .235;
    spider.object3D.position.z = 5.948;


    document.querySelector('#jumpsound').components.sound.playSound();
    // spider.setAttribute("position", { x: 11.07, y: .235, z: 5.948 });

  }
  