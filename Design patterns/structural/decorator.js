class Server {
  constructor(ip, port) {
    this.ip = ip
    this.port = port
  }

  get url() {
    return `https://${this.ip}:${this.port}`
  }
}

function aws(server) {
  server.isAws = true
  server.awsInfo = function () {
    return server.url
  }
  return server
}

function azure(server) {
  server.isAzure = true
  server.port += 500
  return server
}

const server1 = aws(new Server("10.10.10.10", 8080))
console.log(server1.isAws)
console.log(server1.awsInfo())

const server2 = azure(new Server("255.255.255.255", 5))
console.log(server2.isAzure)
console.log(server2.url)
