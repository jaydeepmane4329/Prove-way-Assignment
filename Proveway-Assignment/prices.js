// Function to add price and size options dynamically.
function add(idOfDiv) {
  // Clear the content of all boxes
  const boxes = ['Box_1', 'Box_2', 'Box_3'];
  boxes.forEach(boxId => document.getElementById(boxId).innerHTML = "");

  // Set the correct table content based on the idOfDiv
  const selectedBox = document.querySelector(`.div_${idOfDiv.split('_')[1]}`);
  const selectedRadio = document.getElementById(`box${idOfDiv.split('_')[1]}`);
  const table = document.getElementById(idOfDiv);

  // Mark the selected box and radio button as checked
  selectedRadio.checked = true;
  document.querySelectorAll('.div_1, .div_2, .div_3').forEach(box => box.classList.remove('selected-box'));
  selectedBox.classList.add('selected-box');

  // Insert the HTML content into the selected table
  table.innerHTML = `
    <thead>
      <th>size</th>
      <th>Colour</th>
    </thead>
    <tbody>
      ${[1, 2].map(index => `
        <tr>
          <td>
            <label for="size">#${index}</label>
            <select>
              <option value="s">S</option>
              <option value="8">24</option>
              <option value="8">26</option>
              <option value="8">28</option>
              <option value="8">30</option>
            </select>
          </td>
          <td>
            <select>
              <option value="Colour">Colour</option>
              <option value="red">red</option>
              <option value="white">white</option>
              <option value="blue">blue</option>
              <option value="black">black</option>
            </select>
          </td>
        </tr>
      `).join('')}
    </tbody>`;
}

// Call the add function with 'Box_2' to set Box_2 as the default and check its button
add("Box_2");
