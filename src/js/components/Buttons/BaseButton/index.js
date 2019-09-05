export default class BaseButton {
    constructor(containerId, value){
        this.container = containerId ? document.getElementById(containerId) : document.body
        this.value = value
    }

    render(){
        const btn = document.createElement('button')
        btn.innerText = this.value ? this.value : ''
        this.container.appendChild(btn)
        return btn
    }
}