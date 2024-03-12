import Image from "next/image";

export default function Profile() {
  return (
    <div style={{ width: '100%', height: '500px', position: 'relative' }}>
    <Image
        src="https://i.imgur.com/MK3eW3Am.jpg"
        layout="fill"
        objectFit="contain"
        alt="My Image"
    />
    </div>
  );
}