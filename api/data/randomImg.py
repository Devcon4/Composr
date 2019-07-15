import numpy as np
import imageio

img = (np.random.standard_normal([512, 512, 3]) * 255).astype(np.uint8)
imageio.imwrite('static.png', img)
