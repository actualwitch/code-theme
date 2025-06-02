import { writeFile } from "fs/promises";
import { theme } from "./template.ts";

await writeFile(`theme.json`, JSON.stringify(theme, null, 2));
