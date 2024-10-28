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
    }
  });
  