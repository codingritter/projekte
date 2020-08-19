"use strict";
var portfolio;
(function (portfolio) {
    function maintextAufrufen() {
        let uebermichHtml = document.getElementById("uebermich");
        uebermichHtml.innerHTML = portfolio.maintext[0].uebermich;
        let uebermichButton = document.getElementById("ueberMichButton");
        uebermichButton.addEventListener("click", uebermichKlick);
        function uebermichKlick(_event) {
            window.location.href = "#uebermichAnker";
        }
        let projekteButton = document.getElementById("projekteButton");
        projekteButton.addEventListener("click", projekteKlick);
        function projekteKlick(_event) {
            window.location.href = "#projekteAnker";
        }
        let kontaktButton = document.getElementById("kontaktButton");
        kontaktButton.addEventListener("click", kontaktKlick);
        function kontaktKlick(_event) {
            window.location.href = "#kontaktAnker";
        }
        let mailButton = document.getElementById("mail");
        mailButton.addEventListener("click", mailKlick);
        function mailKlick(_event) {
            window.location.href = "mailto:marcelritterbuisan@gmail.com";
        }
        let inhaltDiv = document.createElement("div");
        inhaltDiv.setAttribute("id", "inhaltDiv");
        for (let i = 1; i < portfolio.projekte.length; i++) {
            let element = document.createElement("div");
            element.setAttribute("id", "elementDiv");
            inhaltDiv.appendChild(element);
            let name = document.createElement("h2");
            name.innerHTML = portfolio.projekte[i].name;
            element.appendChild(name);
            let bild = document.createElement("img");
            bild.setAttribute("src", portfolio.projekte[i].bild);
            bild.addEventListener("click", bildKlick);
            element.appendChild(bild);
            let beschreibung = document.createElement("p");
            beschreibung.setAttribute("id", "beschreibung");
            beschreibung.innerHTML = portfolio.projekte[i].beschreibung;
            element.appendChild(beschreibung);
            function bildKlick(_event) {
                window.location.href = portfolio.projekte[i].link;
            }
        }
        document.getElementById("main")?.appendChild(inhaltDiv);
    }
    portfolio.maintextAufrufen = maintextAufrufen;
})(portfolio || (portfolio = {}));
//# sourceMappingURL=script.js.map