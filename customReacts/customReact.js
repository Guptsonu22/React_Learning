function customRender(reactElment,container){
    /*
    const domElment = document.createElement(reactElment.type)
    domElment.innerHTML = reactElment.children

    domElment.setAttribute('href', reactElment.props.href)
    domElment.setAttribute('target',reactElment.props.target)
    container.appendChild(domElment)
    */

   
    const domElment = document.createElement(reactElment.type)
    domElment.innerHTML = reactElment.children
    for (const prop in reactElment.props) {
        if(prop === 'children') continue;
        domElment.setAttribute(prop , reactElment.props[prop])
    }
    container.appendChild(domElment)
}

const reactElment = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'   
}

const mainContainer = document.querySelector('#root')

customRender(reactElment,mainContainer)
