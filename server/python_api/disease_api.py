from flask import Flask, request, jsonify
import joblib
import pandas as pd
from flask_cors import CORS
import os

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS to allow cross-origin requests

# Load the model, encoder, and data
try:
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))  # Base directory
    pipeline = joblib.load(os.path.join(BASE_DIR, '../models/disease_prediction_model.pkl'))
    encoder = joblib.load(os.path.join(BASE_DIR, '../models/label_encoder.pkl'))
    data = pd.read_csv(os.path.join(BASE_DIR, '../models/Diseases_Symptoms.csv'))
except Exception as e:
    print(f"Error loading model, encoder, or data: {e}")
    pipeline, encoder, data = None, None, None

@app.route('/predict', methods=['POST'])
def predict_disease():
    """
    Predict the disease based on symptoms provided by the user.
    """
    try:
        # Validate model, encoder, and data are loaded
        if not all([pipeline, encoder, data is not None]):
            return jsonify({"error": "Server is not properly configured. Contact the admin."}), 500

        # Extract symptoms from the request
        symptoms = request.json.get('symptoms', '')
        if not symptoms:
            return jsonify({"error": "Symptoms not provided. Please include symptoms in the request body."}), 400

        # Predict the disease
        prediction = pipeline.predict([symptoms])[0]
        disease_name = encoder.inverse_transform([prediction])[0]

        # Fetch treatment details
        treatment_row = data[data['Name'] == disease_name]
        treatment = treatment_row['Treatments'].values[0] if not treatment_row.empty else "No treatment found"

        # Respond with disease and treatment details
        return jsonify({"disease": disease_name, "treatment": treatment})

    except ValueError as ve:
        # Handle specific value errors (e.g., prediction issues)
        return jsonify({"error": f"Value error: {str(ve)}"}), 400
    except Exception as e:
        # Generic error handling
        return jsonify({"error": "An unexpected error occurred. Please try again."}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
