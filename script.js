let rodStart = document.getElementById("rodOne")
let rodOffset = document.getElementById("rodTwo")
let rodEnd = document.getElementById("rodThree")

let diskSmall = document.getElementById("diskSmall")

let curDisk;

let selectedRod;

let width

function pickUpDiskStart() {
    curDisk = rodStart.lastElementChild
}

function pickUpDiskOffset() {
    curDisk = rodOffset.lastElementChild
}

function pickUpDiskEnd() {
    curDisk = rodEnd.lastElementChild
}

function dropDiskStart() {
    if (rodStart.lastElementChild === null) {
        selectedRod = rodStart.appendChild(curDisk)
     } else if (curDisk.offsetWidth < rodStart.lastElementChild.offsetWidth) {
        selectedRod = rodStart.appendChild(curDisk)
     }

}

function dropDiskOffset() {
    if (rodOffset.lastElementChild === null) {
        selectedRod = rodOffset.appendChild(curDisk)
     }  else if (curDisk.offsetWidth < rodOffset.lastElementChild.offsetWidth) {
        selectedRod = rodOffset.appendChild(curDisk)
     }
     win()
}

function dropDiskEnd() {
    
    if (rodEnd.lastElementChild === null) {
        selectedRod = rodEnd.appendChild(curDisk)
    } else if (curDisk.offsetWidth < rodEnd.lastElementChild.offsetWidth) {
        selectedRod = rodEnd.appendChild(curDisk)
    }
    win()
}

function win() {
    if (rodStart.lastElementChild === null && rodOffset.lastElementChild === null && rodEnd.lastElementChild === diskSmall) {
        selectedRod = rodEnd.appendChild(curDisk)
        alert('You win!')
        reset()
    } else if (rodStart.lastElementChild === null && rodEnd.lastElementChild === null && rodOffset.lastElementChild === diskSmall) {
        selectedRod = rodOffset.appendChild(curDisk)
        alert('You win!')
        reset()
    }
    
}

function reset() {
    location.reload()
}
// Somehow need a function that checks the last elements width
// In order for you to click the disk it must be the top OR LAST ELEMENT in the div.
// When deciding if you can put a disk on another disk run function that compares the widths and IF the disk you selected less than the last element child then it places
// If it can be placed there. it should remove the element and paste it onto the appropriate rod.