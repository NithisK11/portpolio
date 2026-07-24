# Nithiswaran K — Portfolio

A single-page personal portfolio built with plain HTML, CSS, and JavaScript
(no build step, no framework — works anywhere static files are served,
including GitHub Pages).

## Structure

```
portfolio/
├── index.html                          # the whole site (single page, anchor nav)
├── styles.css                          # design system + all styling
├── script.js                           # active-nav highlighting + contact form
├── projects/
│   └── code-vault.html                 # your Code Vault project, embedded live via <iframe>
├── assets/
│   └── resume/
│       └── Nithiswaran_K_Resume.pdf    # downloadable résumé
└── README.md
```

Page sections (all on `index.html`, linked via `#anchors`):
**Home (README hero) → About → Skills → Experience (commit log) → Projects → Resume → Contact**

## Deploying to GitHub Pages (free, ~5 minutes)

1. Create a new GitHub repository, e.g. `nithiswaran-portfolio`.
2. Upload everything inside the `portfolio/` folder to the **root** of that repo
   (so `index.html` sits at the top level, not inside a subfolder).
3. In the repo, go to **Settings → Pages**.
4. Under **Source**, choose `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
5. GitHub gives you a live URL after ~1 minute, typically:
   `https://<your-username>.github.io/nithiswaran-portfolio/`
6. Any time you push changes to `main`, the live site updates automatically.

### Alternative hosts (also free, drag-and-drop)
- **Netlify** — drag the `portfolio` folder onto app.netlify.com/drop
- **Vercel** — `vercel` CLI or import the GitHub repo
- **Cloudflare Pages** — connect the GitHub repo

## Making the contact form actually send email

Right now the "Send message" button opens the visitor's email app with the
message pre-filled (`mailto:`), because a static site has no server to send
email from. That works, but it depends on the visitor having a mail client
configured. Two easy upgrades, no backend code required:

**Option A — Formspree (simplest)**
1. Sign up at formspree.io, create a form, get your endpoint URL.
2. In `index.html`, change:
   ```html
   <form class="contact-form" id="contactForm">
   ```
   to:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
3. Remove the `script.js` submit-handler for this form (or leave it — Formspree
   ignores the JS interception if you remove the `e.preventDefault()` call).

**Option B — EmailJS**
Lets you send email straight from JavaScript using a free quota. Follow the
"Quick Start" at emailjs.com and swap the `mailto:` line in `script.js` for
their `emailjs.send(...)` call.

## Customizing

- **Colors / fonts**: all defined as CSS variables at the top of `styles.css`
  under `:root`. Change once, updates everywhere.
- **Resume file**: replace `assets/resume/Nithiswaran_K_Resume.pdf` with a
  newer version, keeping the same filename (or update the two `href`s in
  `index.html` that point to it).
- **Adding another project**: duplicate the `.project-card` block in the
  Projects section of `index.html`, and either embed another local HTML file
  the same way `code-vault.html` is embedded, or link out to a GitHub repo /
  live demo instead of using an `<iframe>`.

## Accessibility & performance notes already built in

- Semantic HTML landmarks (`nav`, `main`, `header`, `section`, `footer`)
- Visible keyboard focus states on all links, buttons, and form fields
- `prefers-reduced-motion` respected (blinking cursor and smooth scroll are
  disabled for visitors who request reduced motion)
- Iframe uses `loading="lazy"` so the embedded project doesn't block initial
  page load
