function permutations(string) {

    let result = []; // init array pour stocker les résultats

    // si chaîne vide, return tableau vide
    if (string.length == 0) return []; 

    // si chaîne contient un seul caractère, return tableau contenant ce caractère
    if (string.length == 1) return string.split(''); 

    // si chaine > 1 : boucle pour parcourir chaque caractère de la chaîne
    for (let i = 0; i < string.length; i++) { 
        // stocker caractère actuel
        const currentStr = string[i]; 
        // créer nouvelle chaîne sans caractère actuel
        const remainingStr = string.slice(0, i).concat(string.slice(i + 1)); 
        // récursif call pour obtenir les permutations de la chaîne restante
        const remainingStrPermuted = permutations(remainingStr);

        // boucle pour parcourir chaque permutation de la chaîne restante
        for (let j = 0; j < remainingStrPermuted.length; j++) { 

            // combiner caractère actuel avec chaque permutation de la chaîne restante
            const permutedArray = [currentStr].concat(remainingStrPermuted[j]).join(''); 
            // add la nouvelle permutation au tableau des résultats
            result.push(permutedArray); 
        }
    }

    // filtrer pour enlever les doublons
    return result.filter((value, index, self) => { 
        return self.indexOf(value) === index; 
    });
}

