        class Car {
            constructor(make, model, color) {
                this.make = make;
                this.model = model;
                this.color = color;
            }
        }

        // 2. Créez une instance de la classe Car
        const myCar = new Car("Nissan", "Skyline", "Rouge");

        // 3. Affichez les propriétés de l'objet dans la console
        console.log("Marque:", myCar.make);
        console.log("Modèle:", myCar.model);
        console.log("Couleur:", myCar.color);

        // 4. Affichez les propriétés de l'objet sur la page HTML
        const infoVehiculeDiv = document.getElementById("infoVehicule");
        infoVehiculeDiv.innerHTML = `
            <h2>Information du véhicule</h2>
            <p>Marque: ${myCar.make}</p>
            <p>Modèle: ${myCar.model}</p>
            <p>Couleur: ${myCar.color}</p>
        `;