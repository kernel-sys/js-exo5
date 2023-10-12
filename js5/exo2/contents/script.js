        class Car {
            constructor(make, model, color) {
                this.make = make;
                this.model = model;
                this.color = color;
            }

            // Méthode pour afficher les propriétés de la voiture dans un paragraphe formaté
            showCar() {
                const carDescription = `Une belle ${this.make} ${this.model}, de couleur ${this.color}.`;
                console.log(carDescription); // Affiche dans la console
                return carDescription;
            }
        }

        const myCar = new Car("Nissan", "Skyline", "Rouge");

        // Afficher les propriétés de l'objet sur la page HTML en utilisant la méthode showCar
        const carInfoDiv = document.getElementById("infoVehicule");
        carInfoDiv.innerHTML = `
            <h2>Information du véhicule</h2>
            <p>${myCar.showCar()}</p>
        `;