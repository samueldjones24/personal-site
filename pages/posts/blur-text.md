---
title: How to blur text in CSS
date: 2021/5/18
description: Using the CSS text-shadow property, we can add a blur effect to our text
tag: css
author: You
---

# How to blur text in CSS

<h2><span role="img" aria-label="thinking">🤔</span> Problem</h2>

Let's say that we need to blur a customer's name for an app screenshot or demo.

Here's our example :<br />

<img src="/images/not-blur-text.png" alt="Not blurred bio" />

So, how can we add some blur using the `text-shadow` CSS property?

<h2><span role="img" aria-label="checkmark">✅ </span> Solution</h2>

Define a `blurred-text` class in our CSS file:

```css
.blurred-text {
  color: transparent;
  text-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
}
```

And then apply to the HTML element:

```html
<span className="blurred-text">Sam Jones</span>
```

Here we have the blurred text on our site:

![Blurred bio](/images/blur-text.png)

You can also increase/decrease the `blur-radius` value (e.g. from 7px to 5px) to change the transparency.

<h2><span role="img" aria-label="lightbulb">💡 </span> Extra Tip</h2>

If you need to blur the text inside an input field, you can use the following class:

```css
.blur-on-lose-focus:not(:focus) {
  color: transparent;
  text-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
}
```

And it will look something like this:

![Blurred input](/images/blur-input.png)
