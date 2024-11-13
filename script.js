const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	// Get all the price elements from the table
    const prices = document.querySelectorAll('.price');
    let total = 0;

    // Loop through all price elements and add up their values
    prices.forEach(function(priceElement) {
        total += parseFloat(priceElement.textContent); // Convert the price to a number and sum it
    });

    // Create a new row for the total
    const table = document.querySelector('table'); // Get the table element
    const newRow = document.createElement('tr'); // Create a new row

    // Create a new cell for the total and set its colspan to 2 (to span across both columns)
    const newCell = document.createElement('td');
    newCell.setAttribute('colspan', '2'); // Make this cell span across both columns
    newCell.textContent = `Total Price: Rs ${total}`; // Set the text content to the total price

    // Append the new cell to the new row
    newRow.appendChild(newCell);

    // Append the new row to the table (after the last row)
    table.appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);

