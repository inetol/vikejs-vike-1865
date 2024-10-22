Steps:

1. `bun i` or `npm i`

Run the server in dev mode...

2. `bun run dev:bun` or `npm run dev`
3. Go to `http://localhost:3000/` in your browser
4. Go to `http://localhost:3000/external`

It is also present in production mode, but I have not been able to replicate it in 100% of the cases...

2. `bun run build:bun` or `npm run build`
3. `bun run preview:bun` or `npm run preview`
4. Go to `http://localhost:3000/` in your browser
5. Go to `http://localhost:3000/external`

Both options should redirect to `https://example.com` successfully (disable browser cache between tests)
