# Button

General use button component.

```jsx
<Button>My Button</Button>
```

A cool example:

```jsx
const [count, setCount] = React.useState(0);

<div>
  <p>Total Count: {count}</p>
  <Button onClick={() => setCount(count + 1)}>Increment</Button>
  &nbsp;
  <Button onClick={() => setCount(count - 1)}>Decrement</Button>
</div>;
```
