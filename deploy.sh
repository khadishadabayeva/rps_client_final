#!/bin/bash
npm run build
cd dist
git init
git add *
git commit -m "Final Version"
git remote add origin https://github.com/khadishadabayeva/glitch_rps_client.git
git push --set-upstream origin main -f