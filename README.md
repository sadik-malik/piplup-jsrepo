# piplup-jsrepo

The collection for highly customizable react components.

<br />

<a href="https://github.com/sadik-malik/piplup-jsrepo/stargazers"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/sadik-malik/piplup-jsrepo"></a>
<a href="https://github.com/sadik-malik/piplup-jsrepo/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/badge/License-MIT-magenta"></a>

## About

**piplup-jsrepo** is a customizable collection of React components designed to help you build modern web interfaces with ease. The repository offers a variety of reusable, animated, and highly configurable components—perfect for developers who want flexibility and creative control. All components are open source and can be tailored to fit your project's unique needs.


## CLI (<a href="https://jsrepo.dev"><img src="https://jsrepo.dev/badges/jsrepo.svg" width="50" alt="jsrepo"></a>)

piplup-jsrepo uses [jsrepo](https://jsrepo.dev) for installing components via CLI.

## Components

### Animations

#### FadeContent
FadeContent animates its children into view when they enter the viewport, with optional blur and delay effects. Useful for scroll-based reveal animations in React apps.

```bash
npx jsrepo add https://jsrepo.piplupjs.com/ts/default/animations/fade-content
```

### Seo

#### JsonLD
JsonLD renders structured data as a script tag for SEO, using schema.org JSON-LD format. Useful for adding rich metadata to your React pages for search engines.

```bash
npx jsrepo add https://jsrepo.piplupjs.com/ts/default/seo/json-ld
```
### Data Fetching

#### Tanstack Query
Ready to use @tanstack/react-query components, enabling powerful data fetching, caching, and synchronization features.

```bash
npx jsrepo add https://jsrepo.piplupjs.com/ts/default/data-fetching/tanstack-query
```

### Layout

#### Masonry
Masonry provides a responsive, gapless grid layout for React components, similar to Pinterest's layout style. It automatically arranges child elements into optimal positions based on available vertical space, making it ideal for image galleries, cards, or any content that benefits from a dynamic, flowing grid. This component uses a polyfill to enable a native CSS masonry-based layout, ensuring broad browser compatibility.

```bash
npx jsrepo add https://jsrepo.piplupjs.com/ts/default/layout/masonry
```


### Typography

#### Prose
Renders a typography container with optional styling for prose content.

```bash
npx jsrepo add https://jsrepo.piplupjs.com/ts/default/typography/prose
```

## Responsive Design

piplup-jsrepo components use a set of default breakpoints for responsive design similar to [tailwindcss](https://tailwindcss.com/docs/responsive-design):

| Name    | Min Width         |
|---------|-------------------|
| xs      | 0px               |
| sm      | 40rem (640px)     |
| md      | 48rem (768px)     |
| lg      | 64rem (1024px)    |
| xl      | 80rem (1280px)    |
| 2xl     | 96rem (1536px)    |

You can customize these breakpoints as needed in your project.

## How To Contribute?

Contributions are welcome! Check the [Open Issues](https://github.com/sadik-malik/piplup-jsrepo/issues) to see how you can help.

## License

Licensed under the [MIT license](https://github.com/sadik-malik/piplup-jsrepo/blob/main/LICENSE).
