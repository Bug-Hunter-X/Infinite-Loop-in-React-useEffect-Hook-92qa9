```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fix: Add 'count' to the dependency array.
    // This ensures the effect only runs when 'count' changes.
    // But this is still not ideal because its an infinite loop.
    setCount(count + 1);
  }, [count]);

  return <div>Count: {count}</div>;
}
```