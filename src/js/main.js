

import Counter from './components/Counter'

import {BaseButton, PrettyButton, FunctionalButton} from './components/Buttons'

const baseBtn = new BaseButton('footer', 'tst')
baseBtn.render()

const prettyBtn = new PrettyButton(null, 'pretty')
prettyBtn.render()

const funcBtn = new FunctionalButton('footer', 'best', 'pretty-btn', ()=>{alert('da')})
funcBtn.render()