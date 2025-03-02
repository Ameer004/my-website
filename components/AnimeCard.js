import Image from 'next/image';

export default function AnimeCard({ title, description, image }) {
  return (
    <div>
      <Image src={image} alt={title} width={500} height={300} className="w-full h-64 object-cover" />
      <p className="text-white mt-2">{description}</p>
    </div>
  );
}