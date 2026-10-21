import os
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.utils import resample
import joblib

# Debug: show current folder and files
print("Working directory:", os.getcwd())
print("Files here:", os.listdir(os.getcwd()))

# Load Excel dataset (make sure file is saved as review.xlsx in backend folder)
data = pd.read_excel(
    r"C:\Users\pawas\OneDrive\Documents\PROJECT\backend\review.xlsx",
    sheet_name="review"
)

print("Dataset loaded successfully. First rows:")
print(data.head())

# Balance dataset
fake = data[data.label == 1]
genuine = data[data.label == 0]

if len(fake) > len(genuine):
    genuine_upsampled = resample(genuine, replace=True, n_samples=len(fake), random_state=42)
    data_balanced = pd.concat([fake, genuine_upsampled])
else:
    fake_upsampled = resample(fake, replace=True, n_samples=len(genuine), random_state=42)
    data_balanced = pd.concat([genuine, fake_upsampled])

X = data_balanced["review"]
y = data_balanced["label"]

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Vectorize text
vectorizer = TfidfVectorizer()
X_train_vec = vectorizer.fit_transform(X_train)
X_test_vec = vectorizer.transform(X_test)

# Train RandomForest model
model = RandomForestClassifier(n_estimators=200, random_state=42)
model.fit(X_train_vec, y_train)

# Save model and vectorizer
joblib.dump(model, "model.pkl")
joblib.dump(vectorizer, "vectorizer.pkl")

print("Training complete. Accuracy:", model.score(X_test_vec, y_test))
