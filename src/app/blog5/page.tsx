"use client"
import CommentSection from "@/components/CommentSection"

export default function blog() {
    return (
        <div>
            <div className="largContainer">
                <div className="smallContainer bounce in right">
                    <div className=" picContainer"> <img src="sustain.png" alt="sustain" /></div>
                    <h1 className="heading"> Sustainable Living: </h1>
                    <p className="paragraph">
                        <br /><b>Reducing Waste:</b><br /> Reducing waste is one of the core principles of
                        sustainable living. Simple steps like using reusable bags, bottles, and containers can
                        drastically cut down on plastic waste. Composting food scraps and recycling materials like
                        paper and glass are also effective ways to minimize your environmental footprint. Small
                        daily actions, such as avoiding single-use plastics and choosing eco-friendly packaging,
                        can collectively make a significant impact. <br />
                        <br /><b>Repurposing and Upcycling: </b> <br />Rather than buying new items, try to
                        repurpose or upcycle things you already have. For example, old clothes can be turned into
                        cleaning rags, and furniture can be given new life with a fresh coat of paint. Upcycling
                        not only saves money but also reduces the demand for new resources, cutting down on waste
                        and energy consumption in the production process. <br />
                        <br /><b>Conscious Consumption:</b> <br /> Living sustainably also involves making
                        conscious choices about the products and services you use. Opt for brands that prioritize
                        eco-friendly practices and avoid those that engage in harmful environmental practices.
                        Using renewable energy sources, minimizing water usage, and supporting sustainable
                        businesses can contribute to a more eco-friendly lifestyle. Sustainable living is not about
                        perfection but making thoughtful, informed choices that reduce your impact on the planet.
                    </p>
                </div>
                <CommentSection />
            </div>
        </div>
    )
}