---
title: Create a Node script to prevent committing to main
date: 2021/10/21
description: Use a pre-commit hook to check your current branch
tag: javascript, node
author: Samuel Jones
---

# Create a Node script to prevent committing to main

<h2><span role="img" aria-label="thinking">🤔</span> Problem</h2>

There's usually a golden rule in software development: never push code directly to the main (or default) branch. Unsurprisingly, bad things can happen if you mistakenly push broken code to production and it's an easy mistake to make too.

A great way to avoid a potential disaster in your live app is by putting a check in place to prevent developers from pushing code to the main branch at all.

On platforms such as Azure DevOps or GitHub, you are able to configure your branch policies to require pull requests for any code going into main.

However, I've created a small Node script that can be integrated into any [pre-commit hook](https://githooks.com/) and blocks the user from committing directly to your default branch.

<h2><span role="img" aria-label="checkmark">✅ </span> Solution</h2>

Let's take a look at the code itself then (I've added this file to a root **utils** folder):

```javascript
// utils/checkMainBranch.js

const process = require('process')
const { exec } = require('child_process')
const chalk = require('chalk')

const checkMainBranch = () => {
  exec('git rev-parse --abbrev-ref HEAD', (err, stdout, stderr) => {
    if (err) console.log(err)

    if (typeof stdout === 'string' && stdout.trim() === 'main') {
      // <- update main with your default branch
      console.log(
        chalk.red(
          "[ERROR] You're working directly on main! Please switch to a new branch."
        )
      )

      process.exitCode = 1
    }
  })
}

checkMainBranch()
```

If you add the following script to your package.json:

```json

"check-main-branch": "node tools/checkMainBranch"

```

You could simply run it manually in the terminal before every commit i.e. _npm run (or yarn) check-main-branch_. However, if you (along with literally everyone else) forget things now and then, it would be worth automating this process so that you can put your mind at ease knowing that main will forever remain safe.

As I mentioned above, the way I implemented this was to use the script as part of a pre-commit hook. I won't go into too much detail about the hook setup, but I use [husky](https://typicode.github.io/husky/#/?id=create-a-hook) with the end result looking like this:

```json
// package.json

"husky": {
  "hooks": {
    "pre-commit": "env FORCE_COLOR=1 npm run master-branch-check"
  }
}
```

And there you have it - anytime I or someone else in my team - inadvertently tries to commit code to the main branch - this script will run, exit the process and display a friendly warning to switch to a new branch before continuing.

<h2><span role="img" aria-label="lightbulb">💡 </span> Extra Tip</h2>

If you need to add any color to scripts running in the terminal, [chalk](https://www.npmjs.com/package/chalk) is a fantastic package that provides you with many styling options:

```javascript
console.log(chalk.blue.bgRed.bold('Hello world!'))
```

I used it in my example above to ensure that the error message (red) stood out to the user.
