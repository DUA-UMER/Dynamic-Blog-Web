"use client"
import CommentSection from "@/components/CommentSection"

export default function blog() {
    return (
        <div>
            <div className="largContainer">
                <div className="smallContainer bounce in right">
                    <div className=" picContainer"> <img src="healthy-living.png" alt="healthy" /></div>
                    <h1 className="heading"> Healthy Living Tips: </h1>
                    <p className="paragraph">
                        <b>Balanced Diet:</b><br /> A healthy lifestyle begins with a balanced diet.
                        Balanced Diet: Maintaining a healthy lifestyle starts with a
                        balanced diet that includes nutrient-rich foods like fruits,
                        vegetables, lean proteins, and whole grains. Instead of following
                        fad diets, it’s important to focus on long-term habits that nourish
                        the body. Meal prepping is a great way to ensure that you always have
                        healthy meals available, reducing the temptation to grab fast food.
                        Another useful tip is mindful eating—paying attention to portion sizes
                        and savoring your food can prevent overeating and improve digestion. <br />
                        <b>Exercise Routine:</b><br /> Staying active is another crucial element of a
                        healthy lifestyle, but it doesn’t require expensive gym memberships.
                        Simple exercises like walking, yoga, or home-based strength training
                        can improve your overall fitness. Consistency is key, and even 30
                        minutes a day can significantly improve your cardiovascular health,
                        boost energy levels, and reduce stress. Additionally, incorporating
                        a mix of aerobic exercises, strength training, and flexibility exercises
                        can ensure that you stay physically balanced. <br /> <b>Mental Well-being:</b><br />
                        In addition to physical health, mental well-being is essential
                        for a balanced life. Techniques like meditation, mindfulness, and
                        journaling can help you stay grounded and manage stress more effectively.
                        Regular social interactions, time spent in nature, and pursuing hobbies
                        can also improve mental clarity and reduce feelings of burnout. Adequate
                        sleep and rest are just as important, as they allow the body to recover
                        and the mind to refresh, leading to better productivity and overall happiness
                    </p>
                </div>
                <CommentSection />
            </div>
        </div>
    )
}