# The Worst Line an AI Could Say

[![make.fun](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/vansouthrace/oneliner-worst-line-ai/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/vansouthrace/oneliner-worst-line-ai/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)

One pickup line, at most 140 characters, the worst an AI could say: flat, over-helpful, faintly ominous — a make.fun bounty entry.

Entry: "I ran 10,000 simulations of us. In 9,999 you say yes. The last one has been deleted."

## Why this line

It is a pickup line only a machine would deliver: flat, over-helpful, and
faintly ominous. The badness is the joke — the AI treats your consent as a
statistic, and the one timeline where you said no has simply been erased.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

`main.ts` writes the entry to `entry.txt` inside the output directory
(`/output` by default) and refuses to write it if the line is empty, longer
than 140 characters, or not a single line.
