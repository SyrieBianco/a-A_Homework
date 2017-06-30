class Clock {
  constructor() {
    const startTime = new Date();
    this.hours = startTime.getHours();
    this.minutes = startTime.getMinutes();
    this.seconds = startTime.getSeconds();
    this.printTime(); // print initial time
    this._tick(); // increment time, then print each subsequent time
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    // const boundTick = this._tick.bind(this);
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours} : ${this.minutes} : ${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds ++;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes ++;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours ++;
    }
    if (this.hours === 24) {
      this.hours = 0;
    }
    this.printTime();
  }
}

// const clock = new Clock();
