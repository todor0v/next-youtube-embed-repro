# YouTubeEmbed asset reproduction

```sh
npm install
npm run dev
```

Open http://localhost:3000 and inspect the YouTube JavaScript and CSS requests in the browser's Network panel. Both asset URLs use `lite-youtube-embed@master`.

To check a newer Next.js release, update `next` and `@next/third-parties` together:

```sh
npm install next@canary @next/third-parties@canary
npm run dev
```

References:

- https://github.com/paulirish/lite-youtube-embed/pull/214
- https://github.com/GoogleChromeLabs/third-party-capital/pull/94
