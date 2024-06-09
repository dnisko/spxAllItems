#!/bin/bash

# Check if Node.js and npm are installed
if ! command -v node &> /dev/null || ! command -v npm &> /dev/null
then
    echo "Node.js and npm are not installed. Please install them first."
    echo "Visit https://nodejs.org/ for installation instructions."
    exit 1
fi

# Check if http-server is installed
if ! npm list -g http-server &> /dev/null
then
    echo "http-server is not installed. Installing it now..."
    npm install -g http-server
fi

# Start the http-server in the current directory
echo "Starting http-server..."
http-server -p 8080 &

# Get the process ID of the last background command
SERVER_PID=$!

# Wait a bit for the server to start
sleep 2

# Open the default web browser to the server URL
echo "Opening your browser to http://localhost:8080"
if command -v xdg-open &> /dev/null
then
    xdg-open http://localhost:8080
elif command -v open &> /dev/null
then
    open http://localhost:8080
else
    echo "Could not detect the web browser to use. Please open http://localhost:8080 manually."
fi

# Wait for the user to press a key before stopping the server
read -p "Press any key to stop the server..."

# Stop the http-server
echo "Stopping http-server..."
kill $SERVER_PID

echo "Done."