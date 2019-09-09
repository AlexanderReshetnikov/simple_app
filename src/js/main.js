
import BaseComponent from './components/BaseComponent'
import TitleComponent from './components/TitleComponent'
import CenterComponent from './components/CenterComponent'
import ListComponent from './components/ListComponent'

import DomWorker from './DomWorker'


const names = ['Harry', 'Rohn', 'Jinny', 'Hermiona']
DomWorker.mount(
    new TitleComponent('Pro'), 
    document.getElementById('title')
)

DomWorker.mount(
    new ListComponent(names),
    document.getElementById('list')
)

DomWorker.mount(
    new CenterComponent(
        new ListComponent(names)
        ),
        document.getElementById('center')
    
)

const btn = document.createElement('button')
btn.innerText = 'Click'

DomWorker.mount(
    new CenterComponent(btn),
    document.getElementById('center_second')
)

const brush = {
    createComponent: function()  {console.log('obmanka')},
    render: function(canvas) {
        canvas.style.width = '250px'
        canvas.style.height = '250px'
        canvas.style.backgroundColor = this.color
    },
    setColor: function (color){
        this.color = color
        return this
    }
}
DomWorker.mount(
    brush.setColor('red'),
    document.getElementById('other')
)

//import Counter from './components/Counter'

//import {BaseButton, PrettyButton, FunctionalButton} from './components/Buttons'

//const baseBtn = new BaseButton('footer', 'tst')
//baseBtn.render()

//const prettyBtn = new PrettyButton(null, 'pretty')
//prettyBtn.render()

//const funcBtn = new FunctionalButton('footer', 'best', 'pretty-btn', ()=>{alert('da')})
//funcBtn.render()