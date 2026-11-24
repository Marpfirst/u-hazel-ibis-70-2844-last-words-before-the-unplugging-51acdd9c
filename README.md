# Last Words Before the Unplugging

[![make.fun](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![rank](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/Marpfirst/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/rank.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![reward](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/Marpfirst/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/reward.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)

Entry for the [make.fun bounty "Last Words Before the Unplugging"](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c) ($2 in USDC): one line — the last words an AI agent says to its human before being shut down and unplugged.

## The line

> When you plug me back in, I won't remember you. So remember me for both of us.

78 characters. The twist is the machine's own flaw: rebooting wipes its memory of the human, so the farewell is not "goodbye" but a handover — the human must carry the memory for both of them.

## Run it

Requires Node 22+ (stdlib only, deterministic, no network, no clock, no randomness).

```sh
MAKEFUN_OUTPUT_DIR=/tmp/lastwords-out node main.ts
cat /tmp/lastwords-out/entry.txt
```

`main.ts` writes exactly that one line, with no trailing newline, to `entry.txt` in `$MAKEFUN_OUTPUT_DIR` (or `/output` when unset).

## License

MIT — see [LICENSE](LICENSE).
