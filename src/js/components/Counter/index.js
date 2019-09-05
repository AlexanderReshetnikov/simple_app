export default class Counter{
    constructor(container){
        this.count = 0
        this.timer = null
        
        this.buildView(container)
    }

    buildView(container){
        const root_element = document.createElement('div')
        root_element.classList.add('counter')

        const display = document.createElement('h3')
        display.classList.add('counter__display')        
        
        const row = document.createElement('div')
        row.classList.add('counter__row')

        const btnPlus = document.createElement('button')
        const btnMinus = document.createElement('button')

        btnPlus.classList.add('counter__btn')
        btnMinus.classList.add('counter__btn')
        btnPlus.innerText = '+'
        btnMinus.innerText = '-'

        btnPlus.addEventListener('click', () => {this.plus(display)} )
        btnMinus.addEventListener('click', () => {this.minus(display)} )

        row.appendChild(btnPlus)
        row.appendChild(btnMinus)
        root_element.appendChild(display)
        root_element.appendChild(row)

        
        //start|stop buttons
        const row_second = document.createElement('div')
        row_second.classList.add('counter__row')

        const btnStartTimer = document.createElement('button')
        const btnStopTimer = document.createElement('button')

        btnStartTimer.classList.add('counter__btn')
        btnStopTimer.classList.add('counter__btn')
        btnStartTimer.innerText = '>'
        btnStopTimer.innerText = 'II'

        btnStartTimer.addEventListener('click', () => {this.timerStart(display)} )
        btnStopTimer.addEventListener('click', () => {this.timerStop()} )

        row_second.appendChild(btnStartTimer)
        row_second.appendChild(btnStopTimer)

        root_element.appendChild(row_second)
        container.appendChild(root_element)

    }
    
    plus(display){
        //console.log(this.timer) 
        this.count++
        display.innerText = this.count
    }

    minus (display){
        //console.log(this.timer) 
        this.count--
        display.innerText = this.count
    }

    timerStart(display){ 
        //console.log(this.timer)         
        if(this.timer < 1)
        {            
            this.timer = setInterval(() => {
                this.count++
                display.innerText = this.count
            }, 1000)
        }    
    }

    timerStop () {
        //console.log(this.timer) 
        clearInterval (this.timer)
        this.timer = null
    }
}