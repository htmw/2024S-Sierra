# Fruit Classification

This project implements a deep learning model for fruit classification using the DenseNet121 architecture. The model is trained on a dataset of fruit images and can accurately predict the class of a given fruit image.

## Project Structure

```plaintext
project/
├── data/
│   ├── train/
│   └── val/
├── models/
│   └── model.keras
├── src/
│   ├── train.py
│   └── predict.py
├── notebook/
│   └── fruit_eda.ipynb
└── requirements.txt
```

## Dependencies

- Python (version 3.6 or higher)
- TensorFlow (version 2.x)
- NumPy

## Installation

To install the required dependencies, run the following command:

```bash
pip install -r requirements.txt
```

## Training

To train the model, place the training and validation datasets in the `data/train/` and `data/val/` directories respectively, and then run the training script:

```bash
python src/train.py
```

## Prediction

To make predictions, place a test image in the `data/val/` directory. Update the `test_image_path` in `src/predict.py` with the path to your test image, then run the prediction script:

```bash
python src/predict.py
```

## Dataset

The model is trained and tested on the Fruits-360 dataset. Organize the dataset in the following structure:

```plaintext
data/
├── train/
│   ├── class1/
│   ├── class2/
│   └── ...
└── val/
    ├── class1/
    ├── class2/
    └── ...
```

## To Do

- [ ] Adding Training Train and Validation Graphs in Readme
- [ ] Adding Model Architecture in Readme
