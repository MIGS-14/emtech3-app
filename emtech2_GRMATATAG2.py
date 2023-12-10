import streamlit as st
from tensorflow import keras
from keras.preprocessing import image
from keras.preprocessing.image import img_to_array
import numpy as np

# Load the saved model
best_model = keras.models.load_model('model_checkpoint.h5')

# Function to preprocess an image for prediction
def preprocess_image(img):
    img_array = img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array /= 255.0  # Normalize the image

    return img_array

def predict(image):
    # Preprocess the image
    preprocessed_image = preprocess_image(image)

    # Make predictions
    predictions = best_model.predict(preprocessed_image)

    # Get the predicted class (0 for cat, 1 for dog, assuming 2-class classification)
    predicted_class = np.argmax(predictions)

    return "Cat" if predicted_class == 0 else "Dog"

def main():
    st.title("Cat or Dog Predictor")

    uploaded_file = st.file_uploader("Choose a file", type=["jpg", "jpeg", "png"])

    if uploaded_file is not None:
        image_file = image.load_img(uploaded_file, target_size=(128, 128))
        st.image(image_file, caption="Uploaded Image", use_column_width=True)

        # Convert the PIL image to a numpy array
        img_array = image.img_to_array(image_file)

        # Display the image with the predicted class
        st.image(image_file, caption=f"Uploaded Image - Prediction: {predict(image_file)}", use_column_width=True)

        # Show the prediction label
        st.write(f"Prediction: {predict(img_array)}")

if __name__ == "__main__":
    main()

