# Abdunazar Ibragimov: portfolio

Personal portfolio built with React and Vite. There's no UI library and no CSS framework: everything is in `src/`.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Where to edit things

All content lives in `src/data/`, so you never need to touch the components to update the site.

| File | What's in it |
|---|---|
| `src/data/profile.js` | Name, headline, intro, links, languages, skills |
| `src/data/projects.js` | Every project (the field guide is at the top of the file) |
| `src/data/experience.js` | Jobs, newest first |
| `src/data/education.js` | University, bootcamps and certificates |

### Add a project

1. Put screenshots in `public/projects/`. Wide shots around 1280×580 fit best.
2. In `src/data/projects.js`, copy an existing block and change the fields.
3. Set `featured: true` to show it as a big card in "Selected work". Otherwise it goes in the "More projects" grid.
4. Add `modules: [...]` for a backend project, and the card shows its module map.

The numbers in the hero (products live, APIs, modules) are counted from this file, so they update by themselves.

Example for the Telegram bot:

```js
{
  id: 'star-bot',
  title: 'Star Bot',
  category: 'telegram',
  status: 'live',
  year: 2026,
  summary: 'What it does, in one or two sentences.',
  highlights: ['Point one', 'Point two'],
  stack: ['NestJS', 'Telegraf', 'PostgreSQL'],
  images: [{ src: '/projects/star-bot.jpg', alt: 'Star Bot chat' }],
  live: 'https://t.me/your_bot',
  repos: [{ label: 'Code', url: 'https://github.com/Abdunazar7/tg-star-bot' }],
},
```

### Add a certificate

1. Put the image (`.jpg`/`.png`) or `.pdf` in `public/certificates/`.
2. In `src/data/education.js`, set `file: '/certificates/your-file.jpg'` on the certificate.

Certificates without a `file` stay hidden, so the section only appears once you add the first one.

### Replace the CV

Overwrite `public/cv-abdunazar-ibragimov.pdf`.

## Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. On vercel.com, click **Add New** → **Project** and import the repo. Vercel detects Vite automatically: the build command is `npm run build` and the output folder is `dist`.
3. Every push to `main` redeploys.

Or from the terminal: `npx vercel`.
