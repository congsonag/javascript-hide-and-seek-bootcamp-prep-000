
function getFirstSelector(selectors) {
  return document.querySelector(selectors)
}

function nestedTarget() {
  return document.querySelector('#nested') || document.querySelector('.target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

// function deepestChild() {
//   const divs = document.getElementById('grand-node')
//   let current = divs;
//   let next = [];
//
//   while (current) {
//     if (current.innerHTML === 'boo!') { return current }
//
//     if (typeof current === 'object' && current !== null) {
//       for (var i in current.length) {
//         next.push(current[i]);
//       }
//     }
//     current = next.shift()
//   }
//
//   return null
//
// }

function deepestChild() {
  let divs = document.querySelectorAll('#grand-node div');
  if (divs) {
    for (let i in divs) {
      if (divs[i].innerHTML.trim() === 'boo!') {
        return divs[i]
      }
    }
  }
  return null
}
