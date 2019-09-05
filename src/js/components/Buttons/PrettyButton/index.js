import BaseButton from '../BaseButton'

export default class PrettyBytton extends BaseButton{
    constructor(containerId, value, className){
        super(containerId, value)
        this.className = className
    }

    render(){
        const btn = super.render()
        btn.classList.add(this.className)
        return btn
        //const btn = document.createElement('button')
        //btn.innerText = this.value ? this.value : ''
        //btn.classList.add(this.className)
        //this.container.appendChild(btn)
    }
}