import { series } from "./data.js";
import { Serie } from "./serie.js";
//crear tabla principal
function createSeriesTable(series: Serie[]): string {
    let tableContent = `
    <table class="table table-striped table-hover">
        <thead class="thead-dark">
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Channel</th>
                <th>Seasons</th>
            </tr>
        </thead>
        <tbody>
    `;

    series.forEach((serie) => {
        tableContent += `
        <tr>
            <td>${serie.id}</td>
            <td><a href="#" class="serie-link" data-id="${serie.id}">${serie.name}</a></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        </tr>
        `;
    });

    tableContent += "</tbody></table>";
    return tableContent;
}
// funcion para calcular el promedio
function calculateSeasonsAverage(series: Serie[]): number {
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / series.length;
}

//mostrar info adicional taller 2
function displaySeriesDetails(serie: Serie): void {
    const detailContainer = document.getElementById('seriesDetail');
    if (detailContainer) {
        detailContainer.innerHTML = `
        <div class="card">
            <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
            <div class="card-body">
                <h5 class="card-title">${serie.name}</h5>
                <p class="card-text">${serie.description}</p>
                <a href="${serie.link}" target="_blank" class="btn btn-primary">Learn more</a>
            </div>
        </div>
        `;
    }
}
//llamados
const seriesTableContainer = document.getElementById('seriesTable');
if (seriesTableContainer) {
    seriesTableContainer.innerHTML = createSeriesTable(series);
}

const averageSeasons = calculateSeasonsAverage(series);
const averageElement = document.getElementById('seasonsAverage');
if (averageElement) {
    averageElement.textContent = `Seasons average: ${averageSeasons}`;
}

//listeners
document.querySelectorAll('.serie-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const id = (event.target as HTMLElement).getAttribute('data-id');
        const serie = series.find((s: Serie) => s.id === Number(id));
        if (serie) {
            displaySeriesDetails(serie);
        }
    });
});
