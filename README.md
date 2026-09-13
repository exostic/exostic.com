# exostic.com

Static website for [Exostic](https://exostic.com), served by GitHub Pages.

No framework, no build step: the repository root **is** the site. Edit the HTML, push to `main`, and the
`Deploy to GitHub Pages` workflow publishes it.

## Layout

| Path | Page |
| --- | --- |
| `index.html` | Home (French, canonical) |
| `en/index.html` | Home (English) |
| `fr/jeremy_gay.html`, `en/jeremy_gay.html` | Jérémy Gay's resume (FR / EN) |
| `fr/index.html` | Redirects to `/` |
| `404.html` | Not-found page (picked up automatically by GitHub Pages) |
| `assets/css/site.css` | The whole stylesheet (dark theme only) |
| `assets/css/resume.css` | Resume-specific styles, including print rules |
| `assets/js/site.js` | Header shadow on scroll, mobile menu, print button |
| `assets/img/` | Pre-optimised WebP images at the widths used by `srcset` |
| `assets/fonts/` | Self-hosted Inter Variable (latin subset) |

GitHub Pages serves `fr/jeremy_gay.html` at `/fr/jeremy_gay`, so the historical URLs keep working.

## Local preview

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

## Deployment

- Hosting: GitHub Pages, source **GitHub Actions** (`.github/workflows/pages.yml`).
- Custom domain: `CNAME` contains `exostic.com`. DNS must point the apex to GitHub Pages
  (`A` records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) and
  `www` to `<user>.github.io` via `CNAME`. Enable *Enforce HTTPS* in the repository Pages settings.

## Editing images

Source images are resized with ImageMagick, e.g.

```sh
magick source.png -resize 1024x -strip -quality 80 -define webp:method=6 assets/img/hero-1024.webp
```
