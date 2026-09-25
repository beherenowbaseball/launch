# BTB 30-Day Accelerator — Launch Package

## Live external connections
- Application Typeform: https://form.typeform.com/to/oR6wAtQS
- Waitlist Typeform: https://form.typeform.com/to/Sj1esHU0
- $497 Stripe checkout: https://buy.stripe.com/14A5kFbnU7E20gF8JQ7N60W
- Paid Stripe checkout is restricted to 7 completed purchases for the founding cohort.

## Pages
- index.html — giveaway/application landing page
- accelerator.html — $497 paid Accelerator sales page
- waitlist.html — sold-out/next cohort page
- privacy.html — privacy policy
- rules.html — giveaway rules
- terms.html — terms
- success.html — optional buyer success page
- 404.html — static 404 page

## Configuration
Edit `config.js` only. Change:
- `launchPhase`: giveaway | paid | soldout
- `startDate`
- Meta Pixel / GA4 IDs if desired
- URLs if forms/payment links ever change

Current launch phase is `giveaway`, so paid checkout buttons stay hidden until winners are announced. Set `launchPhase: "paid"` to open the remaining 7 paid spots. Set `launchPhase: "soldout"` when the cohort fills.

## Deployment
This is a static site and can be deployed to Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any basic web host. Point the production domain at the folder root.

## GitHub Pages
This repository is ready to publish from the `main` branch root. In GitHub: Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save. The public URL will be `https://beherenowbaseball.github.io/launch/` unless a custom domain is configured.
