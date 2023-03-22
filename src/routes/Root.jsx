import { useEffect, useState } from 'react';
import api from '../api';

import Topbar from '../components/Topbar/Topbar';
import SearchContainer from '../components/SearchContainer';
import FontContext from '../contexts/FontContext';

import { getStorageValue } from '../utils/localStorageHelpers';
import '../App.css';

const DATA = {
  word: 'keyboard',
  phonetic: '/ˈkiːbɔːd/',
  phonetics: [
    {
      text: '/ˈkiːbɔːd/',
      audio: '',
    },
    {
      text: '/ˈkiːbɔːd/',
      audio: '',
    },
    {
      text: '/ˈkibɔɹd/',
      audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3',
      sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=1755168',
      license: {
        name: 'BY-SA 3.0',
        url: 'https://creativecommons.org/licenses/by-sa/3.0',
      },
    },
  ],
  meanings: [
    {
      partOfSpeech: 'noun',
      definitions: [
        {
          definition: '(etc.) A set of keys used to operate a typewriter, computer etc.',
          synonyms: [],
          antonyms: [],
        },
        {
          definition:
            'A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.',
          synonyms: [],
          antonyms: [],
        },
        {
          definition:
            'A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.',
          synonyms: [],
          antonyms: [],
        },
      ],
      synonyms: ['electronic keyboard'],
      antonyms: [],
    },
    {
      partOfSpeech: 'verb',
      definitions: [
        {
          definition: 'To type on a computer keyboard.',
          synonyms: [],
          antonyms: [],
          example: 'Keyboarding is the part of this job I hate the most.',
        },
      ],
      synonyms: [],
      antonyms: [],
    },
  ],
  license: {
    name: 'CC BY-SA 3.0',
    url: 'https://creativecommons.org/licenses/by-sa/3.0',
  },
  sourceUrls: ['https://en.wiktionary.org/wiki/keyboard'],
};

function Root() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('keyboard');

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    api
      .get(`/${inputValue}`)
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((error) => {
        setData(error);
      });

    setIsLoading(false);
  };

  return (
    <div className="p-6 w-full md:p-10 lg:px-0 lg:py-9 lg:max-w-3xl lg:m-auto">
      <FontProvider>
        <div className="flex flex-col gap-12">
          <Topbar />
          <SearchContainer
            handleOnChange={(e) => setInputValue(e.target.value)}
            handleOnSubmit={handleOnSubmit}
            value={inputValue}
          />
        </div>
      </FontProvider>
    </div>
  );
}

const FontProvider = ({ children }) => {
  const storedFont = getStorageValue('font');
  const currentFont = storedFont === null ? 'sans-serif' : storedFont;

  const [font, setFont] = useState(currentFont);

  return (
    <FontContext.Provider value={{ font, setFont }}>
      <div style={{ fontFamily: font }}>{children}</div>
    </FontContext.Provider>
  );
};

export default Root;
