setTimeout(() => {
  console.log('2 segundos')
}, 2000);

const names = ['Paul', 'Rufo', 'lel']
const shortNames = names.filter( n => {
  return n.length <= 4
})

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0
    }

    return data
  }, 2000);
}

const data = geocode('Philadelphia')
console.log(data)