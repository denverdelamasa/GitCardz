# GitCardz 🚀

A fun, community-driven project where anyone can add their own **profile card** styled with **Tailwind CSS**.
Think of it as a giant deck of cards — each one contributed by people from around the world. 🌍

> ⚠️ **Status:** Ready to push — basic card grid and data-driven rendering are implemented. Search function will be added later.

---

## 🌟 Goals

* Teach and practice **open-source collaboration** on GitHub (fork → PR workflow).
* Let people learn Tailwind by creating tiny card components.
* Build an easy-to-contribute, low-friction community showcase.

---

## ⚙ Features

* Data-driven cards loaded from `data/contributors.json`.
* Each contributor can customize their card using Tailwind utility classes via the `containerClasses` field.
* Safe rendering using `createElement` + `textContent` (no `innerHTML` injection).
* Pagination / lazy-rendering on the client to avoid rendering too many cards at once.
* Mobile-friendly, accessible UI.

*(Search/filtering is planned for a later update.)*

---

## 🛠 Tech stack

* Plain **HTML5**
* **Tailwind CSS** (via CDN — no build step required)
* Vanilla **JavaScript** (no frameworks)
* Hosted via **GitHub Pages** or any static host

---

## 💨 Quick start — run locally

1. Clone your fork (or clone the main repo to test locally):

```bash
git clone https://github.com/<your-username>/GitCardz.git
cd GitCardz
```

2. Open the ```index.html``` in the browser (or use a live server if you have the extension).

---

## 📜 File structure (important files)

```
/
├─ index.html                # main page
├─ app.js                    # client loader + renderer
├─ data/
│  └─ contributors.json      # add contributor objects here
├─ CONTRIBUTING.md           # how to add your card + PR flow
├─ README.md                 # this file
└─ LICENSE                   # project license (e.g. MIT)
```

---

## ✏ Contributor JSON example - see ```Contributing``` for more info

```json
{
  "username": "your-github-username",
  "name": "Your Name",
  "avatar": "https://avatars.githubusercontent.com/u/000000?v=4",
  "bio": "Short bio about yourself",
  "tags": ["Frontend", "Tailwind"],
  "containerClasses": "p-5 bg-slate-800 rounded-2xl shadow-lg"
}
```

> ✏ **Note:** `containerClasses` is optional. If you leave it blank, a default card style will be applied.

---

## 📎 Deployment (GitHub Pages)

1. In repo Settings → Pages choose branch `main` and folder `/ (root)` or `/docs` if you prefer.
2. Save — GitHub will deploy and show a public URL.
3. After you merge PRs to `main`, the site will auto-update.

---

## 🎗 License

This project is licensed under the **MIT License** — see the `LICENSE` file for details.

---

## 🎉 Thanks!!! <3

Big thanks to everyone who contributes — whether it’s a small card, a typo fix, or a feature suggestion. This project exists to help folks learn and connect. 💜

If you want help writing your first JSON entry, testing locally, or adding a nicer card style, ping me in the PR and I’ll help review.