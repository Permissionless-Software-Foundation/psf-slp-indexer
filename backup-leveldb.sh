#!/bin/bash

echo What is the block height?

read height

zip -r slp-indexer-$height.zip leveldb/current

#mv slp-indexer-$height.zip ~/tmp/
mv slp-indexer-$height.zip leveldb/zips/
