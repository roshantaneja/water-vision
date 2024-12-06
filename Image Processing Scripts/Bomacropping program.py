import os
import time
from PIL import Image

# get the path/directory
folder_dir = os.getcwd()
counter = 0
def crop_top_right(image_path, crop_height=100):
    # Open the image
    img = Image.open(folder_dir + "\\bomaphotos\\" + image_path)

    # Get the width and height of the image
    width, height = img.size

    # Define the region to be cropped (top right corner)
    left = 310
    top = 220
    right = 410
    bottom = 320

    # Crop the image
    cropped_img = img.crop((left, top, right, bottom))

    return cropped_img
for images in os.listdir(folder_dir):
    # check if the image ends with png
    crop_top_right(images).save(folder_dir + "\\croppedbomaphotos\\" + images)