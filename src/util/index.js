function render(root, dom) {
    const target = document.querySelector(root)
    if (target) {
        // target.innerText = dom
        console.log(target.innerHTML)
        target.innerHTML = dom
    } else {
        console.error('not found')
    }
}