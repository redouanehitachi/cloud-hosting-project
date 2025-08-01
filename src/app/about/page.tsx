import Image from "next/image";
import CloudImage from "../../../public/cloud-hosting.png";
const AboutPage = () => {
    return (
        <div>
            <section className="fix-height container m-auto">
                <h1 className="text-3xl font-bold text-gray-800 p-5">About Page</h1>
                <div>
                  <Image 
                  priority
                  src={CloudImage} 
                  alt="Cloud Hosting" 
                  width={500} 
                  height={500}/>
                </div>
            </section>
        </div>
    )
}
export default AboutPage