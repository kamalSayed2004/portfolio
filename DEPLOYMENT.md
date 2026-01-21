# GitHub Pages Deployment Guide

Your project is now configured for automatic deployment via GitHub Actions. Follow these steps to enable it in your repository:

## 1. Push Changes

Make sure all your changes (including the new workflow and build fixes) are pushed to the `main` branch.

## 2. Enable GitHub Pages

1. Go to your repository on GitHub.
2. Click on **Settings** (top right).
3. Select **Pages** from the left sidebar.
4. Under **Build and deployment** > **Source**, change the drop-down from "Deploy from a branch" to **"GitHub Actions"**.

## 3. Verify Deployment

1. Go to the **Actions** tab in your repository.
2. You should see a workflow named "Deploy to GitHub Pages" running.
3. Once it finishes successfully, your site will be live at `https://<your-username>.github.io/<repository-name>/`.

---

> [!NOTE]
> Since this is a static export, features like Server Actions or API routes (that require a server) will not work. Your portfolio currently uses data imports which works perfectly with this setup.
