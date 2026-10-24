# Owen Aldrich Setiawan — Portfolio

Static personal portfolio built with HTML, CSS, and JavaScript. The site does not require Node.js, npm, or a build tool.

## Run locally

1. Install the **Live Server** extension in Visual Studio Code.
2. Right-click `index.html`.
3. Select **Open with Live Server**.

Do not open the file directly with a `file://` URL because the JavaScript uses browser modules.

## Configure the contact form

Add the Web3Forms access key to this meta tag in `index.html`:

```html
<meta name="web3forms-key" content="YOUR_ACCESS_KEY" />
```

The key is used by client-side JavaScript, so it will be visible in the deployed page. Restrict the key to the production domain in the Web3Forms dashboard.

## Deploy to Vercel

1. Import the repository in Vercel.
2. Set **Framework Preset** to **Other**.
3. Leave **Build Command** empty.
4. Leave **Output Directory** empty so Vercel serves the repository root.
5. Deploy.

## Structure

```text
portofolio-owen/
├── index.html
├── project.html
├── public/
│   ├── cv/
│   └── images/
└── src/
    ├── assets/icons/
    ├── css/
    ├── data/content.js
    └── js/
```

See [CONTENT-GUIDE.md](./CONTENT-GUIDE.md) for instructions on updating portfolio content.
