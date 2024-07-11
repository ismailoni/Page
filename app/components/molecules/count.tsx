'use client'

import { useEffect, useState } from "react"
import '@/app/components/molecules/blink.css'



export default function Count() {

    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Set the date we're counting down to
        const countDownDate = new Date("July 20, 2024 00:00:00").getTime();

        // Update the countdown every second
        const interval = setInterval(() => {
            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the countdown date
            const distance = countDownDate - now;

            // Calculations for days, hours, minutes, and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Update the countdown state
            setCountdown({ days, hours, minutes, seconds });

            // If the countdown is over, clearInterval
            if (distance < 0) {
                clearInterval(interval);
                // Optionally take action when the countdown is finished
            }
        }, 1000); // Update every second

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="flex flex-col min-h-[20dvh] mt-6 bg-gradient-to-r from-green-900 to-green-700">
            <h1 className="text-3xl font-bold text-white text-center -mb-16 mt-8 blinking-text">Launch at <span> :</span></h1>
            <main className="flex-1 justify-center">
                <section className="w-full flex py-12 md:py-24 lg:py-32 justify-start">
                    <div className="container grid items-center justify-center gap-6 px-4 md:px-6">
                        <div className="grid grid-cols-4 gap-4 my-12">
                            <div className="bg-muted rounded-lg border border-white p-4 flex flex-col items-center justify-center">
                                <div className="text-3xl font-bold text-white">{countdown.days}</div>
                                <div className="text-muted-foreground text-3xl text-wrap text-white">Days</div>
                            </div>
                            <div className="bg-muted rounded-lg border border-white p-4 flex flex-col items-center justify-center">
                                <div className="text-3xl font-bold text-white">{countdown.hours}</div>
                                <div className="text-muted-foreground text-3xl text-white">Hours</div>
                            </div>
                            <div className="bg-muted rounded-lg border border-white p-4 flex flex-col items-center justify-center">
                                <div className="text-3xl font-bold text-white">{countdown.minutes}</div>
                                <div className="text-muted-foreground text-3xl text-white">Mins</div>
                            </div>
                            <div className="bg-muted rounded-lg border border-white p-4 flex flex-col items-center justify-center">
                                <div className="text-3xl font-bold text-white">{countdown.seconds}</div>
                                <div className="text-muted-foreground text-wrap text-3xl text-white">Secs</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
