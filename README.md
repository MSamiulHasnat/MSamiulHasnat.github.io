# MSamiulHasnat Portfolio

A personal portfolio and blog website hosted on [GitHub Pages](https://pages.github.com/).

## Technical Stack

This site is built with [Jekyll](https://jekyllrb.com/), a static site generator that transforms plain text into static websites and blogs. It uses the **Minima** theme and follows the standard directory structure for GitHub Pages.

## Project Structure

| File/Directory | Description |
|----------------|-------------|
| `_config.yml` | Main configuration file for Jekyll (site title, theme, description, etc.) |
| `_posts/` | Directory for blog posts (Markdown files with date-prefixed filenames) |
| `index.md` | The homepage content |
| `assets/` | Static assets such as CSS, images, and JavaScript files |

## Local Development

### Prerequisites

- [Ruby](https://www.ruby-lang.org/en/downloads/) (version 2.5 or higher)
- [Bundler](https://bundler.io/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MSamiulHasnat/MSamiulHasnat.github.io.git
   cd MSamiulHasnat.github.io
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

### Running Locally

Start the local development server:
```bash
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`.

## Deployment

This site is automatically deployed via **GitHub Pages**. Pushing changes to the `main` branch triggers an automatic build and deployment. No additional configuration is required.

---

© MSamiulHasnat
