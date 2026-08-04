#!/usr/bin/env bash

git config --global user.name juhokauppala \
    && git config --global user.email juho.kauppala@gmail.com
npm install -g pagecrypt http-server

echo 'alias encrypt="pagecrypt _participant_raw.html participant.html asd"' >> /home/vscode/.bashrc
