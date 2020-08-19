namespace portfolio {
    export function maintextAufrufen(): void {
        let uebermichHtml: HTMLElement = <HTMLElement>document.getElementById("uebermich");
        uebermichHtml.innerHTML = maintext[0].uebermich;

        let uebermichButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ueberMichButton");
        uebermichButton.addEventListener("click", uebermichKlick);
        function uebermichKlick(_event: Event): void { 
            window.location.href = "#uebermichAnker";
        }

        let projekteButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("projekteButton");
        projekteButton.addEventListener("click", projekteKlick);
        function projekteKlick(_event: Event): void { 
            window.location.href = "#projekteAnker";
        }

        let kontaktButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("kontaktButton");
        kontaktButton.addEventListener("click", kontaktKlick);
        function kontaktKlick(_event: Event): void { 
            window.location.href = "#kontaktAnker";
        }

        let mailButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("mail");
        mailButton.addEventListener("click", mailKlick);
        function mailKlick(_event: Event): void { 
            console.log("Email schicken"); //Noch verändern!!
        }


        let inhaltDiv: HTMLDivElement = document.createElement("div");
        inhaltDiv.setAttribute("id", "inhaltDiv");
        for (let i: number = 1; i < projekte.length; i++) {
            let element: HTMLDivElement = document.createElement("div");
            element.setAttribute("id", "elementDiv");
            inhaltDiv.appendChild(element);
            let name: HTMLElement = document.createElement("h2");
            name.innerHTML = projekte[i].name;
            element.appendChild(name);
            let bild: HTMLImageElement = document.createElement("img");
            bild.setAttribute("src", projekte[i].bild);
            bild.addEventListener("click", bildKlick);
            element.appendChild(bild);
            let beschreibung: HTMLElement = document.createElement("p");
            beschreibung.setAttribute("id", "beschreibung");
            beschreibung.innerHTML = projekte[i].beschreibung;
            element.appendChild(beschreibung);
            
            function bildKlick(_event: Event): void { 
                window.location.href = projekte[i].link;
            }

        }
        document.getElementById("main")?.appendChild(inhaltDiv);
    }
}