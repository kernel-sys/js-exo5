        class Personnage {
            constructor(name, age, rang, crie) {
                this.name = name;
                this.age = age;
                this.rang = rang;
                this.crie = crie;
            }

            // 2. Ajoutez une méthode pour afficher les propriétés du personnage sous forme de texte formaté
            getInfo() {
                return `${this.name}, âgé de ${this.age} ans, a le rang de ${this.rang} et crie "${this.crie}".`;
            }
        }

        // 3. Créez une instance de la classe Personnage
        const character = new Personnage("John Duff", 30, "Commis", "Oui chef");

        // 4. Affichez les propriétés de l'objet dans la console
        console.log("Name:", character.name);
        console.log("Age:", character.age);
        console.log("Rang:", character.rang);
        console.log("Crie:", character.crie);

        // 5. Affichez les propriétés de l'objet sur la page HTML en utilisant la méthode getInfo
        const characterInfoDiv = document.getElementById("infoPersonnage");
        characterInfoDiv.innerHTML = `
            <h2>Information du personnage</h2>
            <p>${character.getInfo()}</p>
        `;