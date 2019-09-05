

import Counter from './components/Counter'

import {BaseButton, PrettyButton, FunctionalButton} from './components/Buttons'

const baseBtn = new BaseButton('footer', 'base')
baseBtn.render()

const prettyBtn = new PrettyButton('footer', 'pretty', 'pretty-btn')
prettyBtn.render()

const funcBtn = new FunctionalButton('footer', 'best', 'pretty-btn', ()=>{alert('da')})
funcBtn.render()