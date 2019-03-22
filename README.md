# tfjs workshop

## Install and run
```
yarn
yarn start
```

## Exercise 1 - Direct models
Given 3 points (x and y) generate a model which can predict the Y for any X

1) Open `ex1/ml.js` and implement the `predict` function so you can see your model on the screen.

2) Implement the `train` function in the same file to have more accurate predictions.

3) Test it out by hitting a few refreshes, remember that it's ML so don't expect it to be 100% correct, but it should work on most cases.


## Exercise 2 - Neural Network
Take a screenshot of and get the dominant color out of it then predict if it's more red, blue or green.

1) Open the `index.js` file and change the line:
```js
import App from "./ex1/App";
```
to:
```js
import App from "./ex2/App";
```

2) Open `ex2/ml.js` and implement the missing parts of `createModel` function

3) implement the missing part of `predict` function in the same file.

4) Add a yellow color to the classification results and make it work.

## Extra - Write the prediction model
Your misssion should you choose to accept it is to save the town from the bombing.

To do that you'll need to change ```myPredictor.js``` file,
this file needs to export a function which recieves an array of numbers which are the initial path of the bomb,
you'll need to use them to predict (using a tensorflow model) the correct position to put the shield on.

You can use the functions wihthin ```utils.js``` but only to generate the initial model!
I recomend you start with [tf.sequential]( https://js.tensorflow.org/api/0.13.3/#sequential)
