function sortArray(ar, param) {
    let b = true;
    switch (param) {
        case 'up':
            while (b){
                b = false;
                for (let i = 0; i < ar.length-1; i++){
                    if (ar[i] > ar[i+1]){
                        let tmp = ar[i];
                        ar[i] = ar[i+1];
                        ar[i+1] = tmp;
                        b = true;
                    }
                }
            }
            break;
        case 'down':
            while (b){
                b = false;
                for (let i = 0; i < ar.length-1; i++){
                    if (ar[i] < ar[i+1]){
                        let tmp = ar[i];
                        ar[i] = ar[i+1];
                        ar[i+1] = tmp;
                        b = true;
                    }
                }
            }
            break;
        default:
    }

    return ar;
}