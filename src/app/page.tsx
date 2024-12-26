import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="parentContainer">
      <div className="topic"> GLOB  BLOGS ! </div>
      <div className="childContainer ">
        <div className=" imageContainer"> <img src="healthy-living.png" alt="healthy" /></div>
        <h1 className="title"> Healthy Living Tips: </h1>
        <p className="description">
          Healthy Living Tips
          Balanced Diet: A healthy lifestyle begins with a balanced diet.
        </p>
        <Link href={"blog"}>
          <button className="readMore"> Read More</button>
        </Link>
      </div>
      <div className="childContainer bounce in right">
        <div className=" imageContainer"> <img src="travel.png" alt="travel" /></div>
        <h1 className="title"> Travel on a Budget: </h1>
        <p className="description">
          Choosing Budget-friendly Destination, when planning travel on a budgetchoosing right destination is critical.
        </p>
        <Link href={"blog1"}>
          <button className="readMore"> Read More</button>
        </Link>
      </div>
      <div className="childContainer bounce in right">
        <div className=" imageContainer"> <img src="growth.png" alt="growth" /></div>
        <h1 className="title"> Personal Growth and Motivation : </h1>
        <p className="description">
          Personal growth starts with setting clear,achievable goals. whether in your career.
        </p>
        <Link href={"blog2"}>
          <button className="readMore"> Read More</button>
        </Link>
      </div>
      <div className="childContainer bounce in right">
        <div className=" imageContainer"> <img src="technology.png" alt="technology" /></div>
        <h1 className="title"> Latest Technology Trends : </h1>
        <p className="description">
          Artificial Intelligence (AI), Web 3.0, Virtual and augmented Reality (VR/AR)
        </p>
        <Link href={"blog3"}>
          <button className="readMore"> Read More</button>
        </Link>
      </div>
      <div className="childContainer bounce in right">
        <div className=" imageContainer"> <img src="craft.png" alt="craft" /></div>
        <h1 className="title"> DIY Craft Ideas : </h1>
        <p className="description">
          Upcycled Home Decore , Handmade Gifts, Eco-frindly Projects. DIY craft offer a fun and
          cost-effective way.
        </p>
        <Link href={"blog4"}>
          <button className="readMore"> Read More</button>
        </Link>
      </div>
      <div className="childContainer bounce in right">
        <div className=" imageContainer"> <img src="sustain.png" alt="sustainable" /></div>
        <h1 className="title"> Sustainable Living : </h1>
        <p className="description">
          Reducing waste,  sustainable living. Repurposing and upcycling,
          Conscious consumption
        </p>
        <Link href={"blog5"}>
          <button className="readMore"> Read More</button>
        </Link>
      </div>
    </div>


  )
}