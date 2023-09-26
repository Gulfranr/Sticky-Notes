const button=document.querySelector('#btn')
const container=document.querySelector('.container')

button.addEventListener('click', createNote)


function createNote(){
    const note=document.createElement('div')
    note.classList.add('note')
    note.style.backgroundColor=colorAleatorio()
    note.addEventListener('dblclick', ()=>{
        container.removeChild(note)
    })
    note.setAttribute('contenteditable', 'true')
    container.appendChild(note)
}

function colorAleatorio(){
    const rojo=Math.floor(Math.random()*256)
    const verde=Math.floor(Math.random()*256)
    const azul=Math.floor(Math.random()*256)
    const color=`rgb(${rojo},${verde},${azul})`

    return color
}