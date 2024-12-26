"use client"
import CommentSection from "@/components/CommentSection"

export default function blog() {
    return (
        <div>
            <div className="largContainer">
                <div className="smallContainer bounce in right">
                    <div className=" picContainer"> <img src="growth.png" alt="growth" /></div>
                    <h1 className="heading"> Personal Growth and Motivation: </h1>
                    <p className="paragraph">
                        <br /><b>Setting Realistic Goals:</b> <br />Personal growth starts with setting clear, achievable goals. Whether in your
                        career, academics, or personal life, breaking larger goals into smaller, more manageable tasks can make them
                        feel less overwhelming. Use tools like goal-setting journals, to-do lists, or digital apps to track your
                        progress and stay on course. Setting deadlines and rewarding yourself for achieving milestones can keep you
                        motivated throughout the process. <br />
                        <br /><b>Staying Motivated:</b><br /> One of the biggest challenges in personal growth is staying motivated. Motivation can
                        ebb and flow, but discipline is what keeps you moving forward. Surround yourself with positive influences—friends,
                        mentors, or motivational content—that can inspire you during tough times. It’s also helpful to revisit your
                        ‘why’—the reason you set your goal in the first place—whenever you feel discouraged. Additionally, maintaining
                        a balance between work and relaxation can prevent burnout, allowing you to stay focused in the long run. <br />
                        <br /><b>Continuous Learning:</b> <br />Personal growth is a lifelong journey, and continuous learning plays a big role in
                        it. Whether it’s through reading, attending workshops, or taking online courses, staying curious and open to
                        new knowledge allows you to keep growing. Regular reflection is also key; it helps you understand your strengths,
                        identify areas for improvement, and adjust your goals accordingly. Developing self-awareness can guide you
                        toward more meaningful personal and professional success.
                    </p>
                </div>
                <CommentSection />
            </div>
        </div>
    )
}