export default (n = 60) => {
  let str = '-'
  let i = 0
  while (i < n) {
    str += str[i]
    i++
  }
  console.log(str)
}
