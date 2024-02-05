# Astro repro

Minimal repro for two issues listed on Astro:

- [Cookies don't seem to persist across Netlify-adapted server endpoints](https://github.com/withastro/astro/issues/9978)
- [Base path not inferred](https://github.com/withastro/astro/issues/9979)

## First one - cookie permanence across endpoints

As you can see from the below logs, only the "set-cookie" endpoint has access to the cookie being set. The "get-cookie" endpoint retreives nothing:

```
SETTING 1707094290227
GETTING 1707094502379
18:55:02 [302] POST /api/set-cookie 1ms
TOKEN FROM COOKIE undefined
18:55:02 [200] /api/get-cookie 0ms
18:55:02 [200] / 5ms
SETTING 1707094502379
GETTING 1707094504721
18:55:04 [302] POST /api/set-cookie 2ms
TOKEN FROM COOKIE undefined
18:55:04 [200] /api/get-cookie 1ms
18:55:04 [200] / 9ms
TOKEN FROM COOKIE undefined
18:55:18 [200] /api/get-cookie 1ms
18:55:18 [200] / 13ms
SETTING 1707094504721
GETTING 1707094533529
18:55:33 [302] POST /api/set-cookie 1ms
TOKEN FROM COOKIE undefined
18:55:33 [200] /api/get-cookie 1ms
18:55:33 [200] / 17ms
TOKEN FROM COOKIE undefined
18:55:35 [200] /api/get-cookie 5ms
18:55:35 [200] / 20ms
```

## Second one - no implicit base url

If you remove "http://localhost:4321` from any of the URLs (the fetch and form submission on the index page, and the redirect in the set-cookie endpoint), it throws the same error:

```
18:54:41 [ERROR] Failed to parse URL from 
```

This seems troublesome to me, as I eventually want to push my app into production, and have it know the base URL. It's also cumbersome to just type it all out.
