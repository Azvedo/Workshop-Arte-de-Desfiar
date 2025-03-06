'use client'
import { useState } from 'react';
import { photos } from '@/assets/carrousel/export';


export default function Carrousel() {
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

    const handlePhotoClick = (photo: string) => {
        setSelectedPhoto(photo);
    };

    const handleCloseModal = () => {
        setSelectedPhoto(null);
    };

    return (
        <div className="flex flex-col items-center my-10">
            <div className="flex space-x-4 relative">
                <button
                    className="absolute left-0 top-1/2 z-10 p-4 bg-[#61897d]/70 text-white font-extrabold rounded-full mx-2 cursor-pointer hover:bg-[#61897d] hidden md:block"
                    onClick={() => {
                        const container = document.querySelector('.photo-container');
                        if (container) {
                            container.scrollBy({ left: -300, behavior: 'smooth' });
                        }
                    }}
                >
                    &lt;
                </button>
                <div className="photo-container flex space-x-4 no-scrollbar overflow-x-auto">
                    {photos.map((photo, index) => (
                        <img
                            key={index}
                            src={photo.src}
                            alt={`Photo ${index + 1}`}
                            onClick={() => handlePhotoClick(photo.src)}
                            className="w-96 object-cover cursor-pointer hover:opacity-80"
                        />
                    ))}
                </div>
                <button
                    className="absolute right-0 top-1/2 z-10 p-4 bg-[#61897d]/70 text-white font-extrabold rounded-full mx-2 cursor-pointer hover:bg-[#61897d] hidden md:block"
                    onClick={() => {
                        const container = document.querySelector('.photo-container');
                        if (container) {
                            container.scrollBy({ left: 300, behavior: 'smooth' });
                        }
                    }}
                >
                    &gt;
                </button>
            </div>
            {selectedPhoto && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/85 z-10" onClick={handleCloseModal}>
                    <div className="relative p-4 rounded h-full" onClick={(e) => e.stopPropagation()}>
                        <button className="absolute top-0 right-0 m-2 cursor-pointer text-black p-7 text-3xl" onClick={handleCloseModal}>&times;</button>
                        <img src={selectedPhoto} alt="Selected" className="max-w-full max-h-full" />
                    </div>
                </div>
            )}
        </div>
    );
}
