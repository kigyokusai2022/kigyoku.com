import App from './svelte/App.svelte'
import "./img/hero.jpg"

window.app = new App({
    target: document.body,
    data: {
        name: 'world'
    }
})