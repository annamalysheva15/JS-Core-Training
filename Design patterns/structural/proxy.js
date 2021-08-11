function networkFetch(url) {
  return `${url} - server response`
}

const cache = new Set()

const fetchProxy = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0]
    if(cache.has(url)) {
      return `${url} - cache response`
    } else {
      cache.add(url)
      return Reflect.apply(target, thisArg, args)
    }
  }
})

console.log(fetchProxy("google.com"))
console.log(fetchProxy("github.com"))
console.log(fetchProxy("google.com"))
