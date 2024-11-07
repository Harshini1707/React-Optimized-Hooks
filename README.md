# React Optimized Hooks

A simple React package providing hooks for debouncing and throttling events.

## Introduction

React Optimized Hooks provides two essential hooks—`useDebounce` and `useThrottle` for improving performance in React applications. These hooks are particularly helpful for optimizing rapid input changes, scroll events, API requests, and more.

### Use Cases
- **Debouncing**: Ideal for search inputs, where you want to wait until the user stops typing before sending an API request.
- **Throttling**: Useful for events like scroll or resize, where you want to limit the frequency of function calls.

## API Documentation

**useDebounce**(value, delay)

Parameters:
value: The value to debounce.
delay: Time in milliseconds to wait before updating the returned value (default: 300ms).
Returns: The debounced version of value.

**useThrottle**(value, limit)

Parameters:
value: The value to throttle.
limit: Time interval in milliseconds to limit updates (default: 300ms).
Returns: The throttled version of value.

# Best Practices

 **Use Reasonable Delays:** 
          For useDebounce, a delay between 300-500ms works well for user input, while useThrottle with a 1000ms limit is often ideal for scroll events.
**Avoid Overusing:**
         Applying debouncing or throttling to every component may lead to unresponsive UIs. Use these hooks selectively in areas that impact performance.

## License
 
    MIT  

## Installation

Install with npm:

```bash
npm install react-optimized-hooks
