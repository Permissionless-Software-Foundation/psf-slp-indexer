# Docker Containers

The 'production' environment is assumed to be a set of Docker containers orchestrated with Docker Compose. The files in this directory will stand up three Docker containers:

1 An instance of go-ipfs.
2 An instance of MongoDB.
3 The JavaScript software in this repository.

The software in this repository depends on the first two containers, so if they aren't running correctly, the application won't run correctly either.

## IPFS

IPFS can be a little tricky to set up. By default, the container uses the following ports:

- 4001 for TCP connections, exposed publicly.
- 5001 for control by the application, exposed privately.
- 8080 for an IPFS gateway, consumed by the application, exposed privately.

If you already have an IPFS node running on a the computer, you will need to change the ports to avaid a conflict. To change the ports from the default, you'll need to perform a series of steps, and the order of the steps matter.

1. Edit the `docker-compose.yml` file and change the ports. Then save the file. Here is an example:

```
ports:
  - 4101:4101
  - 172.17.0.1:5101:5101
  - 172.17.0.1:8180:8180
```

2. Bring the Docker containers up, and then back down. This will allow the IPFS container to create the config file that you'll need to edit.

- `docker-compose up -d`
- Wait a few seconds.
- `docker-compose down`

3. Update the generated config file at `../data/go-ipfs/data/config`, to update the ports in the config file, like this:

```
"Addresses": {
    "API": "/ip4/0.0.0.0/tcp/5101",
    "Announce": [],
    "AppendAnnounce": [],
    "Gateway": "/ip4/0.0.0.0/tcp/8180",
    "NoAnnounce": [],
    "Swarm": [
      "/ip4/0.0.0.0/tcp/4101",
      "/ip6/::/tcp/4101",
      "/ip4/0.0.0.0/udp/4101/quic",
      "/ip6/::/udp/4101/quic"
    ]
  },

```

4. Update the port changes in the `start-production.sh` shell script. This tells the application which ports to use, in order to control the IPFS node, are are used when signaling other nodes.

5. Quickly rebuild the containers, to add the modified `start-production.sh` shell script to the application Docker container:

- `docker-compose build`

6. Now start the containers, and the port changes to IPFS should be complete.
