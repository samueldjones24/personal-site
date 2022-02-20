---
title: How to fix "Unknown prop warning" in React and styled components
date: 2022/01/05
description: Prefix the prop name with a dollar sign ($) to turn it into a transient prop
tag: react, styled components
author: You
---

# How to fix "Unknown prop warning" in React and styled components

<h2><span role="img" aria-label="thinking">🤔</span> Problem</h2>

If you've worked with React and styled components before, you've probably written code like the below where the `isHidden` prop is passed onto the styled component to conditionally render styling :

```react
<Wrapper isHidden={isHidden}>
  Content is here
</Wrapper>
```

When you open up the console, you will generally find a warning about using non-native attributes on elements: <br />

<img src="/images/unknown-prop-warning.png" alt="Unknown prop warning" />

As the React documentation explains:

> The unknown-prop warning will fire if you attempt to render a DOM element with a prop that is not recognized by React as a legal DOM attribute/property.

And more specifically in the styled-components documentation (with a hint to the solution):

> Transient props are a new pattern to pass props that are explicitly consumed only by styled components and are not meant to be passed down to deeper component layers.

So how do we prevent props meant to be consumed by styled components from being passed to the underlying React node or rendered to the DOM element?

<h2><span role="img" aria-label="checkmark">✅ </span> Solution</h2>

By prefixing the prop with a dollar sign ($), we can turn it into a _transient_ prop:

```react
<Wrapper $isHidden={isHidden}>
  Content is here
</Wrapper>
```

In this case, React knows that this is just a styling prop and will therefore leave it out of the DOM. No more pesky warnings!

<h2><span role="img" aria-label="lightbulb">💡 </span> Extra Tip</h2>

If VS Code is your text editor of choice and you regularly work with styled components, I would highly recommend installing the `vscode-styled-components` extension for lovely syntax highlighting and CSS IntelliSense. Really takes your styled components game to the next level!
