# MSamiulHasnat Portfolio

A personal portfolio and blog built with Jekyll, showcasing my work, projects, and thoughts. This site is designed to be a central hub for sharing my professional journey and technical insights.

## Tech Stack

- **[Jekyll](https://jekyllrb.com/)**: A static site generator that transforms plain text into beautiful static websites.
- **[Minima Theme](https://github.com/jekyll/minima)**: A clean, minimal Jekyll theme for a simple and elegant design.
- **[GitHub Pages](https://pages.github.com/)**: Free hosting service for static websites directly from this GitHub repository.

## Project Structure

```
MSamiulHasnat.github.io/
├── _config.yml    # Site configuration (title, theme, description, etc.)
├── index.md       # The homepage content
├── _posts/        # Blog posts stored here (format: YYYY-MM-DD-title.md)
├── _site/         # Generated static site (created during local build)
└── README.md      # Project documentation
```

### Key Files and Directories

- **`_config.yml`**: Contains the site-wide configuration settings such as the site title, description, theme, and other Jekyll options.
- **`index.md`**: The homepage of the site. This file contains the content displayed when visitors first arrive.
- **`_posts/`**: Directory where blog posts are stored. Posts should follow the naming convention `YYYY-MM-DD-post-title.md`.
- **`_site/`**: The output directory where Jekyll generates the static HTML files. This folder is created when you build the site locally and should not be committed to version control.

## Local Development

Follow these steps to run the site locally on your machine.

### Prerequisites

Ensure you have the following installed:

- **Ruby** (version 2.5 or higher): [Installation Guide](https://www.ruby-lang.org/en/documentation/installation/)
- **Bundler**: Ruby's dependency manager

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/MSamiulHasnat/MSamiulHasnat.github.io.git
   cd MSamiulHasnat.github.io
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

### Running the Site

Start the local development server:
```bash
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`. The server will automatically rebuild the site when you make changes to the source files.

## Deployment

This site is hosted on **GitHub Pages**. Deployment is automatic:

1. Make your changes and commit them to the repository.
2. Push your changes to the default branch (usually `main` or `master`).
3. GitHub Pages will automatically detect the changes and rebuild the site.

Your updated site will be live at `https://MSamiulHasnat.github.io` within a few minutes.
