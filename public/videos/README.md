# Videos

Drop final hero/event films here:

- `videos/hero/hero.mp4` — homepage hero loop (≤ 8 MB, 1080p, muted-friendly)
- `videos/events/` — event ambience reels

The current build uses an animated hero image system (parallax + ken-burns)
in `src/components/home/Hero.tsx`. When a final film is supplied, mount it in
place of the image layer — the poster image stays as the fallback.
