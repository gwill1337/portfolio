
export function Hero() {

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
                <h1
                    className="font-semibold text-foreground text-3xl sm:text-4xl animate-fade-in"
                    style={{ animationDelay: "0.1s" }}
                >
                    Hi, <span className="text-primary">I'm </span> Gwill1337
                </h1>
                <h2
                    className="font-semibold text-foreground text-xl sm:text-2xl pt-2 max-w-3xl w-full text-center animate-fade-in"
                    style={{ animationDelay: "0.4s"}}
                >
                    Backend & Fullstack developer. </h2>
                <p className="font-medium text-center text-xs sm:text-sm w-10/12 sm:w-3/4 animate-fade-in"
                style={{ animationDelay: "0.5s"}}
                >
                    Сreator of projects such as  "MONA" — the local monitoring service with machine learning and "Severus" — the p2p messenger.
                </p>
            </div>
        </div>
    )
}