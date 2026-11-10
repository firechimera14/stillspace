# Put StillSpace online (free)

1. Add your installers: copy them into a `downloads/` folder and set the paths in `config.js`
   (windows: 'downloads/StillSpace-Setup.exe', macos: 'downloads/StillSpace.dmg'). Also set your real support email.
   Files over 25 MB (Cloudflare) are better hosted on GitHub Releases: paste that release URL into config.js instead.
2. Host the folder for free:
   - Netlify: go to app.netlify.com/drop and drag the whole stillspace-website folder in. You get a link instantly.
   - Cloudflare Pages: Workers & Pages > Create > Pages > Upload assets, drop the folder.
   - GitHub Pages: push the folder to a repo, Settings > Pages > deploy from main branch.
3. Custom domain: buy one (Cloudflare Registrar, Namecheap, Porkbun; about $10-15/year). In your host's
   "Custom domains" screen add it, then copy the DNS records it shows into your registrar. HTTPS is automatic.
4. Before launch: read privacy.html and terms.html (they are templates), and test downloads on a clean PC.
