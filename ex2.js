let array = [1,2,3,4,5,6,7,8,9,10,11,12];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        continue;
    }
    console.log(array[i]);
}

for (let i = 0; i < array.length; i++) {
    if (array[i] === 10) {
        break;
    }
    console.log(array[i]);
}