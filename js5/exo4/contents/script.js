        class Personnage {
            constructor(name, age, rang, crie) {
                this.name = name;
                this.age = age;
                this.rang = rang;
                this.crie = crie;
            }

            // Méthode pour afficher le cri du personnage dans la console et sur la page HTML
            crieEtAffiche() {
                const criMessage = `${this.name} crie : "${this.crie}"`;
                console.log(criMessage); // Affiche dans la console
                const characterInfoDiv = document.getElementById("infoPersonnage");
                characterInfoDiv.innerHTML = `
                    <h2>Information du personnage</h2>
                    <p>${criMessage}</p>
                `;
            }
        }

        const character = new Personnage("John Duff", 30, "Commis", "Oui chef");

        // Appeler la méthode crieEtAffiche pour faire crier le personnage
        character.crieEtAffiche();