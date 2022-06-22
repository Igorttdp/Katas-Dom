function kata6() {
    function countingBackwards () {
        let arr = [];
    
        for(let i = 20; i >= 1; i--) {
            arr.push(i)
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
        result.innerText = countingBackwards();
        done();
    }

    document.addEventListener('click', e =>{
        const el = e.target;

        if(el.classList.contains('start')) {
            showResult()
        }
    });
}


kata6()
