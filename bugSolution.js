The solution involves adding null checks to ensure that the object is not null or undefined before accessing its properties. Here's the corrected code using optional chaining:

```javascript
const MyComponent = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUser().then(setUser);
  }, []);

  return (
    <View>
      <Text>{user?.name}</Text>  // Optional chaining prevents the error
    </View>
  );
};
```

Alternatively, you can use the logical AND operator:

```javascript
const MyComponent = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUser().then(setUser);
  }, []);

  return (
    <View>
      <Text>{user && user.name}</Text> //Logical AND checks for null or undefined
    </View>
  );
};
```

Both methods ensure that the code only attempts to access `user.name` if `user` is not null or undefined.  This prevents the error and makes the code more robust.