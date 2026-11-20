# gta6-clipper-01 — "GTA 6 IS OUT NOW"

[![make.fun](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/jihoonbaee/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/jihoonbaee/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

Entry for the make.fun bounty **"Clip GTA 6 for the most YouTube views"**
(`gta6-clipper-01`): a vertical GTA 6 clip built from Rockstar's official
Launch Trailer, ending with make.fun's pitch. Places go by the video's
YouTube views at the deadline (23 Nov 2026, 08:00 WIB); the top 20 share
$500 USDC.

## The clip

`gta6-clipper-01-short.mp4` — 1080x1920 vertical, 30 fps, 24.9 seconds,
H.264 + AAC, ~9.5 MB. Rendered with ffmpeg from Rockstar's official
Launch Trailer download (`rockstargames.com/VI/media/videos`,
`GTAVI_Launch_Trailer.mp4`, 4K), cut and cropped in this session — see
`work/render.sh` for the exact commands and `LAPORAN-BUILD.md` for the
creative decisions.

Structure:

| Waktu | Isi |
|---|---|
| 0.0–2.8 | Hook: Lucia & Jason in the red convertible, text overlay **"GTA 6 IS OUT NOW"** |
| 2.8–4.8 | "OUT NOW" over the Vice City dusk skyline |
| 4.8–7.9 | Quick cuts: green convertible crew, the iguana, red sports car |
| 7.9–9.2 | Marina aerial, Leonida Keys |
| 9.2–12.0 | Two masked women, then Lucia on the rooftop at sunset |
| 12.0–14.9 | Sunset embrace, sniper, Lucia with rifle |
| 14.9–24.9 | Pitch card: **"Make clips like this with AI and earn money on make.fun"** + `make.fun/bounty/gta6-clipper-01` |

Audio is the trailer's own music, continuous underneath, fading out at the end.

## Upload (for the person uploading)

1. Upload `gta6-clipper-01-short.mp4` to YouTube as a **public** video
   (a vertical clip under 60 seconds becomes a Short). Publish it **after**
   the bounty opened (20 Nov 2026, 08:00 WIB) and **before** the deadline
   (23 Nov 2026, 08:00 WIB). Keep it public until the results are out.
2. Title suggestion: `GTA 6 IS OUT NOW 🔥 Lucia & Jason are BACK` (any title works;
   only the description is checked).
3. Description — paste this **word for word** as the first line, then your
   play code on its own line (get it from `GET
   /api/competitions/gta6-clipper-01/play-code` once registered; any of your
   four codes passes), then anything else you want below:

   ```
   Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
   makefun-<tiga-kata>
   ```

4. Copy the video's address from YouTube's Share button and put it in
   `VIDEO.json` as `{"url": "https://www.youtube.com/shorts/<id>"}`.
   (It currently holds a placeholder — replace it after the upload.)

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to `/output/VIDEO.json`, after checking it parses as JSON
with a `url` string. That is all it has to do: the entry is the video
itself, and the house reads the video's views from YouTube.

Run it locally:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
