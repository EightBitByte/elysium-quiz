'use client';
import Link from 'next/link'

export default function BeginButton() {
    const audioElement = new Audio('/check-success.mp3')

    const playSound = () => {
        audioElement.play();
    }

    return (
        <Link
            href="./"
            className="max-w-sm"
            onClick={playSound}
        >
        <div className="max-w-sm pl-1 pt-1 pb-0 bg-burnt-orange text-white text-lg font-dobra font-thin">
            BEGIN
        </div>
        </Link>
    );
}