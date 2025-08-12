import * as React from 'react';
import './global.css';
import classes from './app.module.css';

export default function App() {
  return (
    <main className={classes.container}>
      <h1 className={classes.title}>
        Piplup + <mark>jsrepo</mark>
      </h1>
      <p className={classes.desc}>
        A highly customizable collection of React components.
        <br />
        Visit the GitHub repository to explore the available components and their usage.
      </p>
      <a
        className={classes.github}
        href="https://github.com/sadik-malik/piplup-jsrepo"
        rel="noopener noreferrer"
        target="_blank"
      >
        View on GitHub
      </a>
    </main>
  );
}
