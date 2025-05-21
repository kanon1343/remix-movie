import { PassThrough } from "node:stream";
import type { EntryContext } from "@remix-run/deno";
import { RemixServer } from "@remix-run/react";
import React from "react";
import { renderToPipeableStream } from "react-dom/server";

export default function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: EntryContext,
) {
	return new Promise((resolve, reject) => {
		const { pipe } = renderToPipeableStream(
			<RemixServer context={remixContext} url={request.url} />,
			{
				onShellReady() {
					const body = new PassThrough();
					responseHeaders.set("Content-Type", "text/html");
					resolve(
						new Response(body, {
							status: responseStatusCode,
							headers: responseHeaders,
						}),
					);
					pipe(body);
				},
				onShellError(err) {
					reject(err);
				},
			},
		);
	});
}
