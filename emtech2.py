import streamlit as st
import os
from tensorflow import keras
from keras.preprocessing import image as keras_image
from keras.preprocessing.image import img_to_array
import numpy as np

# Load the saved model
best_model = os.path.abspath('model_checkpoint.h5')

# Function to preprocess an image for prediction
def preprocess_image(img):
    img_array = img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = img_array / 255.0  # Normalize the image

    return img_array

def predict(image):
    # Preprocess the imagew
    preprocessed_image = preprocess_image(image)

    # Make predictions
    predictions = best_model.predict(preprocessed_image)

    # Get the predicted class (0 for cat, 1 for dog, assuming 2-class classification)
    predicted_class = np.argmax(predictions)

    return "Cat" if predicted_class == 0 else "Dog"

def main():
    st.title("Cat or Dog Predictor")

    uploaded_file = st.file_uploader("Choose a file")

    if uploaded_file is not None:
        upload_img = keras_image.load_img(uploaded_file, target_size=(128, 128))
        st.image(upload_img, caption="Uploaded Image", use_column_width=True)

        prediction = predict(upload_img)

        st.write(f"Prediction: {prediction}")

if __name__ == "__main__":
    main()
