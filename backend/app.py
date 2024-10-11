from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import requests

app = Flask(__name__, static_folder='../frontend/dist')  # Correct path to dist
CORS(app)

@app.route('/')
def home():
    print("Home route accessed")
    return send_from_directory('../frontend/public', 'index.html')  # Correct path to public

@app.route('/dist/<path:filename>')
def serve_static(filename):
    return send_from_directory(app.static_folder, filename)

@app.route('/api/recipes', methods=['GET'])
def get_recipes():
    try:
        response = requests.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        response.raise_for_status()
        data = response.json()
        return jsonify(data)
    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)  # Ensure the correct port
