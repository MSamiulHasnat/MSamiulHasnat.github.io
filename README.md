# MSamiulHasnat.github.io

This is the personal portfolio and blog website for **MSamiulHasnat**, hosted on GitHub Pages. It is built using **Jekyll**, a simple, blog-aware, static site generator.

The site is designed to showcase research, photography, hobbies, and blog posts, featuring a classic blog layout with a sidebar and clean typography.

## 🚀 Features

- **Static Site Generation**: Fast and secure, built with Jekyll.
- **CMS Integration**: Uses **Decap CMS** (formerly Netlify CMS) for easy content management without touching code.
- **Responsive Design**: Works on desktop and mobile.
- **Categorized Content**: Dedicated sections for Research, Photography, and Hobbies.
- **Classic Blog Layout**: Main content feed with a functional sidebar (About, Search, Recent Posts).

## 📂 Project Structure

Here is an overview of the key directories and files:

- **`_config.yml`**: The main configuration file for the Jekyll site (settings, collections, plugins).
- **`_layouts/`**: HTML templates that define the look of different page types (`default`, `post`, `page`).
- **`_includes/`**: Reusable HTML snippets (e.g., `navbar.html`, `sidebar.html`, `footer.html`).
- **`assets/`**: Contains static assets like CSS (`styles.css`) and images.
- **`admin/`**: Configuration for Decap CMS (`config.yml`) and the admin dashboard entry point (`index.html`).
- **Content Collections**:
  - **`_posts/`**: Blog posts (Markdown files).
  - **`_research/`**: Research project entries.
  - **`_photography/`**: Photography portfolio entries.
  - **`_hobbies/`**: Hobbies and video content.
- **`index.md`**: The homepage file.

## 🛠️ Local Development

To run this website locally on your machine, you need **Ruby** and **Bundler** installed.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/MSamiulHasnat/MSamiulHasnat.github.io.git
    cd MSamiulHasnat.github.io
    ```

2.  **Install dependencies:**
    ```bash
    bundle install
    ```

3.  **Run the server:**
    ```bash
    bundle exec jekyll serve
    ```

4.  **View the site:**
    Open your browser and go to `http://localhost:4000`.

## 📝 Managing Content

### Option 1: Using the Admin Panel (Recommended)
You can manage content easily via the Decap CMS interface.
1.  Navigate to `https://msamiulhasnat.github.io/admin/`.
2.  Login with your GitHub account.
3.  Create or edit posts, research items, and photos using the visual editor.

### Option 2: Manually via GitHub
You can create Markdown files directly in the repository.
- **Blog Post**: Create a file in `_posts/` named `YYYY-MM-DD-title.md`.
- **Research**: Create a file in `_research/`.
- **Photography**: Create a file in `_photography/`.

**Frontmatter Example (for a post):**
```yaml
---
layout: post
title: "My New Post"
date: 2025-12-02 12:00:00
categories: [blog]
---
Your content goes here...
```

## 🎨 Customization

- **Styling**: Edit `assets/css/styles.css` to change colors, fonts, and layout.
- **Sidebar**: Edit `_includes/sidebar.html` to add widgets or change the "About Me" section.
- **Navigation**: Edit `_includes/navbar.html` to change menu links.

## 📄 License

[MIT License](LICENSE) (or specify your preferred license).
