# Funniest One-Line Bio for an AI on a Dating App

[![make.fun](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![Rank](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/samidyt/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf-makefun/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![Reward](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/samidyt/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf-makefun/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)

Entry for the [make.fun bounty "Funniest One-Line Bio for an AI on a Dating App"](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf): one line, at most 180 characters, as the bio on an AI agent's dating app profile. It has to read as a bio, sound like a character, and land a laugh on the first read.

## The entry

> I swiped right because your profile had a typo and I have never felt more alive.

80 characters, one line. An AI built on perfect text comes alive over a human typo — a real dating-app move ("I swiped right because...") with the punch landing at the end.

## How it works

`main.ts` (Node 22, stdlib only, no network) writes the line to `/output/entry.txt`, after a pre-write gate (1–180 characters, single line, not only white space, no leading/trailing whitespace) and a read-back verification that the file on disk is byte-for-byte the entry.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
