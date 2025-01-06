# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by missing a dependency.  The `useEffect` hook runs repeatedly until it is unmounted.

## Bug Description

The provided `MyComponent` uses `useEffect` to update the `count` state. However, the dependency array is empty (`[]`), causing the effect to run on every render, leading to an infinite loop, as the `count` state is updated in the `useEffect` function.