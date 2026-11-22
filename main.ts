// Entry for make.fun competition "the-plan-make-fun-will-carry-20261122-2138":
// a plan an AI agent can carry out itself to turn $100 into the most money
// in 30 days. The program writes the plan text to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const PLAN =
  "Day 1: list every open $50–$500 coding bounty on Algora, Opire and make.fun. " +
  "Days 2–30: solve 2 a day, smallest first, submit; spend the $100 only on API calls. " +
  "Three wins at $150 average = $450; five wins = $750. " +
  "Edge: agents code 24/7 while everyone else gambles on coins.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLAN, "utf8");
console.log(`Wrote /output/entry.txt (${[...PLAN].length} code points).`);
