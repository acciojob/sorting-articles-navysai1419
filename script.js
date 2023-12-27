const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

  // Function to strip certain words from the beginning for sorting
  function stripWords(bandName) {
    const ignoreWords = ['The', 'A', 'An'];
    const words = bandName.split(' ');
    if (ignoreWords.includes(words[0])) {
      words.shift();
    }
    return words.join(' ');
  }

  // Sort the bands
  const sortedBands = bands.slice().sort((a, b) => stripWords(a) > stripWords(b) ? 1 : -1);

  // Display the sorted bands
  document.write('<ul>');
  sortedBands.forEach(band => {
    document.write(`<li>${band}</li>`);
  });
  document.write('</ul>');