# backend/app.py
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Recipe App!"

@app.route('/api/recipes', methods=['GET'])
def get_recipes():
    # Placeholder for fetching recipes
    return jsonify({"recipes": "This will be replaced by TheMealDB data"})

if __name__ == '__main__':
    app.run(debug=True)
