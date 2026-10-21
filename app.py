from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import joblib

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Load model and vectorizer
model = joblib.load("model.pkl")
vectorizer = joblib.load("vectorizer.pkl")

class ReviewRequest(BaseModel):
    review: str   # ✅ expects "review" key

@app.post("/predict")
def predict(request: ReviewRequest):
    text = request.review
    vec = vectorizer.transform([text])
    prediction = model.predict(vec)[0]
    return {"prediction": "Authentic" if prediction == 1 else "Fake"}





