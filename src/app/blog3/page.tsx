"use client"
import CommentSection from "@/components/CommentSection"

export default function blog() {
    return (
        <div>
            <div className="largContainer">
                <div className="smallContainer bounce in right">
                    <div className=" picContainer"> <img src="technology.png" alt="technology" /></div>
                    <h1 className="heading"> AI, Web 3.0 (VR/AR): </h1>
                    <p className="paragraph">
                        <br /><b>Artificial Intelligence (AI):</b> AI continues to reshape industries by automating tasks and improving
                        decision-making processes. In healthcare, AI is used for diagnostics, personalized medicine, and robotic
                        surgeries, enhancing patient care. In finance, AI algorithms predict market trends and manage risk more
                        efficiently than humans. AI's role in education is also expanding with adaptive learning systems that
                        personalize content for individual learners, making it easier for students to grasp difficult concepts. <br />
                        <br /><b>Web 3.0 and Blockchain:</b><br /> Web 3.0, the next iteration of the internet, is focused on
                        decentralization and privacy, powered by blockchain technology. It will allow users to have more control over
                        their data, giving rise to new business models and innovations like decentralized finance (DeFi), where people
                        can transact without intermediaries. This technology has the potential to transform industries such as banking,
                        supply chain management, and even entertainment by giving creators more control over their content. <br />
                        <br /><b>Virtual and Augmented Reality (VR/AR): </b> <br />VR and AR are creating new ways for people to
                        interact with digital environments. In entertainment, VR is being used to create fully immersive gaming
                        experiences, while AR is revolutionizing fields like education and retail by providing interactive, real-time
                        visuals. VR simulations are also being adopted in professional training environments, such as medicine and
                        aviation, where they offer a safe, risk-free learning environment.
                    </p>
                </div>
                <CommentSection />
            </div>
        </div>
    )
}