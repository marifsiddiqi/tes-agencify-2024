function visibleNotreExpertise() {
    const dropdownMenuNotre = document.getElementById('popup-notre-expertise')
    // Mendapatkan nilai atribut "visibility"
    const visibilityValueNotre = getComputedStyle(dropdownMenuNotre).getPropertyValue("visibility")

    const dropdownMenuNos = document.getElementById('popup-nos-services')
    const visibilityValueNos = getComputedStyle(dropdownMenuNos).getPropertyValue("visibility")

    if (visibilityValueNotre == 'hidden') {
        if (visibilityValueNos == 'visible') {
            dropdownMenuNos.style.visibility = 'hidden';
            dropdownMenuNos.style.opacity = 0
        }

        dropdownMenuNotre.style.visibility = 'visible'
        dropdownMenuNotre.style.opacity = 1
    } else if (visibilityValueNotre == 'visible') {
        // dropdownMenuNotre.style.visibility = 'hidden'
        dropdownMenuNotre.style.visibility = 'hidden';
        dropdownMenuNotre.style.opacity = 0
    }
}

function visibleNosServices() {
    const dropdownMenuNos = document.getElementById('popup-nos-services')
    // Mendapatkan nilai atribut "visibility"
    const visibilityValueNos = getComputedStyle(dropdownMenuNos).getPropertyValue("visibility")

    const dropdownMenuNotre = document.getElementById('popup-notre-expertise')
    const visibilityValueNotre = getComputedStyle(dropdownMenuNotre).getPropertyValue("visibility")

    if (visibilityValueNos == 'hidden') {
        if (visibilityValueNotre == 'visible') {
            dropdownMenuNotre.style.visibility = 'hidden';
            dropdownMenuNotre.style.opacity = 0
        }

        dropdownMenuNos.style.visibility = 'visible'
        dropdownMenuNos.style.opacity = 1
    } else if (visibilityValueNos == 'visible') {
        // dropdownMenuNos.style.visibility = 'hidden'
        dropdownMenuNos.style.visibility = 'hidden';
        dropdownMenuNos.style.opacity = 0
    }
}