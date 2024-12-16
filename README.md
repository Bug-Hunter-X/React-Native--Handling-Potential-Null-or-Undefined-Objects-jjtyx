# React Native: Handling Potential Null or Undefined Objects

This repository demonstrates a common error in React Native applications and provides a solution for handling cases where an object might be null or undefined before data is fully loaded.

## The Problem

The error `TypeError: Cannot read properties of undefined (reading 'name')` occurs when attempting to access a property of an object that is currently null or undefined.  This is often seen in asynchronous operations where data fetching is involved.  The code attempts to access a property before the data has been retrieved.

## The Solution

The solution involves implementing robust null checks before accessing properties to prevent the error.  This can be achieved using optional chaining (`?.`) or the logical AND operator (`&&`).