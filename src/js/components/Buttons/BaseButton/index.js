export default class BaseButton {
    constructor(containerId = '', value = ''){
        
        //this.containerId = containerId
        this.container = containerId ? document.getElementById(containerId) : document.body
        this.value = value

        console.log(containerId)
        console.log(value)
    }

    render(){
        
        const btn = document.createElement('button')
        btn.innerText = this.value
        this.container.appendChild(btn)        
        return btn
    }
}