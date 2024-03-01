import React from "react";

export const About =() =>{
    return <section id="about" className="section bg-primary">
        <div className="container mx-auto">
            <div className="flex flex-col x1:flex-row gap-24">
                
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full x1:w-1/2">
                    <div className="flex flex-col">
                        <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
                            Aman Shukla
                        </h2>
                        <p className="mb-4 text-accent text-center sm: text-left">Web Developer</p>
                        <div className="h-1 w-72 bg-fuchsia-500 mb-4 mx-auto sm:mx-50"/>
                        <p className="mb-8 text-center sm:text-left">
                            Currently I'm pursuing my B.Tech from NIET Gr. Noida
                            in CSE-(Data Science).Outside of my studies, I enjoy 
                            learning about new technologies, playing games as a hobby.
                            I am a highly motivated and results-oriented student 
                            with a strong interest in leveraging Web Development and 
                            data analysis to solve real-world problems. Currently, I am in my 3rd year,
                            consistently achieving 8 CGPA while actively acquiring valuable skills and experiences 
                            essential for a successful career in respective fields.
                            <br />
                            When I am free, you can often find me tinkering with new 
                            programming languages or exploring the great outdoors with my
                            friends. I am always on the lookout for new challanges and opportunities
                            to learn and grow, and I'm excited to see where my passion takes me next.
                        </p>
                    </div>
                </div>
            </div>

        </div>

    </section>;
};