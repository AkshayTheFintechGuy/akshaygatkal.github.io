# Akshay Gatkal profile website — GitHub Pages edition

This package is ready for GitHub Pages and works with either:

- a root repository named `YOUR-USERNAME.github.io`; or
- a normal project repository such as `akshay-profile`.

## Publish

1. Create a public repository on GitHub.
2. Upload every file and folder from this package to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **GitHub Actions**.
5. Open **Actions** and run **Deploy profile website to GitHub Pages**, or push a change to `main`.

The workflow automatically calculates the correct repository path, builds the static website, and publishes it. Future pushes to `main` redeploy the site automatically.

## Local use

```bash
npm install
npm run dev
```

For a production static build:

```bash
npm run build
```

The generated website is written to the `out` directory.
