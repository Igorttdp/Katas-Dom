function kata10() {
    function squareNumbersBackwards() {
        let arr = [];
    
        for(let i = 10; i >= 1; i--) {
            arr.push(i**2)
        }
    
        return arr.join(', ');
    }

    const result = document.querySelector('.result');
    const btnStart = document.querySelector('.start');
    
    function done() {
        btnStart.classList.add('done');
        btnStart.innerText = 'Feito :D';
    }


    function showResult() {
        result.innerText = squareNumbersBackwards();
        done();
    }

    document.addEventListener('click', e =>{
        const el = e.target;

        if(el.classList.contains('start')) {
            showResult()
        }
    });
}

kata10()
