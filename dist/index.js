import Reveal from '../_snowpack/pkg/revealjs.js';
import Markdown from '../_snowpack/pkg/revealjs/plugin/markdown/markdown.esm.js';
import Highlight from '../_snowpack/pkg/revealjs/plugin/highlight/highlight.esm.js';
import Math from '../_snowpack/pkg/revealjs/plugin/math/math.esm.js';
import Zoom from '../_snowpack/pkg/revealjs/plugin/zoom/zoom.esm.js';
import PlantUml from './plantUml.js';

import '../_snowpack/pkg/revealjs/dist/reveal.css.proxy.js';
import '../_snowpack/pkg/revealjs/dist/theme/beige.css.proxy.js';
import '../_snowpack/pkg/revealjs/plugin/highlight/zenburn.css.proxy.js';

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
