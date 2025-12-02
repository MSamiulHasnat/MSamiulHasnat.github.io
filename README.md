# MSamiulHasnat Portfolio

## Introduction

This is a personal portfolio and blog website hosted on GitHub Pages. It serves as a platform to showcase my work, projects, and share blog posts about topics that interest me.

## Technical Details

This website is built using:

- **[Jekyll](https://jekyllrb.com/)**: A static site generator that transforms plain text into beautiful static websites.
- **[Minima Theme](https://github.com/jekyll/minima)**: A clean, responsive, and minimal Jekyll theme that provides a great starting point for personal blogs and portfolios.

## Project Structure

| File/Directory | Description |
|----------------|-------------|
| `_config.yml` | Site configuration file containing settings like title, theme, and description. |
| `_posts/` | Directory for blog posts. Posts should be named using the format `YYYY-MM-DD-title.md`. |
| `index.md` | The homepage of the site. |
| `_site/` | The generated static site output (created when building locally; not tracked in Git). |
| `README.md` | This documentation file. |

## Local Development

To run this site locally, follow these steps:

### Prerequisites

- [Ruby](https://www.ruby-lang.org/) (version 2.5.0 or higher)
- [Bundler](https://bundler.io/) gem

### Setup and Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MSamiulHasnat/MSamiulHasnat.github.io.git
   cd MSamiulHasnat.github.io
   ```

2. **Install dependencies:**
   ```bash
   bundle install
   ```

3. **Start the local server:**
   ```bash
   bundle exec jekyll serve
   ```

4. **View the site:**
   Open your browser and navigate to `http://localhost:4000`

## Deployment

This site is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. GitHub Pages detects the Jekyll configuration and builds the site automatically.

No additional deployment steps are required—simply commit and push your changes!

---

*Built with Jekyll and hosted on GitHub Pages*
