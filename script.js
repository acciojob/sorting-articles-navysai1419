//your JS code here. If required.
 const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

    // Function to remove specified words from a string
    function removeWords(str, wordsToRemove) {
        const regex = new RegExp('\\b(' + wordsToRemove.join('|') + ')\\b', 'gi');
        return str.replace(regex, '').trim();
    }

    // Sorting the bands without considering specified words
    const sortedBands = bands.sort((a, b) => {
        const bandA = removeWords(a, ['a', 'an', 'the']);
        const bandB = removeWords(b, ['a', 'an', 'the']);
        return bandA.localeCompare(bandB);
    });

    // Displaying the sorted bands on the webpage
    const bandList = document.getElementById('band');
    sortedBands.forEach(band => {
        const listItem = document.createElement('li');
        listItem.textContent = band;
        bandList.appendChild(listItem);
    });
