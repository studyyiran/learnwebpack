import './index.css'


function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = ['Hello', 'webpack'].join(' ');

    return element;
}

window.addEventListener('load', () => {
    console.log('start')
    document.body.appendChild(component());
})

