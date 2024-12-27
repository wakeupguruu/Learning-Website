import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula, atomDark, materialOceanic, oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Drop from '../Questions/Drop';

const CodeBlock = ({ code }) => {
  // Extract code blocks
  let codeP = code.split('//C++')[0].trim();
  let Python = codeP;

  let codeC = code.split('//C++')[1].split('//Java')[0].trim();
  let Cpp = codeC;

  let Java = code.split('//Java')[1].trim();

  // Map for SyntaxHighlighter language identifiers
  const languageMap = {
    Python: 'python',
    'C++': 'cpp',
    Java: 'java',
  };

  // State for selected theme, language, and code
  const [selectedTheme, setSelectedTheme] = useState(dracula);
  const [selectedLanguage, setSelectedLanguage] = useState('Python');
  const [selectedCode, setSelectedCode] = useState(Python);

  const dropdown = [
    {
      title: 'Language',
      items: [
        { label: 'Python', value: { code: Python, language: 'Python' } },
        { label: 'C++', value: { code: Cpp, language: 'C++' } },
        { label: 'Java', value: { code: Java, language: 'Java' } },
      ],
    },
    {
      title: 'Themes',
      items: [
        { label: 'Dracula', value: dracula },
        { label: 'Atom Dark', value: atomDark },
        { label: 'Material Oceanic', value: materialOceanic },
        { label: 'One Dark', value: oneDark },
      ],
    },
  ];

  return (
    <div className="h-full rounded-lg overflow-hidden overflow-y-auto">
      <div className="border-b px-3 flex items-center justify-between">
        <div className="flex items-center justify-between gap-4">
          {dropdown.map((drop) => (
            <div className="w-28 h-full" key={drop.title}>
              {drop.title === 'Language' ? (
                <Drop
                  title={drop.title}
                  items={drop.items}
                  selecte={(selectedItem) => {
                    setSelectedLanguage(selectedItem.language);
                    setSelectedCode(selectedItem.code);
                  }}
                />
              ) : (
                <Drop title={drop.title} items={drop.items} selecte={setSelectedTheme} />
              )}
            </div>
          ))}
        </div>
      </div>
      <SyntaxHighlighter
        language={languageMap[selectedLanguage]}
        style={selectedTheme}
        customStyle={{
          padding: '20px',
          fontSize: '16px',
          borderRadius: '8px',
          backgroundColor: '#282C34',
        }}
      >
        {selectedCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
