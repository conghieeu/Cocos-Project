from http.server import HTTPServer, SimpleHTTPRequestHandler
import socketserver

class VideoHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        # Thêm CORS headers
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'X-Requested-With')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        
        # Thêm caching headers cho video
        if self.path.endswith(('.mp4', '.webm', '.ogg')):
            self.send_header('Accept-Ranges', 'bytes')
            self.send_header('Cache-Control', 'public, max-age=3600')
            SimpleHTTPRequestHandler.do_GET(self)
        else:
            # Với các file khác, sử dụng xử lý mặc định
            SimpleHTTPRequestHandler.do_GET(self)

    def end_headers(self):
        # Chỉ thêm no-cache cho video
        if self.path.endswith(('.mp4', '.webm', '.ogg')):
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
        SimpleHTTPRequestHandler.end_headers(self)

if __name__ == '__main__':
    PORT = 8080
    Handler = VideoHandler
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving at port {PORT}")
        httpd.serve_forever()
