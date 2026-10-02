#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "sinojobs",
  boardId: "sinojobs-official",
  domain: "sinojobs.com",
  npmName: "zc-sinojobs-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
