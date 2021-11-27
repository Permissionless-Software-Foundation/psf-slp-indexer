/*
  This library controls the biz logic around starting and stopping the app.
  It handles graceful shutdown, detecting all the different SIG signals for
  shutting down.
*/

// Public npm libraries
const readline = require('readline')

let _this

class StartStop {
  constructor () {
    this.stopIndexing = false

    _this = this
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

    if (process.stdin.isTTY) {
      process.stdin.setRawMode(true)
    }

    process.stdin.on('keypress', (str, key) => {
      if (key.name === 'q') {
        console.log(
          'q key detected. Will stop indexing after processing current block.'
        )
        _this.stopIndexing = true
      }

      // Exit immediately if Ctrl+C is pressed.
      if (key.ctrl && key.name === 'c') {
        process.exit(0)
      }
    })

    // Return true to signal the function exited successfully.
    return true
  }
}

module.exports = StartStop
