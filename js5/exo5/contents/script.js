        class Personnage {
            constructor(name, age, rang, crie) {
                this.name = name;
                this.age = age;
                this.rang = rang;
                this.crie = crie;
            }
        }

        const character = new Personnage("John Duff", 30, "Commis", "Oui chef");

        // Convertir l'objet Personnage en JSON
        const characterJSON = JSON.stringify(character);

        // Afficher l'objet JSON dans la console
        console.log("Personnage au format JSON :");
        console.log(characterJSON);

        // Afficher l'objet JSON sur la page HTML
        const characterInfoDiv = document.getElementById("infoPersonnage");
        characterInfoDiv.innerHTML = `
            <h2>Personnage au format JSON</h2>
            <p>${characterJSON}</p>
        `;
