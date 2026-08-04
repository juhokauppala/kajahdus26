#!/usr/bin/env bash

setsid http-server -p 8080 -c-1 > /tmp/http-server.log 2>&1 < /dev/null &
echo "Starting http-server in the background. Logs are available at /tmp/http-server.log"
while ! curl -s http://localhost:8080 > /dev/null; do
  sleep 0.5
done
echo "Started!"
