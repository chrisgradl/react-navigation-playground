# React Navigation Playground

design and test your react-navigation structure inside the browser

## Code Geneartion

### the react-navigation preview is generated in following steps:
* the Redux State containts all the information about the Navigators, Screens and the Theme
* the state is converted to jsx Code 
* this string is transpiled by standalone Babel
* new Function with Code is used as React Component (inspired by https://github.com/cawfree/react-native-wormhole)
