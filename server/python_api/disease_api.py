from flask import Flask, request, jsonify
import joblib
import pandas as pd


pipeline = joblib.load('../models/disease_prediction_model.pkl')
encoder = joblib.load('../models/label_encoder.pkl')


data = pd.read_csv('../models/Diseases_Symptoms.csv')

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict_disease():
    try:
        symptoms = request.json.get('symptoms', '')
        if not symptoms:
            return jsonify({"error": "Symptoms not provided"}), 400

        
        prediction = pipeline.predict([symptoms])[0]
        disease_name = encoder.inverse_transform([prediction])[0]

        
        treatment_row = data[data['Name'] == disease_name]
        treatment = treatment_row['Treatments'].values[0] if not treatment_row.empty else "No treatment found"

        return jsonify({"disease": disease_name, "treatment": treatment})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
