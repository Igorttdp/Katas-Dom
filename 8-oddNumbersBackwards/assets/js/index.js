function kata8() {
    function oddNumbersBackwards () {
        let arr = [];
    
        for(let i = 20; i >= 1; i--) {
            i % 2 !== 0 ? arr.push(i) : false
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
        result.innerText = oddNumbersBackwards();
        done();
    }

    document.addEventListener('click', e =>{
        const el = e.target;

        if(el.classList.contains('start')) {
            showResult()
        }
    });
}

kata8()
