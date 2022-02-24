## 2022-02-21: [Styling Rich Text and Markdown with Tailwind Typography](https://zaengle.com/blog/tailwind-typography-plugin)

### 1. Step 1: Install the plugin

```

# Using npm

> npm install @tailwindcss/typography

# Using Yarn

> yarn add @tailwindcss/typography
```

### 2. Step 2: Add it to your tailwind config file

```
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
```

### 3. Step 3: Write this simple code:

```
<div class="prose">
	{{ content }}
</div>
```

---

{{ content }} is an antlers variable so it may change for you. In this case, it maps to a markdown field in the CMS.
