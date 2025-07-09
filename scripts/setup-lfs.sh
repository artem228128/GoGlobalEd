#!/bin/bash
set -e

# Initialize Git LFS
git lfs install

# Configure Git LFS endpoint
git config lfs.url https://github.com/artem228128/GoGlobalEd.git/info/lfs

# Pull LFS objects
git lfs pull

echo "Git LFS setup completed" 