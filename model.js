class Player extends HTMLElement {
    connectedCallback(){
        this.style.top = `${this.getAttribute('y')}px`
        this.style.left = `${this.getAttribute('x')}px`

        let core = document.createElement("div")
        this.appendChild(core)
    }
    
    static get observedAttributes(){
        return ["x", "y", "rotate"]
    }

    attributeChangedCallback (){
        this.style.top = `${this.getAttribute('y')}px`
        this.style.left = `${this.getAttribute('x')}px`

        this.style.transform = `rotateZ(${this.getAttribute('rotate')}deg)`
    }
}


customElements.define("custom-player", Player)