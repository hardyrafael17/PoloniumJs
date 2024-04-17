// print = print;
const clients = workspace.clientList()
for (let i = 0; i < clients.length; i++) {
  print(clients[i].caption)
}

workspace.clientAdded.connect(function (client) {
  print(client.windowId)
})

