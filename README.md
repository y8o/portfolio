
# Oscar Portfolio Website

This is a personal portfolio website built using **Next.js** and deployed to **GitHub Pages**. It showcases various projects related to **Machine Learning**, **Neural Networks**, and **Geospatial Analysis**. The website is designed to be entirely static, ensuring fast performance and easy deployment.

## Features
- **Static Site**: Entirely static content, including the portfolio and resume.
- **Customizable**: Easily update projects, resume, and social links.
- **Optimized for GitHub Pages**: Deploys to GitHub Pages for free hosting.

## Demo
Check out the live demo on GitHub Pages: [https://y8o.github.io/oscar.portfolio](https://y8o.github.io/oscar.portfolio)

---

## Table of Contents
- [Installation](#installation)
- [Setup Guide](#setup-guide)
  - [Step 1: Prepare Your Next.js Project](#step-1-prepare-your-nextjs-project)
  - [Step 2: Create GitHub Repository](#step-2-create-github-repository)
  - [Step 3: Push Your Code to GitHub](#step-3-push-your-code-to-github)
  - [Step 4: Set Up GitHub Actions for Deployment](#step-4-set-up-github-actions-for-deployment)
  - [Step 5: Configure GitHub Pages](#step-5-configure-github-pages)
- [Updating Your Site](#updating-your-site)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Installation

To get started with this portfolio site on your local machine, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/y8o/oscar.portfolio.git
   cd oscar.portfolio
   ```

2. **Install dependencies**:
   Install the required dependencies using npm:
   ```bash
   npm install
   ```

3. **Run the development server**:
   Start the Next.js development server to view the site locally:
   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` in your browser to see the live version of your site.

---

## Setup Guide

Follow these steps to set up the portfolio site for your own GitHub Pages deployment.

### Step 1: Prepare Your Next.js Project

1. In your project directory, open the `next.config.js` file and make the following changes to enable static export:

   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,  // Disable Next.js image optimization
     },
     basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
     assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
   };

   export default nextConfig;
   ```

   Replace `your-repo-name` with the actual name of your repository.

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository for your portfolio.
2. Name the repository, e.g., `portfolio`.
3. Make sure the repository is **public** and click "Create repository".

### Step 3: Push Your Code to GitHub

1. Initialize your Git repository (if you haven’t already):
   ```bash
   git init
   ```

2. Add your remote GitHub repository:
   ```bash
   git remote add origin https://github.com/yourusername/portfolio.git
   ```

3. Add and commit your changes:
   ```bash
   git add .
   git commit -m "Initial commit"
   ```

4. Push the changes to GitHub:
   ```bash
   git push -u origin main
   ```

### Step 4: Set Up GitHub Actions for Deployment

1. Create a `.github/workflows/deploy.yml` file in the root of your repository and add the following content:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: false

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3

         - name: Setup Node
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'npm'

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build

         - name: Upload artifact to GitHub Pages
           uses: actions/upload-pages-artifact@v2
           with:
             path: ./out

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v2
   ```

### Step 5: Configure GitHub Pages

1. Go to your GitHub repository.
2. Navigate to **Settings** > **Pages**.
3. Under **Source**, select **GitHub Actions**.
4. Wait for the deployment to complete.

Your site should now be deployed to GitHub Pages. You can access it at:

```
https://yourusername.github.io/your-repo-name/
```

---

## Updating Your Site

1. Make changes to your portfolio, such as adding new projects, updating content, or modifying the design.
2. Commit and push your changes to GitHub:

   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```

3. GitHub Actions will automatically rebuild and deploy your site.

---

## Troubleshooting

1. **Images not showing**: Ensure all image paths are correct. For GitHub Pages with a base path, prefix your image paths with the repository name.
2. **404 errors**: If you're using a custom domain or repository name as a subdirectory, make sure your `next.config.js` has the correct `basePath` set.
3. **Links not working**: Ensure all internal links use the Next.js `Link` component and have the correct paths.
4. **Build failures**: Check the GitHub Actions logs for specific errors.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
