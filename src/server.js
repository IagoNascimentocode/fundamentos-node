import http from 'node:http';

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/users') {
    return res.setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'hL0zK@example.com'
    })
    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
})

server.listen(3333, () => {
  console.log('Server is running on port 3333');
  console.log('Press Ctrl + C to stop the server');
  console.log('Open your browser and navigate to http://localhost:3333');
})



