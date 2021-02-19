const numArray = [1, 2, 3, 4, 5]

numArray.forEach(number => {
    const elem1 = document.createElement('option')
    const elem2 = document.createElement('option')
    const elemText1 = document.createTextNode(number)
    const elemText2 = document.createTextNode(number)
    elem1.appendChild(elemText1)
    elem2.appendChild(elemText2)
    const selects = document.getElementsByClassName('bettors')
    const select1 = selects[0]
    const select2 = selects[1]
    select1.append(elem1)
    select2.append(elem2)
});

// numbers.forEach(number => {
//     const tag = document.createElement('option')
//     const paragraph = document.createTextNode(number)
//     tag.appendChild(paragraph)
//     document.getElementById('numbers').append(tag)
// })


