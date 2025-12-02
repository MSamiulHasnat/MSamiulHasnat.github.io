# MSamiulHasnat Portfolio

## Project Overview

This is a personal portfolio and blog site built to showcase projects, share insights, and provide information about the author. The site serves as a central hub for professional presence online.

## Technical Details

- **Framework:** [Jekyll](https://jekyllrb.com/) - A static site generator
- **Theme:** [Minima](https://github.com/jekyll/minima) - Jekyll's default theme
- **Hosting:** [GitHub Pages](https://pages.github.com/) - Free hosting directly from this repository

## Project Structure

```
├── _config.yml      # Jekyll configuration (site title, theme, description)
├── _posts/          # Blog posts directory (create as needed)
├── index.md         # Homepage content (create as needed)
├── README.md        # This file
└── demo.txt         # Demo file
```

### Key Files

- **`_config.yml`**: Contains site-wide settings including the title, theme, and description.
- **`_posts/`**: Directory for blog posts (create this directory when adding your first post). Each post should be named in the format `YYYY-MM-DD-title.md`.
- **`index.md`**: The main landing page of the site (create this file to customize the homepage).

## Local Development

### Prerequisites

- [Ruby](https://www.ruby-lang.org/en/downloads/) (version 2.7 or higher)
- [Bundler](https://bundler.io/)

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MSamiulHasnat/MSamiulHasnat.github.io.git
   cd MSamiulHasnat.github.io
   ```

2. **Install dependencies:**
   ```bash
   bundle install
   ```

3. **Run the local development server:**
   ```bash
   bundle exec jekyll serve
   ```

4. **View the site:**
   Open your browser and navigate to `http://localhost:4000`

## Deployment

This site is automatically deployed via GitHub Pages. Simply push your changes to the `main` branch, and GitHub will build and deploy the site automatically.

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

The site will be available at: `https://MSamiulHasnat.github.io`

## Customization

### Adding a New Blog Post

1. Create the `_posts/` directory if it doesn't exist
2. Create a new Markdown file in the `_posts/` directory
3. Name it using the format: `YYYY-MM-DD-your-post-title.md`
4. Add front matter at the top of the file:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: YYYY-MM-DD
   ---
   ```
5. Write your content below the front matter

### Changing Site Configuration

Edit `_config.yml` to modify:
- `title`: The site's title
- `description`: A brief description of the site
- `theme`: The Jekyll theme to use

After making changes to `_config.yml`, restart the local server to see the updates.
