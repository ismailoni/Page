export const ProgramsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section id="3" className="mysection">
            <div className="text-section">
                <p className="subheading text-[#907cff]">OUR PROGRAMS</p>
                <h2>Engage, Learn, and Grow</h2>
                <p>
                    Explore our comprehensive range of programs, from regular and weekly
                    sessions to special adhoc events, designed to enrich your journey with
                    MSSN Unilag.
                </p>
            </div>

            {/* BACKGROUND IMAGE        */}
            <div className="cards-section overflow-x-auto">
                {children}
            </div>
        </section>
    );
}