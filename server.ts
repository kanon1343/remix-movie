import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createRequestHandler } from "@remix-run/deno";
import * as build from "@remix-run/dev/server-build";

const handler = createRequestHandler({
	build,
	mode: "development",
});

console.log("Server started at http://localhost:8000");
serve(handler, { port: 8000 });
