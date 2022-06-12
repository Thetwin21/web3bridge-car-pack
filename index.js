let parkingLot = document.querySelector('.parkingLot')
let modal = document.querySelector('.modal')
let card = document.querySelector('.modal .overlay .card')
let price = 0

for (let i = 1; i < 16; i++) {
    parkingLot.innerHTML += `
        <div class="slot" id='slot-${i}'>
            <h1>Slot ${i}</h1>
            <button class='btn btn-primary'>Book</button>
        </div>
    `
}

let bookBtns = document.querySelectorAll('.slot button')
bookBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        modal.style.display = 'block'
        window.location.href = '#modal'
        const slotID = btn.parentElement.id.split('-')[1]
        if (slotID <=10) {
            price = 60
            setInterval(()=>{
             price += 15
            }, 300)

        } else {
            price = 100
            setInterval(()=>{
             price += 15
            }, 30000)
        }
        card.innerHTML += `
            <h1>Slot ${index + 1} Amount: $${price}</h1>
            <button class="btn btn-success">Procced</button>
        `
        let proceedBtn = document.querySelector('.modal .overlay .card button')
        proceedBtn.addEventListener('click', (e) => {
            let msg = document.querySelector('.modal .overlay .card .successMsg')
            msg.style.display = 'block'
            setTimeout(() => {
                msg.style.display = 'none'
                card.innerHTML = ''
                modal.style.display = 'none'
            }, 1000)
            
            
        })
    })
})
