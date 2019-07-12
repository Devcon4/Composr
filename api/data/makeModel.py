import tensorflowjs as tfjs
from tensorflow.python.keras.applications.vgg19 import VGG19
from tensorflow.python.keras.models import save_model

#download model 
model = VGG19(include_top=True, weights='imagenet', input_tensor=None, input_shape=None, pooling=None, classes=1000)

#save the model 
# save_model(
#     model,
#     "vgg.h5",
#     overwrite=True,
# )

model.

tfjs.converters.save_keras_model(model, "./vgg.json")
