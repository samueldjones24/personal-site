---
title: Convert an array of objects to a single object in JavaScript
date: 2021/8/25
description: Includes the Array.reduce() and Object.entries() methods
tag: javascript
author: You
---

# Convert an array of objects to a single object in JavaScript

<h2><span role="img" aria-label="thinking">🤔</span> Problem</h2>

I've come across this use case several times in the past few months, so I thought I'd write it down somewhere for reference purposes.

Let's say we have the following array of objects:<br />

```javascript
const arrayOfObjects = [
  { name: 'Sam' },
  { age: 32 },
  { email: 'sam@hello.com' }
]
```

And we would like to convert this array to a single object:<br />

```javascript
const singleObject = {
  name: 'Sam',
  age: 32,
  email: 'sam@hello.com'
}
```

<h2><span role="img" aria-label="checkmark">✅ </span> Solution</h2>

This particular solution combines the **reduce** and **Object.entries** methods
as well as a **forEach** to help build the object that we need:

```javascript
const object = arrayOfObjects.reduce((acc, curr) => {
  Object.entries(curr).forEach(([k, v]) => {
    acc[k] = v
  })
  return acc
}, {})

console.log(object) // { name: 'Sam', age: 32, email: 'sam@hello.com' }
```

To better understand what's going on here, I find that it helps to look at the individual steps of the process.

If we use the first item in the array as an example, here are the steps it takes:

In the first iteration, we see:

```javascript
acc = {} // we will build this object
curr = { name: 'Sam' }
Object.entries(curr) // ['name', 'Sam']
```

We use the **forEach** on the entries array and start building our new object by defining our _key/value pairs_ using the strings from the entries array.

The next iteration will start like this:

```javascript
acc = { name: 'Sam' }
curr = { age: 32 }
```

We will then add the **age** key/value pairs to our existing object and continue until our object is complete.

<h2><span role="img" aria-label="lightbulb">💡 </span> Extra Tip</h2>

This method also works for arrays with nested objects e.g.

```javascript
const arrayOfObjects = [
  { name: { first: 'Sam', last: 'Jones' } },
  { age: 32 },
  { email: 'sam@hello.com' }
]

const object = arrayOfObjects.reduce((acc, curr) => {
  Object.entries(curr).forEach(([k, v]) => {
    acc[k] = v
  })
  return acc
}, {})

console.log(object) // { name: { first: 'Sam', last: 'Jones' }, age: 32, email: 'sam@hello.com' }
```

Check out the MDN documentation for [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) and [Object.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) for further info and examples.
