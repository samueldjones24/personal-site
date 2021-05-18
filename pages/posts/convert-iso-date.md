---
title: Convert ISO date to local date in JavaScript
date: 2021/5/18
description: How to convert an ISO date string to a local date string in JavaScript
tag: javascript
author: You
---

# Convert an ISO date string to local date string in JavaScript

<h2><span role="img" aria-label="thinking">🤔</span> Problem</h2>

We need to convert the following ISO-8601 date format:<br />

```
“2021-03-17T11:23”
```

To our locale format\*:<br />

```
“17/03/2021 11:23:00”
```

_\* in this case, our locale is UK_

<h2><span role="img" aria-label="checkmark">✅ </span> Solution</h2>

```
const date = "2021-03-17T11:23";

const convertedDate = new Date(date).toLocaleString();

console.log(convertedDate) // “17/03/2021 11:23:00”
```

<h2><span role="img" aria-label="lightbulb">💡 </span> Extra Tip</h2>

As above, the `toLocaleString()` method will return your current locale by default. If you want to specify the locale, simply pass in your chosen locale and any other options:

```
const koreaDate = newDate(date).toLocaleString('ko-KR', { timeZone: 'UTC' });

// expected output: 2012. 12. 20. 오전 3:00:00
```

Check out the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) for further info and examples.
