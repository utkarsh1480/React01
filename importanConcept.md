setFormData((previous) => ({
    ...previous,
    [name]: value,
}))
name ko dynamic property name ke tarah use kiya ja raha hai.
[name]: value email: "new@gmail.com"

Agar new state ki value previous state ki value par depend karti hai → callback use karo.
Agar new state previous state par depend nahi karti → callback ki zarurat nahi.

```
Why Promise.all()?

Suppose your service needs to call 3 independent async operations:

const user = await getUser();
const profile = await getProfile();
const interviews = await getInterviews();

This runs them one after another.

Instead:

const [user, profile, interviews] = await Promise.all([
    getUser(),
    getProfile(),
    getInterviews()
]);

They can run in parallel, so it can be faster.
Use Promise.all() when operations are independent.

If one promise fails, Promise.all() rejects:

const [user, interviews] = await Promise.all([
    getUser(),
    getInterviews()
]);

If getInterviews() fails, the whole Promise.all() fails.

setCategories(
    Array.isArray(categoryData)
        ? categoryData
        : []
);
1. Array.isArray(categoryData)
Ye check karta hai:
Array.isArray(categoryData)
Kya categoryData ek array hai? return true/false

Why do we do this?

Suppose later JSX mein:

{categories.map((category) => (
    <div>{category}</div>
))}

Agar categories accidentally null ho gaya:

categories.map(...)

❌ Error:

Cannot read properties of null

But if we ensure:

categories = []

then:

categories.map(...)

```
