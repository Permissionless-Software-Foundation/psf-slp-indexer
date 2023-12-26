/*
  This library controls the biz logic around starting and stopping the app.
  It handles graceful shutdown, detecting all the different SIG signals for
  shutting down.
*/

// Public npm libraries
// const readline = require('readline')
import readline from 'readline'

class StartStop {
  constructor () {
    // Encapsulate dependencies
    this.process = process

    this.stopIndexing = false

    // Bind 'this' object to all subfunctions.
    this.initStartStop = this.initStartStop.bind(this)
    this.stopStatus = this.stopStatus.bind(this)
    this.qDetected = this.qDetected.bind(this)
  }

  // Returns the value of the stopIndexing state variable.
  // The main app polls this function to determine if it should shut down.
  stopStatus () {
    return this.stopIndexing
  }

  initStartStop () {
    // Detect 'q' key to stop indexing.
    console.log("Press the 'q' key to stop indexing.")

    readline.emitKeypressEvents(process.stdin)

    if (this.process.stdin.isTTY) {
      this.process.stdin.setRawMode(true)
    }

    this.process.stdin.on('keypress', this.qDetected)
    // this.process.stdin.on('keypress', (str, key) => {
    //   if (key.name === 'q') {
    //     console.log(
    //       'q key detected. Will stop indexing after processing current block.'
    //     )
    //     this.stopIndexing = true
    //   }

    //   // Exit immediately if Ctrl+C is pressed.
    //   if (key.ctrl && key.name === 'c') {
    //     this.process.exit(0)
    //   }
    // })

    // Return true to signal the function exited successfully.
    //   return true
    // }

    return true
  }

  // This is a callback function that is called by the keypress event. It checks
  // to see if the 'q' key has been pressed.
  qDetected (str, key) {
    if (key.name === 'q') {
      console.log(
        'q key detected. Will stop indexing after processing current block.'
      )
      this.stopIndexing = true
    }

    // Exit immediately if Ctrl+C is pressed.
    if (key.ctrl && key.name === 'c') {
      this.process.exit(0)
    }

    return true
  }
}

// module.exports = StartStop
export default StartStop
