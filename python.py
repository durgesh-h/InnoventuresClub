import http.server
import socketserver

# Set the directory you want to serve
directory = 'D:\Lucifer\club'  # This will serve the current directory

# Set the port you want to use
port = 5501

# Create a simple HTTP server
Handler = http.server.SimpleHTTPRequestHandler

# Set up the local server
with socketserver.TCPServer(("", port), Handler) as httpd:
    print("Serving at port", port)
    print("Open http://localhost:5501 on your mobile browser to test the website.")
    # Serve the directory indefinitely until the user stops the server
    httpd.serve_forever()
