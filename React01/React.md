<!-- <div>{true}</div>        // Empty
<div>{false}</div>       // Empty
<div>{null}</div>        // Empty
<div>{undefined}</div>    -->
<div>{0}</div>  // Shows: 0

const items = [];

// ❌ Shows "0" if array is empty
<div>{items.length && <p>Has items</p>}</div>

// ✅ Correct
<div>{items.length > 0 && <p>Has items</p>}</div>

```TEXT
## Key Takeaways
1. **JSX is syntax sugar** for `React.createElement()`
2. **One root element** required (or use Fragment)
3. **`{}` for JavaScript** expressions (not statements)
4. **className not class**, **htmlFor not for**
5. **camelCase** attributes and event handlers
6. **style is object** with camelCase properties
7. **Close all tags** (self-closing for no children)
8. **Arrays** can be rendered directly
9. **Boolean/null/undefined** render nothing
10. **Babel transforms** JSX to JavaScript at runtime (with CDN)

```
// JSX
```JS
<div>Content</div>

// Becomes
React.createElement('div', null, 'Content')
// type is STRING 'div'


// JSX
<Greeting />

// Becomes
React.createElement(Greeting, null)
// type is FUNCTION Greeting
```

## What Are Props?

Props is an **object** containing all attributes you pass:

```jsx
<Greeting name="Rohit" age={25} />

```

React creates:

```jsx
const props = {
    name: "Rohit",
    age: 25
};

```

Then calls:

```jsx
Greeting(props);

```

```JSX
function Greeting({ name }) {
    // ❌ Wrong - props are immutable
    name = "Something else";

    return <h1>Hello {name}</h1>;
}
```

```JSX
function Card({ children }) {
    return (
        <div style={{ border: '1px solid black', padding: '10px' }}>
            {children}
        </div>
    );
}

// Use it
<Card>
    <h2>Title</h2>
    <p>This is content</p>
</Card>

// children prop receives:
// <h2>Title</h2>
// <p>This is content</p>
```

```TEXT
## Key Takeaways

1. **Component = function returning JSX**
2. **Capital letter required** - distinguishes from DOM elements
3. **Use like HTML tags** - `<Component />`
4. **Props = data passed to component** - `<Component name="value" />`
5. **Props is an object** - `{ name: "value" }`
6. **Props are read-only** - cannot modify
7. **Destructure props** for cleaner code
8. **children prop** - content between tags
9. **Compose components** - components inside components
10. **Break UI into components** - reusability and maintainability
```

```TEXT
<h1>{true}</h1>         // nothing shown
<h1>{null}</h1>         // nothing shown
<h1>{undefined}</h1>    // nothing shown
Objects are not valid as a React child

string → can show text
number → can show text
array → can iterate

👉 But an object:

{ name: "Rohit" }
is a complex structure
React doesn’t know how to display it directly
React cannot render objects directly because they are not primitive or iterable UI elements. We must extract values or transform them."

Arrays work because React iterates over them and renders each element, but objects don’t have a defined rendering structure, so React throws an error