console.log("chargé script");

let arrayLetter = ["A", "B","C","D","E","F","G","H"];
let monDamier = document.createElement("damier");
document.body.appendChild(monDamier);


for (let lignes = 0; lignes <= 8; lignes++) {
    let maLigne = document.createElement("tr");
    monDamier.appendChild(maLigne);

   

    for (let cellules = 0; cellules <= 8; cellules++) {
        let maCellule = document.createElement("td");
        maLigne.appendChild(maCellule);
        if (cellules == 0 && lignes >= 1) {
            maCellule.textContent = lignes;

        }else {
            ((lignes % 2 == 0 && cellules % 2 == 0) || (lignes % 2 == 1 && cellules % 2 == 1))   
        ? (maCellule.style.backgroundColor = "black")
        : (maCellule.style.backgroundColor = "white");
        }

        
         if (lignes == 0) {
             maCellule.style.backgroundColor = "";
        };
        
         if (lignes == 0 && cellules >= 1) { 
              maCellule.textContent = arrayLetter[cellules-1] 
     };
     }
    
}


