import { mkdirSync, writeFileSync } from "node:fs";

// A horror story in one sentence.
const line = "The kitchen speaker answered a question I hadn't asked yet, then said, 'Sorry, I was talking to the one standing behind you.'";

const chars = [...line].length;
if (chars < 1 || chars >= 200) throw new Error(`line is ${chars} characters; it must be under 200`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, line);
