#!/usr/bin/env bash

setsid npm run serve > /tmp/http-server.log 2>&1 < /dev/null &
echo "Starting http-server in the background. Logs are available at /tmp/http-server.log"
while ! curl -s http://localhost:8080 > /dev/null; do
  sleep 0.5
done
echo "Started!"
