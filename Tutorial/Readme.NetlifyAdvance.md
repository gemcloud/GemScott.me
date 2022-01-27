#### Splitting huge NetlifyCMS config.yml file to multiple JS files

https://www.iliascreates.com/blog/post/splitting-netlifycms-config-to-multiple-js-files/

### Using Markdown Files for our WebSite Content

    - 1. create your Markdown files;
    - 2. install "" to tell webpack how to load these markdown files
        ```
        > yarn add frontmatter-markdown-loader -D
        ```
    - 3. Add config on file "next.config.js"

        ```
        module.exports = {
            webpack: (config) => {
                config.module.rules.push({
                    test: /\.md$/,
                    loader: 'frontmatter-markdown-loader',
                });
            return config;
            },
        };
    ```

### NetlifyCMS : use the official npm package:

#### 1. To install "netlify-cms-app"

```
> npm i netlify-cms-app
```

#### 2. To create cms\netlify.config.js file to add the configuration

    - backend/repo : your git path e.g. "gemcloud/GemScott.me"
    - backend/branch : "main" | "master' | etc.
    - media_folder: your public/image path
    - public_folder:
    - collections: determines how content types and editor fields in the UI generate files and content in your repository.
        home
        hero_titel
        hero_description
        widget

#### 3. Initialize the CMS

    - to create an admin page for our CMS `pages/admin.tsx`;
    - to run our project to navigate to http://localhost:3000/admin

### Successful!!!
