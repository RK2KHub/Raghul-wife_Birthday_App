# Sundari • React Netflix-Style Treasure Hunt (Path-Fixed)

## Why images weren’t rendering
If you run your app under a sub-path (or your base URL isn't `/`), absolute paths like `/assets/...` can fail.
This version builds image URLs using `import.meta.env.BASE_URL`, so paths work reliably.

## How to run
```bash
npm install
npm run dev
```

## Where to put images (4 per treasure page)
Place images here (inside `public/`):

```
public/assets/treasures/t1/1.(jpg/JPG/png/webp)
public/assets/treasures/t1/2.(...)
public/assets/treasures/t1/3.(...)
public/assets/treasures/t1/4.(...)

public/assets/treasures/t2/1..4
...
public/assets/treasures/t8/1..4
```

## Quick test
After `npm run dev`, open:
- `http://localhost:5173/assets/treasures/t1/1.jpg`
OR if your file is uppercase:
- `http://localhost:5173/assets/treasures/t1/1.JPG`

If you still see nothing, check the **file size** isn’t 0 KB and the names are exactly `1..4`.


## Poem behavior
Poem is hidden/greyed out until the correct answer is unlocked.


## Final Treasure page (wedding card + countdown)
After you unlock Treasure 8 and press **Next**, you’ll go to:
- `/final`

Put these files here:
- `public/assets/couple/left.jpg`
- `public/assets/couple/right.jpg`
- `public/assets/doodles/chettinad-invite.svg`  (already included)


## Birthday FX
Floating balloons + sparkles are enabled on every page. Tap/click to create a small pop burst.


## AI Wedding Card Image (Final Treasure)

The final page uses this file:
- `public/assets/doodles/wedding-card-ai.png`

Replace that file with your AI-generated wedding invitation image.

**Prompt you can use (copy/paste):**
Create a high-end wedding invitation card image in a modern “Netflix-style” dark premium theme with elegant gold accents. Scene: a traditional South Indian Chettinad wedding inside a Chettinad house courtyard (pillars, wooden doors, warm lamps, kolam/rangoli). Show a tasteful, non-photoreal but high-quality 3D-illustration/doodle of a Chettinad bride and groom in wedding attire, with the groom tying the thaali/mangalsutra knot to the bride (no explicit content, just ceremonial). Add subtle floral/kolam motifs in corners. Include clean typography space for:
- “Raghul & Sundari”
- “June 4, 2026”
- “Chettinad Wedding Celebration”
Use soft lighting, mild glow, premium shadows, and a balanced composition suitable for an invitation card. Output as a single image, 1400x900.



---

## Run locally
```bash
npm install
npm run dev
```

## Images
Treasure images:
`public/assets/treasures/t1..t8/1..4.(jpg/png/webp)`

Final page couple photos:
`public/assets/couple/left.jpg`
`public/assets/couple/right.jpg`

Final wedding card image (replace with your AI image):
`public/assets/doodles/wedding-card-ai.png`

## Deploy to GitHub Pages (Option A: gh-pages branch via command)
1) Push to GitHub (main)
2) Run:
```bash
npm run build
npx gh-pages -d dist
```
3) GitHub repo → Settings → Pages → Source: Deploy from a branch → Branch: gh-pages → /(root)

Your site:
https://rk2khub.github.io/Raghul-wife_Birthday_App/

## Deploy to GitHub Pages (Option B: GitHub Actions)
This repo includes `.github/workflows/deploy.yml`.
Enable repo → Settings → Pages → Source: GitHub Actions.
