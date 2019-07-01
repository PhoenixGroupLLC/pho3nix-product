import { LitElement, html, css, property, customElement } from 'lit-element';

@customElement('pho3nix-product')
export class Pho3nixProduct extends LitElement {
    @property({ type: Boolean, reflect: true, attribute: true })
    favored = false;
    @property({ reflect: true, attribute: true })
    colors = [];
    @property({ type: String, reflect: true, attribute: true })
    name = '';
    @property({ type: String, reflect: true, attribute: true })
    category = '';
    @property({ type: String, reflect: true, attribute: true })
    price = '';
    @property({ type: String, reflect: true, attribute: true })
    img = '';

    static get styles() {
        return [
            css`
                @keyframes scale-in-center {
                    0% {
                        transform: scale(0);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                :host {
                    min-width: 300px;
                    min-height: 450px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                h1 {
                    font-family: var(--h1-font-family, initial);
                    font-size: var(--h1-font-size, 14pt);
                    padding: 0.25em 1em 0.25em 1em;
                    margin: -1em 0 0.25em 0;
                    background: var(--h1-bg-color, #ee9ca7);
                    color: var(--h1-color, white);
                    text-align: var(--h1-align, center);
                    transform: rotate(2deg);
                    box-shadow: 0px 0px 5px 0px var(--h1-bg-color, #ee9ca7);
                    text-shadow: 0px 0px 5px 0px black;
                    font-variant: var(--h1-font-variant, small-caps);
                    transition: all 300ms ease;
                }

                :host(:hover) h1 {
                    padding: 0.25em 1.5em 0.25em 1.5em;
                }

                h2 {
                    font-family: var(--h2-font-family, initial);
                    font-size: var(--h2-font-size, 12pt);
                    color: var(--h2-font-color, grey);
                    padding: 0;
                    margin: 0.25em 0 0.25em 0;
                    font-variant:  var(--h2-font-variant, small-caps);
                }

                h3 {
                    font-family: var(--h3-font-family, initial);
                    font-size: var(--h3-font-size, 12pt);
                    color: var(--h3-font-color, black);
                    padding: 0;
                    margin: 0;
                    font-variant:  var(--h3-font-variant, small-caps);
                    text-transform: var(--h3-text-transform, uppercase);
                }

                #img {
                    width: 100%;
                    flex: 1;
                    background-size: var(--img-initial-zoom, 100%);
                    background-position: 0 0;
                    overflow: hidden;
                    position: relative;
                    transition: background-size 300ms ease;
                }
                #img:not(:hover) {
                    transition: background 300ms ease;
                }
                #img:before {
                    content: '';
                    background: var(--img-bg, linear-gradient(to bottom, rgba(255,255,255,0), white, rgba(255,255,255,0)));
                    background-size: inherit;
                    background-position: inherit;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: -1;
                }

                #img:hover {
                    background-size: var(--image-zoom-level, 200%);
                }

                #colors, #actions {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    justify-content: flex-end;
                    position: absolute;
                    box-sizing: border-box;
                }

                #colors {
                    right: 0;
                    padding: 0em 0.75em 1.5em 0em;
                }
                #actions {
                    left: 0;
                    padding: 0em 0em 1.5em 0.75em;
                }

                #actions .i {
                    position: relative;
                    background-color: rgba(255,255,255,.65);
                    box-shadow: 0 0 2px 0 rgba(143,143,143,.4);
                    text-decoration: none;
                    margin: 0.5em 0;
                    transition: all 200ms ease;
                }
                #actions .i:after {
                    content: '';
                    border: none;
                    position: absolute;
                    top: 0;
                    left: 0;
                    pointer-events: none;
                    animation: scale-in-center 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                    display: none;
                }
                #actions a:hover:after {
                    display: initial;
                }
                
                
                ::slotted(a) {
                    cursor: pointer;
                    box-shadow: 0 0 5px 0 rgba(0,0,0,.4);
                    margin: -0.5em 0;
                }
               
                :host(:hover) ::slotted(a) {
                    margin: 0.5em 0;
                }

                ::slotted(a),
                .i, .i:after {
                    border: 5px solid transparent;
                    width: 30px;
                    height: 30px;
                    background-size: 16px 16px;
                    background-position: center;
                    background-repeat: no-repeat;
                    border-radius: 100%;
                    transition: all 300ms ease;
                }
                .i.fav {
                    background-image: url('data:image/svg+xml;base64, PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhciIgZGF0YS1pY29uPSJoZWFydCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtaGVhcnQgZmEtdy0xNiBmYS0yeCI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNDU4LjQgNjQuM0M0MDAuNiAxNS43IDMxMS4zIDIzIDI1NiA3OS4zIDIwMC43IDIzIDExMS40IDE1LjYgNTMuNiA2NC4zLTIxLjYgMTI3LjYtMTAuNiAyMzAuOCA0MyAyODUuNWwxNzUuNCAxNzguN2MxMCAxMC4yIDIzLjQgMTUuOSAzNy42IDE1LjkgMTQuMyAwIDI3LjYtNS42IDM3LjYtMTUuOEw0NjkgMjg1LjZjNTMuNS01NC43IDY0LjctMTU3LjktMTAuNi0yMjEuM3ptLTIzLjYgMTg3LjVMMjU5LjQgNDMwLjVjLTIuNCAyLjQtNC40IDIuNC02LjggMEw3Ny4yIDI1MS44Yy0zNi41LTM3LjItNDMuOS0xMDcuNiA3LjMtMTUwLjcgMzguOS0zMi43IDk4LjktMjcuOCAxMzYuNSAxMC41bDM1IDM1LjcgMzUtMzUuN2MzNy44LTM4LjUgOTcuOC00My4yIDEzNi41LTEwLjYgNTEuMSA0My4xIDQzLjUgMTEzLjkgNy4zIDE1MC44eiIgY2xhc3M9IiI+PC9wYXRoPjwvc3ZnPg==');
                }
                .i.fav.on {
                    background-image: url('data:image/svg+xml;base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiBmb2N1c2FibGU9ImZhbHNlIiBkYXRhLXByZWZpeD0iZmFzIiBkYXRhLWljb249ImhlYXJ0IiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtaGVhcnQgZmEtdy0xNiBmYS0yeCI+PHBhdGggZD0iTTQ2Mi4zIDYyLjZDNDA3LjUgMTUuOSAzMjYgMjQuMyAyNzUuNyA3Ni4yTDI1NiA5Ni41bC0xOS43LTIwLjNDMTg2LjEgMjQuMyAxMDQuNSAxNS45IDQ5LjcgNjIuNmMtNjIuOCA1My42LTY2LjEgMTQ5LjgtOS45IDIwNy45bDE5My41IDE5OS44YzEyLjUgMTIuOSAzMi44IDEyLjkgNDUuMyAwbDE5My41LTE5OS44YzU2LjMtNTguMSA1My0xNTQuMy05LjgtMjA3Ljl6IiBjbGFzcz0iIiBmaWxsPSJyZWQiLz48L3N2Zz4=')
                }
                .i.fav:not(.on):after {
                    background-image: url('data:image/svg+xml;base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiBmb2N1c2FibGU9ImZhbHNlIiBkYXRhLXByZWZpeD0iZmFzIiBkYXRhLWljb249ImhlYXJ0IiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtaGVhcnQgZmEtdy0xNiBmYS0yeCI+PHBhdGggZD0iTTQ2Mi4zIDYyLjZDNDA3LjUgMTUuOSAzMjYgMjQuMyAyNzUuNyA3Ni4yTDI1NiA5Ni41bC0xOS43LTIwLjNDMTg2LjEgMjQuMyAxMDQuNSAxNS45IDQ5LjcgNjIuNmMtNjIuOCA1My42LTY2LjEgMTQ5LjgtOS45IDIwNy45bDE5My41IDE5OS44YzEyLjUgMTIuOSAzMi44IDEyLjkgNDUuMyAwbDE5My41LTE5OS44YzU2LjMtNTguMSA1My0xNTQuMy05LjgtMjA3Ljl6IiBjbGFzcz0iIi8+PC9zdmc+');
                }
                .i.fav.on:hover {
                    background-image: url('data:image/svg+xml;base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiBmb2N1c2FibGU9ImZhbHNlIiBkYXRhLXByZWZpeD0iZmFzIiBkYXRhLWljb249ImhlYXJ0LWJyb2tlbiIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLWhlYXJ0LWJyb2tlbiBmYS13LTE2IiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSJyZWQiIGQ9Ik00NzMuNyA3My44bC0yLjQtMi41Yy00Ni00Ny0xMTgtNTEuNy0xNjkuNi0xNC44TDMzNiAxNTkuOWwtOTYgNjQgNDggMTI4LTE0NC0xNDQgOTYtNjQtMjguNi04Ni41QzE1OS43IDE5LjYgODcgMjQgNDAuNyA3MS40bC0yLjQgMi40Qy0xMC40IDEyMy42LTEyLjUgMjAyLjkgMzEgMjU2bDIxMi4xIDIxOC42YzcuMSA3LjMgMTguNiA3LjMgMjUuNyAwTDQ4MSAyNTUuOWM0My41LTUzIDQxLjQtMTMyLjMtNy4zLTE4Mi4xeiIvPjwvc3ZnPg==')
                }
                .i.cart {
                    background-image: url('data:image/svg+xml;base64, PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhciIgZGF0YS1pY29uPSJzaG9wcGluZy1iYWciIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDQ4IDUxMiIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXNob3BwaW5nLWJhZyBmYS13LTE0IGZhLTJ4Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0zNTIgMTI4QzM1MiA1Ny40MiAyOTQuNTc5IDAgMjI0IDAgMTUzLjQyIDAgOTYgNTcuNDIgOTYgMTI4SDB2MzA0YzAgNDQuMTgzIDM1LjgxNyA4MCA4MCA4MGgyODhjNDQuMTgzIDAgODAtMzUuODE3IDgwLTgwVjEyOGgtOTZ6TTIyNCA0OGM0NC4xMTIgMCA4MCAzNS44ODggODAgODBIMTQ0YzAtNDQuMTEyIDM1Ljg4OC04MCA4MC04MHptMTc2IDM4NGMwIDE3LjY0NS0xNC4zNTUgMzItMzIgMzJIODBjLTE3LjY0NSAwLTMyLTE0LjM1NS0zMi0zMlYxNzZoNDh2NDBjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0czI0LTEwLjc0NSAyNC0yNHYtNDBoMTYwdjQwYzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNHMyNC0xMC43NDUgMjQtMjR2LTQwaDQ4djI1NnoiIGNsYXNzPSIiPjwvcGF0aD48L3N2Zz4=');
                }
                .i.cart:after {
                    background-image: url('data:image/svg+xml;base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiBmb2N1c2FibGU9ImZhbHNlIiBkYXRhLXByZWZpeD0iZmFzIiBkYXRhLWljb249InNob3BwaW5nLWJhZyIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXNob3BwaW5nLWJhZyBmYS13LTE0IiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBkPSJNMzUyIDE2MHYtMzJDMzUyIDU3LjQyIDI5NC41NzkgMCAyMjQgMCAxNTMuNDIgMCA5NiA1Ny40MiA5NiAxMjh2MzJIMHYyNzJjMCA0NC4xODMgMzUuODE3IDgwIDgwIDgwaDI4OGM0NC4xODMgMCA4MC0zNS44MTcgODAtODBWMTYwaC05NnptLTE5Mi0zMmMwLTM1LjI5IDI4LjcxLTY0IDY0LTY0czY0IDI4LjcxIDY0IDY0djMySDE2MHYtMzJ6bTE2MCAxMjBjLTEzLjI1NSAwLTI0LTEwLjc0NS0yNC0yNHMxMC43NDUtMjQgMjQtMjQgMjQgMTAuNzQ1IDI0IDI0LTEwLjc0NSAyNC0yNCAyNHptLTE5MiAwYy0xMy4yNTUgMC0yNC0xMC43NDUtMjQtMjRzMTAuNzQ1LTI0IDI0LTI0IDI0IDEwLjc0NSAyNCAyNC0xMC43NDUgMjQtMjQgMjR6Ii8+PC9zdmc+');
                }
                ::slotted(.red) {
                    border-color: var(--color-icon-border-color, rgba(255,255,255, .6));
                    background: var(--red, red);
                }
                ::slotted(.red:hover) {
                    border-color: var(--color-icon-border-color-hover, rgba(255,255,255, .4));
                }
                ::slotted(.white) {
                    border-color: var(--color-icon-border-color, rgba(255,255,255, .6));
                    background: var(--white, white);
                }
                ::slotted(.white:hover) {
                    border-color: var(--color-icon-border-color-hover, rgba(255,255,255, .4));
                }
                ::slotted(.black) {
                    border-color: var(--color-icon-border-color, rgba(255,255,255, .6));
                    background: var(--black, black);
                }
                ::slotted(.black:hover) {
                    border-color: var(--color-icon-border-color-hover, rgba(255,255,255, .4));
                }
      `
        ];
    }

    protected onMouseHover = (evt: MouseEvent) => {
        const img: HTMLDivElement = <HTMLDivElement>this.imageElement;
        if (img) {
            const { offsetLeft, offsetTop, offsetHeight, offsetWidth } = img;
            const { pageX, pageY } = evt;
            const value = `${((pageX - offsetLeft) / offsetWidth)*100}% ${((pageY - offsetTop) / offsetHeight)*100}%`;
            img.style.backgroundPosition = value;
        }
    }

    protected onMouseLeave = () => {
        const img: HTMLDivElement = <HTMLDivElement> this.imageElement;
        if (img) {
            img.style.backgroundPosition = 'unset';
        }
    }

    firstUpdated() {
        const img: HTMLDivElement = <HTMLDivElement> this.imageElement;
        if (img) {
            img.addEventListener('mousemove', this.onMouseHover)
            img.addEventListener('mouseleave', this.onMouseLeave)            
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        const img = this.imageElement;
        if (img) {
            img.removeEventListener('mousemove', this.onMouseHover)
            img.removeEventListener('mouseleave', this.onMouseLeave)            
        }
    }

    private get imageElement(): HTMLElement | null {
        return this.renderRoot && this.renderRoot.querySelector('#img');
    }

    protected onFavored = () => {
        this.dispatchEvent(new Event('favored'));
    }

    protected onCarted = () => {
        this.dispatchEvent(new Event('carted'));
    }

    protected render() {
        return html`
        <style>
            #img {
                background-image: url('${this.img}')
            }
        </style>
      <div id="img"> 
        <div id="colors">
            <slot></slot>
        </div>
        <div id="actions">
            <a class="i fav ${this.favored ? 'on' : ''}" @click=${this.onFavored}> </a>
            <a class="i cart" @click=${this.onCarted}> </a>
        </div>
      </div>
      <h1> ${this.name} </h1>
      <h2> ${this.category} </h2>
      <h3> ${this.price} </h3>
    `;
    }
}
