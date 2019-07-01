[![Built with pwa–starter–kit](https://img.shields.io/badge/built_with-pwa–starter–kit_-blue.svg)](https://github.com/Polymer/pwa-starter-kit "Built with pwa–starter–kit")

> ## 🛠 Status: Done

# Pho3nix-product

Lit-element to display webshop products.

## Example:

```HTML
    <style>
        pho3nix-product {
            --h1-font-family: 'Playfair Display SC', serif;
            --h1-font-size: 16pt;
            --h1-color: white;
            --h1-align: center;
            --h1-bg-color: red;
            --h1-font-variant: small-caps;
            --h2-font-family: 'Khula', sans-serif;
            --h2-font-size: 12pt;
            --h2-font-color: grey;
            --h2-font-variant: small-caps;
            --h3-font-family: 'Khula', sans-serif;
            --h3-font-size: 12pt;
            --h3-font-color: black;
            --h3-font-variant: initial;
            --h3-text-transform: uppercase;
            --img-initial-zoom: 100%;
            --img-bg: linear-gradient(to bottom, rgba(255,255,255,0), #ee9ca7, rgba(255,255,255,0));
            --image-zoom-level: 175%;
            --red: red;
            --black: black;
            --white: white;
            --color-icon-border-color: rgba(255,255,255,.6);
            --color-icon-border-color-hover: rgba(255,255,255,.4);
        }
    </style>
    <pho3nix-product name="Nicci" category="Overál" price="9900 HUF" img="/images/test.png" favored>
        <a class="red"> </a>
        <a class="black"> </a>
        <a class="white"> </a>
    </pho3nix-product>
```