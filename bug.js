```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause a warning because it's an infinite loop!
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```