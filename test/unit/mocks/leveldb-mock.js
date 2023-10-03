/*
  Mocks for LevelDB.
*/

class MockLevel {
  get () {
    return {}
  }

  put () {
    return {}
  }

  del () {
    return {}
  }

  createReadStream () {
    const stream = {
      on: () => {}
    }

    return stream
  }
}

export default MockLevel
