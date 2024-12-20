from flask import Flask, request, jsonify
import joblib
import pandas as pd

app = Flask(__name__)

# Load trained model and encoder
pipeline = joblib.load('disease_prediction_model.pkl')
encoder = joblib.load('label_encoder.pkl')

# Load dataset for treatments
data = pd.read_csv('Diseases_Symptoms.csv')

@app.route('/predict', methods=['POST'])
def predict():
    req_data = request.get_json()  # Input data as JSON
    symptoms = req_data.get('symptoms', '')

    # Predict disease
    try:
        predicted_class = pipeline.predict([symptoms])[0]
        predicted_disease = encoder.inverse_transform([predicted_class])[0]
        
        # Find treatment
        treatment_row = data[data['Name'] == predicted_disease]
        if not treatment_row.empty:
            treatment = treatment_row['Treatments'].values[0]
        else:
            treatment = "No treatment found for this disease."
            
        return jsonify({'disease': predicted_disease, 'treatment': treatment})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
