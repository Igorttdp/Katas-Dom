function kata1() {
    function oneThroughTwenty() {
        let arr = [];
    
        for(let i = 1; i <= 20; i++) {
            arr.push(i);
        }

        return arr.join(', ');
    }
    
    const result = document.querySelector('.result');
    const btnStart = document.querySelector('.start');
    const next = document.querySelector('.btn2');

    function done() {
        btnStart.classList.add('done');
        btnStart.innerText = 'Feito :D';
    }

    // function nextEx() {
    //     const scale = setInterval(() => {
    //         next.classList.add('scale');
    //     }, 3000);
    // }

    function showResult() {
        result.innerText = oneThroughTwenty()
        done();
        // nextEx();
    }

    document.addEventListener('click', e =>{
        const el = e.target;

        if(el.classList.contains('start')) {
            showResult()
        }
    });
}

kata1()


