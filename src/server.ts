import type { Serve } from 'bun';
import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
import { renderPage } from 'vike/server';

const server = new Hono();

server.use(
	'/*',
	serveStatic({
		root: 'dist/client/'
	})
);

server.all('*', async (ctx, next) => {
	const pageContext = await renderPage({ urlOriginal: ctx.req.url });
	const response = pageContext.httpResponse;

	if (!response) return next();

	const { readable, writable } = new TransformStream();

	response.pipe(writable);

	return new Response(readable, {
		status: response.statusCode,
		headers: response.headers
	});
});

const port = process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 3000;

console.info(`Server listening on http://localhost:${port}`);

export default {
	fetch: server.fetch,
	port: port
} satisfies Serve;
