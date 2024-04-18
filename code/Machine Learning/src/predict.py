import tensorflow as tf
from tensorflow.keras.preprocessing import image
import numpy as np

model = tf.keras.models.load_model('../models/model.keras')
image_size = (224, 224)

test_image_path = '../data/val/Apple Braeburn/321_100.jpg'

img = image.load_img(test_image_path, target_size=image_size)
img_array = image.img_to_array(img)
img_array = np.expand_dims(img_array, axis=0)
img_array /= 255.0

predictions = model.predict(img_array)

train_dir = '../data/train'
train_datagen = image.ImageDataGenerator(rescale=1./255)
train_generator = train_datagen.flow_from_directory(
    train_dir,
    target_size=image_size,
    batch_size=1,
    class_mode='categorical',
    shuffle=False
)
class_labels = list(train_generator.class_indices.keys())

predicted_class_index = np.argmax(predictions[0])
predicted_class = class_labels[predicted_class_index]

print('Predicted class:', predicted_class)
