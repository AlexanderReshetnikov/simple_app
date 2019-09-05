import PrettyButton from '../PrettyButton'

export default class FunctionalButton extends PrettyButton{
    constructor(containerId, value, className, handlerClick){
        super(containerId, value, className)
        this.handlerClick = handlerClick
    }

    render(){
        const  btn = super.render()
        //const btn = document.createElement('button')
        //btn.innerText = this.value ? this.value : ''
        //btn.classList.add(this.className)
        btn.addEventListener('click', this.handlerClick)

        //this.container.appendChild(btn)
        return btn
    }
}