#!/bin/bash
if [ "$VERCEL_GIT_BRANCH" != "main" ]; then
  echo "Not main branch. Skipping build."
  exit 0
fi
