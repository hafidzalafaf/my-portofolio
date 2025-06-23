// src/components/LottiePlayer.tsx
import Lottie from "lottie-react";
import animationData from "@/assets/animations/hero-lottie.json";

export default function LottiePlayer() {
    return (
        <div className="xl:w-1/2">
            <Lottie animationData={animationData} loop autoplay />
        </div>
    );
}
