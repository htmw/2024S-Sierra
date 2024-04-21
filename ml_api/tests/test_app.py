import pytest
from fastapi.testclient import TestClient
from app import app, class_labels

client = TestClient(app)

@pytest.fixture
def test_image():
    with open("test_image.jpg", "rb") as file:
        return file.read()

def test_predict_endpoint(test_image):
    response = client.post("/predict", files={"file": ("1001.jpg", test_image, "image/jpeg")})
    assert response.status_code == 200
    assert "fruit" in response.json()
    assert response.json()["fruit"] in class_labels

def test_predict_endpoint_invalid_file():
    response = client.post("/predict", files={"file": ("invalid.txt", b"invalid content", "text/plain")})
    assert response.status_code == 500
    assert response.json() == {"message": "An error occurred while processing the request."}
