const playBtn = document.getElementById("start");
playBtn.addEventListener("click", function () {
    console.log(playBtn);

    const numbersArray = generateRandomOrderNumbers(100);
    console.log(numbersArray);

    const gridElem = document.querySelector(".grid");

    for (let i = 0; i < numbersArray.length; i++) {
        const curNumber = numbersArray[i];
        const cell = generateCell(curNumber); 
        cell.addEventListener("click", clickCell)
        gridElem.append(cell);
    }

    // FUNZIONI
    function numbersGenerate(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateRandomOrderNumbers(maxNumber) {
        const result = [];
        while (result.length < maxNumber) {
            const duplicateNumber = numbersGenerate(1, maxNumber);
            if (!result.includes(duplicateNumber)) {
                result.push(duplicateNumber);
            }
        }
        return result;
    }

    function generateCell(numbers) {
        const duplicateCell = document.createElement("div");
        duplicateCell.classList.add("cell");
        duplicateCell.innerHTML = numbers;
        return duplicateCell;
    }

    function clickCell() {
        const click = parseInt(this.textContent);
        this.classList.add("skyblue");
        console.log(this.textContent);
    }


});