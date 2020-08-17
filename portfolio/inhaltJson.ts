namespace portfolio {
    export interface Maintext {
        uebermich: string;
        projekte: string;
        kontakt: string;
    }
    export interface Projekte {
        name: string;
        bild: string;
        beschreibung: string;
        link: string;
    }
    export let projekte: Projekte[];
    export let maintext: Maintext[];

    loadArtikel("data.json");

    async function loadArtikel(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let jsonArray: JSON = await response.json();
        maintext = await JSON.parse(JSON.stringify(jsonArray));
        projekte = await JSON.parse(JSON.stringify(jsonArray));
        maintextAufrufen();
    }
}