# tfjs workshop

## Install and run
```
yarn
yarn start
```

## Try it
click on the buttons and try the game out

## Write the prediction model
Your misssion should you choose to accept it is to save the town from the bombing.

To do that you'll need to change ```myPredictor.js``` file,
this file needs to export a function which recieves an array of numbers which are the initial path of the bomb,
you'll need to use them to predict (using a tensorflow model) the correct position to put the shield on.

You can use the functions wihthin ```utils.js``` but only to generate the initial model!
I recomend you start with [tf.sequential]( https://js.tensorflow.org/api/0.13.3/#sequential)
