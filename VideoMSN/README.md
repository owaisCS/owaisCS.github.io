# VideoMSN

**Image Classifiers are Efficient Self-Supervised Video Representation Learners**  
BMVC 2026

Project page for **VideoMSN**, a decoder-free Masked Siamese Network that turns standard image Vision Transformers into efficient self-supervised video representation learners.

- [Project page](https://vcl-iisc.github.io/videomsn/)
- [Supplementary results](./more_results.html)
- Paper / code / checkpoints: coming soon

## Why VideoMSN?

Self-supervised video models often rely on heavy 3D backbones or masked autoencoders that reconstruct pixels for hundreds or thousands of epochs. VideoMSN instead:

1. Arranges sampled video frames into a 2D **super image**.
2. Builds **random views** with temporally consistent (tube) patch masking and **fast/slow focal views** by dropping whole frames.
3. Aligns masked and unmasked embeddings with a **prototype-based Siamese loss**, without a decoder.

Starting from DeiT-v3 or DINO-v3 image encoders, this short video adaptation reaches strong accuracy on Kinetics-400, UCF101, and HMDB51 with up to **160&times; fewer** video pretraining epochs than VideoMAE.

## Results at a glance

| Setting | VideoMSN-DINO | Previous best | Video epochs |
| --- | --- | --- | --- |
| Kinetics-400, ViT-S | **80.8** | 79.5 (SMILE, 800 ep) | 10 |
| Kinetics-400, ViT-B | **83.3** | 83.1 (SMILE, 600 ep) | 10 |
| UCF101, ViT-B | **95.4** | 91.3 (VideoMAE, 3200 ep) | 10 |
| HMDB51, ViT-B | **70.4** | 62.6 (VideoMAE, 4800 ep) | 10 |
| UCF101 low-shot (1k videos) | **89.0** | 86.4 (SMILE) | 10 |

On the same 4&times;H100 setup, VideoMSN-DINO uses **12.3&times;** less wall-clock time and **8.9&times;** fewer total FLOPs than 1600-epoch VideoMAE.

## Website

This repository hosts the academic project page:

| File | Role |
| --- | --- |
| `index.html` | Landing page: abstract, method figures, Kinetics-400 leaderboard, transfer/efficiency/low-shot results, ablations, BibTeX |
| `more_results.html` | Supplementary datasets, hyperparameter sweeps, tube masking, prototypes, and SSV2 studies |
| `static/css/` | Page styles (Bulma + VideoMSN layout) |
| `static/js/` | Tabs, BibTeX copy, scroll-to-top |
| `assets/` | Paper figures used on the project page |

Edit `index.html` and `more_results.html` to update copy, tables, or links. Figures live in `assets/`:

- `videomsn_teaser.png`
- `videomsn_random_view.png`
- `videomsn_focal_view.png`
- `videomsn_architecture.png`

Replace `favicon.ico` before deploying if you want a custom icon.

The page is static and works with GitHub Pages. After you have a PDF, arXiv ID, or code release, point the Paper / arXiv / Code buttons in `index.html` to those URLs and remove the `data-coming-soon` attributes.

## Citation

```bibtex
@inproceedings{iqbal2026videomsn,
  title     = {Image Classifiers are Efficient Self-Supervised Video Representation Learners},
  author    = {Iqbal, Owais and Sarkar, Sudipta and Marjit, Shyam and Chakraborty, Omprakash and Chakraborty, Anirban and Das, Abir},
  booktitle = {British Machine Vision Conference (BMVC)},
  year      = {2026}
}
```

## Acknowledgments

National Supercomputing Mission (NSM) for PARAM Shakti and the DGX GPU cluster at IIT Kharagpur, and C-DAC for additional computing resources.

The page design follows the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template), itself adapted from [Nerfies](https://nerfies.github.io/).

## License

This website is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
