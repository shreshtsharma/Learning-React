function customRender(reactElement){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.child;

    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // this set attribute can be customized using loop in case of multiple attributes

    for (const prop in reactElement.props) { 
        if(prop=='children') continue;
            domElement.setAttribute(prop,reactElement.props[prop])
        }
    
    return domElement;
}


const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target: '_blank'
    },
    child: 'click me to visit google'
}


const mainContainer=document.querySelector('#root')
const domElement=customRender(reactElement)
console.log(domElement)
mainContainer.appendChild(domElement)
