from flask import Flask, jsonify, request, send_from_directory
import psycopg2
from flask_cors import CORS  # Import Flask-CORS

app = Flask(__name__, static_folder="frontend")
CORS(app)  # Enable CORS for all routes


# Database connection
def get_db_connection():
    conn = psycopg2.connect(
        host="postgres",
        database="blogdb",
        user="admin",
        password="password"
    )
    return conn

# Serve the front-end HTML file at the root URL
@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

# Serve static files (CSS and JS)
@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(app.static_folder, path)

@app.route('/posts', methods=['GET'])
def get_posts():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM posts;')
    posts = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(posts)

# API route to create a new blog post (CREATE)
@app.route('/posts', methods=['POST'])
def create_post():
    new_post = request.get_json()
    title = new_post['title']
    content = new_post['content']
    
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('INSERT INTO posts (title, content) VALUES (%s, %s)', (title, content))
    conn.commit()
    cursor.close()
    conn.close()

    return 'Post created!', 201

# API route to update a blog post (UPDATE)
@app.route('/posts/<int:id>', methods=['PUT'])
def update_post(id):
    updated_post = request.get_json()
    title = updated_post['title']
    content = updated_post['content']
    
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('UPDATE posts SET title = %s, content = %s WHERE id = %s', (title, content, id))
    conn.commit()
    cursor.close()
    conn.close()

    return 'Post updated!', 200

# API route to delete a blog post (DELETE)
@app.route('/posts/<int:id>', methods=['DELETE'])
def delete_post(id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('DELETE FROM posts WHERE id = %s', (id,))
    conn.commit()
    cursor.close()
    conn.close()

    return 'Post deleted!', 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
