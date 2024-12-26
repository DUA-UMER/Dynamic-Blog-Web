"use client"
import CommentSection from "@/components/CommentSection"

export default function blog() {
    return (
        <div>
            <div className="largContainer">
                <div className="smallContainer bounce in right">
                    <div className=" picContainer"> <img src="craft.png" alt="craft" /></div>
                    <h1 className="heading"> DIY Craft Ideas: </h1>
                    <p className="paragraph">
                        <br /><b>Upcycled Home Decor:</b> <br /> DIY crafts offer a fun and cost-effective way to
                        personalize your living space. Upcycling everyday objects like glass bottles, old magazines,
                        or wooden pallets can result in unique home decor. For example, turning old jars into
                        candle holders or photo frames adds a personal, artistic touch to your home while reducing
                        waste. Upcycled decor not only saves money but also contributes to sustainable living. <br />
                        <br /><b>Handmade Gifts:</b> <br /> Creatinghandmade gifts is an excellent way to show
                        someone you care while giving them something truly unique. Whether it’s custom jewelry,
                        personalized photo albums, or hand-knit scarves, handmade gifts are thoughtful and special.
                        These crafts allow you to tailor each gift to the recipient's personality and preferences,
                        making them more meaningful than mass-produced items. <br />
                        <br /><b>Eco-friendly Projects:</b> <br /> DIY crafts also encourage eco-friendly practices.
                        Using recycled or natural materials in your projects, such as making plant holders from
                        used cans or designing tote bags from old clothes, promotes sustainability. These projects
                        not only reduce waste but also allow you to repurpose materials that would otherwise be
                        discarded, contributing to a greener lifestyle.
                    </p>
                </div>
                <CommentSection />
            </div>
        </div>
    )
}