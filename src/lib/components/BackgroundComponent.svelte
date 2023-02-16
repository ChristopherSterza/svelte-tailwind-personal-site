<script>
  import P5 from 'p5-svelte';

  export let isLoading = true;

  let backgroundSystem1;
  let backgroundSystem2;
  let color1 = 'rgba(172, 255, 26, 0.2)';
  let color2 = 'rgba(162, 255, 0, 0.6)';
  let innerWidth;
  let innerHeight;

  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(innerWidth, innerHeight);
      backgroundSystem1 = new ParticleSystem(10, color1);
      backgroundSystem2 = new ParticleSystem(14, color2);

      isLoading = false;
    };

    p5.draw = () => {
      p5.background(30, 200);
      backgroundSystem1.display(0, p5.width, 0, p5.height);
      backgroundSystem2.display(0, p5.width, 0, p5.height);
    };

    p5.windowResized = () => {
      p5.resizeCanvas(innerWidth, innerHeight);
    };

    class ParticleSystem {
      constructor(spawnDuration, color) {
        this.spawnDuration = spawnDuration;
        this.color = color;

        this.particles = [];
        this.spawnTimer = spawnDuration;
      }

      display(spawnXMin, spawnXMax, spawnYMin, spawnYMax) {
        this._spawn(spawnXMin, spawnXMax, spawnYMin, spawnYMax);

        for (let i = 0; i < this.particles.length; i++) {
          let particle = this.particles[i];
          if (particle.state === 2) this.particles.splice(i, 1);
          p5.push();
          p5.translate(p5.width, 0);
          p5.scale(-1, 1);
          particle.display();
          p5.pop();
        }
      }

      _spawn(spawnXMin, spawnXMax, spawnYMin, spawnYMax) {
        this.spawnTimer++;

        if (this.spawnTimer > this.spawnDuration) {
          this.particles.push(
            new Particle(
              p5.random(spawnXMin, spawnXMax),
              p5.random(spawnYMin, spawnYMax),
              p5.random(50, 150),
              p5.random(5, 10),
              this.color,
              p5.random(0.07, 0.12)
            )
          );
          this.spawnTimer = 0;
        }
      }
    }

    class Particle {
      constructor(x, y, len, size, color, speed) {
        this.x1 = x;
        this.y1 = y;
        this.len = len;
        this.size = size;
        this.color = color;
        this.speed = speed;

        this.x2 = this.x1;
        this.y2 = this.y1;

        this.state = 0;
      }

      display() {
        this._animate();
        p5.stroke(this.color);
        p5.strokeWeight(this.size);
        p5.line(this.x1, this.y1, this.x2, this.y2);
      }

      _animate() {
        if (this.state === 0) {
          let targetX = this.x1 + this.len;
          if (this.x2 < targetX)
            this.x2 += this.speed * p5.dist(0, this.x2, 0, targetX);

          let targetY = this.y1 + this.len;
          if (this.y2 < targetY)
            this.y2 += this.speed * p5.dist(0, this.y2, 0, targetY);

          if (this.x2 > targetX - 1 && this.y2 > targetY - 1) this.state++;
        }

        if (this.state === 1) {
          let targetX = this.x2 + 1;
          if (this.x1 < targetX)
            this.x1 += this.speed * p5.dist(0, this.x1, 0, targetX);

          let targetY = this.y2 + 1;
          if (this.y1 < targetY)
            this.y1 += this.speed * p5.dist(0, this.y1, 0, targetY);

          if (this.x1 > targetX - 1 && this.y1 > targetY - 1) this.state++;
        }
      }
    }
  };
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<P5 {sketch} parentDivStyle={'position: fixed; z-index: -1'} />
