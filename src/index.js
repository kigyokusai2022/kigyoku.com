import App from './svelte/App.svelte'
import "./img/beyond-the-limit.svg"
import "./img/hero.jpg"

window.app = new App({
    target: document.body,
    data: {
        name: 'world'
    }
})