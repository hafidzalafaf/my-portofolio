'use client';

import { TypeAnimation } from "react-type-animation";

interface TypeAnimationProps {
    teks: (string | number)[]
}

export default function TextTypeAnimation({ teks }: TypeAnimationProps) {
    return (
        <TypeAnimation
            sequence={teks}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-mono text-primary !text-sm "
        />

    );
}
