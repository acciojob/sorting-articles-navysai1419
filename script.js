 const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled'];

  // Function to remove specified words from a string
  function removeCommonWords(str) {
    const commonWords = ['a', 'an', 'the'];
    const regex = new RegExp('\\b(' + commonWords.join('|') + ')\\b', 'gi');
    return str.replace(regex, '').trim();
  }

  // Sort the bands without considering common words
  const sortedBands = bands.sort((a, b) => {
    const bandA = removeCommonWords(a);
    const bandB = removeCommonWords(b);
    return bandA.localeCompare(bandB);
  });

  // Display the sorted bands on the webpage
  const bandList = document.getElementById('bands');
  sortedBands.forEach(band => {
    const listItem = document.createElement('li');
    listItem.textContent = band;
    bandList.appendChild(listItem);
  });