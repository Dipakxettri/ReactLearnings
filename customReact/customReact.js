function customRender(reactElement, container){

    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);

    container.appendChild(domElement)

*/
    // => Has some problums because we have set attributes that may not require for div or any other tags we have to improve this code.

    // here is a improved code :
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if (prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
        
    }

    container.appendChild(domElement);


} 


const reactElement = {
    type : 'a',
    props: {
        href: 'htts://google.com',
        target: '_blank',

    },
    children: "click me to visit google"
}




const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer)