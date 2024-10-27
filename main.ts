import { series } from "./data.js";
import { Serie } from "./serie.js";

function createSeriesTable(series: Serie[]): string {
    let tableContent = `
    <thead>
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
            <td><a href="${serie.link}" target="_blank">${serie.name}</a></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        </tr>
        `;
    });

    tableContent += "</tbody>";
    return tableContent;
}

function calculateSeasonsAverage(series: Serie[]): number {
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / series.length;
}

const seriesTable = document.createElement('table');
seriesTable.innerHTML = createSeriesTable(series);
document.body.appendChild(seriesTable);

const averageSeasons = calculateSeasonsAverage(series);
const averageElement = document.createElement('p');
averageElement.textContent = `Seasons average: ${averageSeasons}`;
document.body.appendChild(averageElement);
