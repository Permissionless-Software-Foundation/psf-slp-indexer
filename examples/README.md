# Examples

Below are a series of JSON RPC calls that can be manually entered at chat.fullstack.cash to interact with the JSON RPC of this IPFS Service Provider.

- `{"jsonrpc":"2.0","id":"555","method":"users","params":{ "endpoint": "createUser", "email": "test555@test.com", "name": "testy tester", "password": "password"}}`<br />

- `{"jsonrpc":"2.0","id":"556","method":"auth","params":{ "endpoint": "authUser", "login": "test555@test.com", "password": "password"}}`<br />

- `{"jsonrpc":"2.0","id":"123","method":"users","params":{ "endpoint": "getAllUsers", "apiToken": "<JWT>"}}`<br />

- `{"jsonrpc":"2.0","id":"123","method":"users","params":{ "endpoint": "updateUser", "apiToken": "<JWT>", "userId": "<_id>", "name": "test999"}}`<br />

- `{"jsonrpc":"2.0","id":"123","method":"users","params":{ "endpoint": "getUser", "apiToken": "<JWT>", "userId": "<_id>"}}`<br />

- `{"jsonrpc":"2.0","id":"123","method":"users","params":{ "endpoint": "deleteUser", "userId": "<_id>", "apiToken": "<JWT>"}}`
