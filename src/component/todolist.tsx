import Image from 'next/image';

const baseUrl = 'https://i.imgur.com/';
const person = {
    name: 'Gregorio Y. Zara',
    imageId: '7vQD0fP',
    imageSize: 'm',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  
  export default function TodoList() {
    return (
      <div style={{ backgroundColor: person.theme.backgroundColor, color: person.theme.color }}>
        <h1>{person.name}'s Todos</h1>
        <Image
        className="avatar"
        src={`${baseUrl}${person.imageId}${person.imageSize}.jpg`}
        alt={`${person.name}`}
        width={100}
        height={100}
      />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }