## Netlify CMS a client-side react application.

    - it uses Git to store your web site content in your own repository!
    - We don't need to host our CMS separately!

## NetlifyCMS Office Tutorial: [https://www.netlifycms.org/docs/nextjs/](https://www.netlifycms.org/docs/nextjs/)

### Quick-Start

https://preview-auth-doc--netlify-cms-www.netlify.app/docs/quick-start/

#### You have had GitHub Account and can access by NetlifyCMS!

Admin URL : http://localhost:3002/admin/index.html

#### create index.html at public/admin/index.html

#### create config.yml at same folder public/admin.

#### Add mobile.css at same folder public/admin.

### Issue on vercel.app

No Auth Provider Found
Make sure you've configured the API credentials for Github from the Access part of your Netlify site dashboard.

## How to install Netlify CMS on Vercel and Next.js

(https://ironeko.com/posts/how-to-install-netlify-cms-on-vercel)
(https://www.component-driven.dev/articles/netlify-cms-github-oauth-vercel)

1. Initial steps add "admin.html" on public folder

2. Configuring Netlify CMS on Vercel a 'config.yml' file on public folder.

3. Adding your environment variables to Vercel

Step1:
Go to Github
https://github.com/gemcloud/GemScott.me/settings/environments/388506343/edit
Your Profile > Settings > Developer Settings > OAuth Apps

https://<domain>/api/callback

Step2:
config vercel.com Login to use Github
Goto URL : (https://vercel.com/dashboard)

    NEXT_PUBLIC_URL : https://gemscott.vercel.app/
    OAUTH_GITHUB_CLIENT_ID : f20b6c4d7cfa32873d46
    OAUTH_GITHUB_CLIENT_SECRET : 135bd89b2f5643648317e515312269ae72e68f3c

4. Creating an auth endpoint to login into Netlify CMS on Vercel

##

Setup OAuth client in Next.js app

```
> npm install netlify-cms-oauth-provider-node
```
