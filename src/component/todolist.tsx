import Image from 'next/image';

const person = {
    name: 'Gregorio Y. Zara',
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
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
        layout="fill"
        objectFit="contain"
      />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }