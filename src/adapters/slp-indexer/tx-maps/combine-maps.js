/*
  This stand-alone app is used to compare two transaction maps, and combine
  them.
*/

const map1 = require('./slp-tx-570631-v2.json')
const map2 = require('./slp-tx-601455-v1.json')

const fs = require('fs')

const combinedMap = []

async function combineMaps () {
  try {
    // console.log(`map1: ${JSON.stringify(map1, null, 2)}`)

    // Get block heights from each map.
    const map1Heights = map1.map(x => x.height)
    const map2Heights = map2.map(x => x.height)

    // Combine both arrays.
    let allHeights = map1Heights.concat(map2Heights)

    // Remove duplicates. https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
    allHeights = [...new Set(allHeights)]
    // console.log(`allHeights: ${JSON.stringify(allHeights, null, 2)}`)
    // console.log(`map1Heights: ${map1Heights.length}, map2Heights: ${map2Heights.length}, allHeights: ${allHeights.length}`)

    // Loop through all block heights.
    for (let i = 0; i < allHeights.length; i++) {
    // for (let i = 0; i < 10; i++) {
      const thisHeight = allHeights[i]
      // console.log('thisHeight: ', thisHeight)

      // Get txs for this block height.
      const map1Txs = map1.filter(x => x.height === thisHeight)
      const map2Txs = map2.filter(x => x.height === thisHeight)
      // console.log(`map1Txs: ${JSON.stringify(map1Txs, null, 2)}`)
      // console.log(`map2Txs: ${JSON.stringify(map2Txs, null, 2)}`)

      // If map1 has no txs for this height, just use map2.
      if (!map1Txs.length) {
        const thisObj = {
          height: thisHeight,
          txs: map2Txs[0].txs
        }
        combinedMap.push(thisObj)
        continue
      }

      // If map2 has no txs for this hight, just use map1.
      if (!map2Txs.length) {
        const thisObj = {
          height: thisHeight,
          txs: map1Txs[0].txs
        }
        combinedMap.push(thisObj)
        continue
      }

      // Combine transactions from both maps.
      let allTxs = map1Txs[0].txs.concat(map2Txs[0].txs)

      // Remove duplicates
      allTxs = [...new Set(allTxs)]
      // console.log(`allTxs: ${JSON.stringify(allTxs, null, 2)}`)

      const thisObj = {
        height: thisHeight,
        txs: allTxs
      }
      combinedMap.push(thisObj)
    }

    console.log(`combinedMap: ${JSON.stringify(combinedMap, null, 2)}`)
    console.log(`map1Heights: ${map1Heights.length}, map2Heights: ${map2Heights.length}, combinedMap: ${combinedMap.length}`)

    fs.writeFileSync('./combined-map.json', JSON.stringify(combinedMap, null, 2))
  } catch (err) {
    console.error(err)
  }
}
combineMaps()
