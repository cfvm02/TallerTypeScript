import { series } from "./data.js";
function createSeriesTable(series) {
    var tableContent = "\n    <thead>\n        <tr>\n            <th>#</th>\n            <th>Name</th>\n            <th>Channel</th>\n            <th>Seasons</th>\n        </tr>\n    </thead>\n    <tbody>\n    ";
    series.forEach(function (serie) {
        tableContent += "\n        <tr>\n            <td>".concat(serie.id, "</td>\n            <td><a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.name, "</a></td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>\n        </tr>\n        ");
    });
    tableContent += "</tbody>";
    return tableContent;
}
function calculateSeasonsAverage(series) {
    var totalSeasons = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    return totalSeasons / series.length;
}
var seriesTable = document.createElement('table');
seriesTable.innerHTML = createSeriesTable(series);
document.body.appendChild(seriesTable);
var averageSeasons = calculateSeasonsAverage(series);
var averageElement = document.createElement('p');
averageElement.textContent = "Seasons average: ".concat(averageSeasons);
document.body.appendChild(averageElement);
