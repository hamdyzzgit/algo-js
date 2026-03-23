function sumDistinct(set1, set2) {
    let sum = 0;

    for (let i = 0; i < set1.length; i++) {
        let found = false;
        for (let j = 0; j < set2.length; j++) {
            if (set1[i] === set2[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            sum = sum + set1[i];
        }
    }

    for (let i = 0; i < set2.length; i++) {
        let found = false;
        for (let j = 0; j < set1.length; j++) {
            if (set2[i] === set1[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            sum = sum + set2[i];
        }
    }
    return sum;
}

function dotProduct(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps = ps + (v1[i] * v2[i]);
    }

    if (ps === 0) {
        console.log("The vectors are orthogonal.");
    } else {
        console.log("The vectors are NOT orthogonal.");
    }
}