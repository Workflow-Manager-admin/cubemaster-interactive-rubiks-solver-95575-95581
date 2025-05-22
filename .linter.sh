#!/bin/bash
cd /home/kavia/workspace/code-generation/cubemaster-interactive-rubiks-solver-95575-95581/main_container_for_cubemaster
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

