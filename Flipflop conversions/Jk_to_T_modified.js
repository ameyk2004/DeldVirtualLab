function runSimulation() {
    const rows = [
        [0, 0, 0, 0, 'Invalid'],
        [0, 1, 1, 'Invalid', 0],
        [1, 0, 1, 1,'Invalid'],
        [1, 1, 0, 'Invalid',1],
    ];

    const truthTable = document.getElementById('truthTable');

    // Clear previous results
    truthTable.innerHTML = '';

    // Display table header
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<td rowspan="1" colspan="2"><b>Inputs</b></td><td><b>Outputs</b></td><td rowspan="2" colspan="2" ><b>Destination FlipFlop (JK)</b></td>';
    truthTable.appendChild(headerRow);

    const subHeaderRow = document.createElement('tr');
    subHeaderRow.innerHTML = '<td><b>D</b></td><td><b>Present State</b></td><td><b>Next State</b></td>';
    truthTable.appendChild(subHeaderRow);

    // Display rows with a delay
    rows.forEach((row, rowIndex) => {
        setTimeout(() => {
            const newRow = document.createElement('tr');
            row.forEach((cellValue, cellIndex) => {
                const cell = document.createElement('td');

                // Set the colspan attribute for "Inputs" and "Outputs" cells
                if (cellIndex === 0 || cellIndex === 1) {
                    cell.setAttribute('colspan', 1);
                }

                cell.textContent = cellValue;
                newRow.appendChild(cell);
            });
            truthTable.appendChild(newRow);
        }, rowIndex * 500);
    });
}
