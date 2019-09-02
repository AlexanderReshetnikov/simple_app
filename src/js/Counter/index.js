export default class Counter{
    constructor(container){
        this.count = 0
        this.timer = null
        

        this.buildView(container)
    }

    buildView(container){
        const display = document.createElement('h3')
        display.classList.add('counter__display')
        
        
        const row = document.createElement('div')
        row.classList.add('counter__row')

        const btnPlus = document.createElement('button')
        const btnMinus = document.createElement('button')

        btnPlus.classList.add('counter__btn')
        btnMinus.classList.add('counter__btn')
        btnPlus.innerText = 'Up'
        btnMinus.innerText = 'Down'

        btnPlus.addEventListener('click', () => {this.plus(display)} )
        btnMinus.addEventListener('click', () => {this.minus(display)} )

        row.appendChild(btnPlus)
        row.appendChild(btnMinus)
        container.appendChild(display)
        container.appendChild(row)

    }
    
    plus(display){
        this.count++
        display.innerText = this.count
    }

    minus (display){
        this.count--
        display.innerText = this.count
    }

    timerStart(){
        this.timer = setInterval(() => {
            this.count++
            this.display.innerText = this.count
        }, 1000)

    }

    timerStop () {
        clearInterval (this.timer)
    }
}