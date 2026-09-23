setFormData((previous) => ({
    ...previous,
    [name]: value,
}))
name ko dynamic property name ke tarah use kiya ja raha hai.
[name]: value email: "new@gmail.com"

Agar new state ki value previous state ki value par depend karti hai → callback use karo.
Agar new state previous state par depend nahi karti → callback ki zarurat nahi.
