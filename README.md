# Owen Aldrich Setiawan — Portfolio

Static personal portfolio built with HTML, CSS, and JavaScript. Open it with Live Server locally or serve the files directly on Vercel. No Node.js, npm, Vite, or build step is required.

## Run locally

1. Install the **Live Server** extension in Visual Studio Code.
2. Right-click `index.html`.
3. Select **Open with Live Server**.

Do not open the file directly with a `file://` URL because the JavaScript uses browser modules.

## Configure the contact form

The contact form needs a Web3Forms access key. Add it to this meta tag in `index.html`:

```html
<meta name="web3forms-key" content="YOUR_ACCESS_KEY" />
```

The form is not configured while this value is empty. The site does not read `.env` files or Vercel environment variables. The key will be visible in the deployed page, so restrict it to the production domain in the Web3Forms dashboard.

## Deploy to Vercel

1. Import the repository in Vercel.
2. Set **Framework Preset** to **Other**.
3. Leave **Build Command** empty.
4. Set **Output Directory** to `.` (the repository root). This matters because `index.html` is in the root while the `public/` folder also exists.
5. Deploy.

The **View CV** button opens an on-page preview; **Download CV** saves the PDF from `public/cv/`.

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
