function kata4() {
    function multiplesOfFive () {
        let arr = [];
    
        for(let i = 1; i <= 100; i++) {
            i % 5 === 0 ? arr.push(i) : false
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
        result.innerText = multiplesOfFive();
        done();
    }

    document.addEventListener('click', e =>{
        const el = e.target;

        if(el.classList.contains('start')) {
            showResult()
        }
    });
}

kata4();