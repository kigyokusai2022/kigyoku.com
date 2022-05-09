import App from './svelte/App.svelte'

window.app = new App({
    target: document.body,
    data: {
        name: 'world'
    }
})