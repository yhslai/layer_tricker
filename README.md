# Layer Tricker

(formerly Eyedropper Swither)

A Photoshop plugin that supports several layer-related features.

# Features

## Auto Switch Eyedropper Mode

Automatically switches eyedropper tool's Sample setting to `Current Layer` when the current layer's blend mode is not `Normal`.

## Multi-layer Liquify

![image](https://user-images.githubusercontent.com/538696/134746345-24079152-0d38-405e-b3b3-17abd64f9fe8.png)

Allows the user to liquify multiple layers at once. There are 3 buttons:

1. Combines 2. and 3. in one button.
2. Make a smart object out of selected layers.
3. Apply a smart object's liquify mask to selected layers.

## Convert Clipping Mask to Group Mask

![image](https://user-images.githubusercontent.com/538696/134746489-be248382-8524-4c87-93c1-7e08c6309f79.png)

The first button converts such a layer strcture:

![image](https://user-images.githubusercontent.com/538696/134746562-eba21835-0c53-4536-9a0a-8d6db958a5de.png)

to something like this:

![image](https://user-images.githubusercontent.com/538696/134746597-a66f897e-88ad-4218-b0e6-4644f76079b9.png)

So it's compatible with other apps that doesn't support Photoshop's clipping mask, e.g. Krita.

The second button is to add pixels to all the nested group masks.
