function clean(item) {
  console.log(`I just cleaned a ${item}`)
}

var nails = [
  'rusty nail',
  'rusty nail',
  'bent nail',
  'clean nail'
]
for (let i in nails) {
  clean(nails[i])
}

var planks = [
  'splintered plank',
  'straight plank',
  'bent plank'
]

for (let k in planks) {
  clean(planks[k])
}

console.log('done!')

function groupAndClean(items, cleaningMethod, done) {
  for (var i = 0; i < items.length; i++) {
    cleaningMethod(items[i])
  }
  done()
}

groupAndClean(nails.concat(planks), clean, function()
{
  console.log('Whew, that was a lot of work')
})



function divide10ByN(n) {
  return  10 / n
}

console.log(divide10ByN(3))
