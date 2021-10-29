import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Math from 'reveal.js/plugin/math/math.esm.js';
import Zoom from 'reveal.js/plugin/zoom/zoom.esm.js';
import PlantUml from './plantUml';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/beige.css';
import 'reveal.js/plugin/highlight/zenburn.css';

const slide = new Reveal({
  hash: true,
  math: {
    mathjax: 'https://cdn.jsdelivr.net/gh/mathjax/mathjax@2.7.8/MathJax.js',
    config: 'TeX-AMS_HTML-full',
    // pass other options into `MathJax.Hub.Config()`
    TeX: { Macros: { RR: '{\\bf R}' } },
  },
  plugins: [Markdown, Highlight, Zoom, PlantUml, Math],
});

slide.initialize();
