const completeMainFunction = () => {
    // const sampleArray = [1,0,0,0,0,1,0,0];
    // const days = 1;

    // completeCells(sampleArray, days).forEach((ele) => {
    //     console.log(ele);
    // });

    console.log(4 + 3 + 2 + "1");
};

const completeCells = (arr, days) => {
    let tempArray = [];

    while(days > 0) {
        // edge cases
        tempArray[0] = 0 ^ arr[1];
        tempArray[arr.length - 1] = 0 ^ arr[arr.length - 2];

        for(let i = 1; i <= (arr.length - 2); i++) {
            tempArray[i] = arr[i-1] ^ arr[i+1];
        }

        for(let i = 0; i < arr.length; i++) {
            arr[i] = tempArray[i];
        }

        days --;
    }

    return arr;
};

completeMainFunction();