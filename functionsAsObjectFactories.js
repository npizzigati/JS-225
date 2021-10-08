function makeCar(rate, brakingRate) {
  const car = {
    speed: 0,
    rate,
    brakingRate,
    accelerate() {
      this.speed += this.rate;
    },
    brake() {
      if (this.speed > this.brakingRate) {
        this.speed -= this.brakingRate;
      } else {
        this.speed = 0;
      }
    },
  };
  return car;
}
