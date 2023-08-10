import Section from "@/components/Section";
import Image from "@/components/Image";

type FeaturesProps = {};

const Features = ({}: FeaturesProps) => {
    const content = [
        {
            id: "0",
            title: "Faster 24/7 Customer Service and Personalized Experiences",
         
        },
        {
            id: "1",
            title: "Efficiency Improvement and Cost Reduction",
        },
        {
            id: "2",
            title: "Enhanced Customer Experience and Data Collection",
        },
    ];

    return (
        <Section>
            <div className="container">
                <div className="-mb-16">
                    {[
                        { id: "0", imageUrl: "/images/features/bot-3.png" },
                        { id: "1", imageUrl: "/images/features/bot-4.png" },
                        { id: "2", imageUrl: "/images/features/image-1.jpg" },
                    ].map((item, index) => (
                        <div
                            className="mb-16 md:grid md:grid-cols-2 md:items-center lg:gap-20 xl:gap-40"
                            key={item.id}
                        >
                            <div
                                className={`mb-8 bg-n-6 rounded-3xl md:relative md:mb-0 ${
                                    index % 2 === 0 ? "" : "md:order-1"
                                }`}
                            >
                                <Image
                                    className="w-full rounded-3xl"
                                    src={item.imageUrl}
                                    width={550}
                                    height={600}
                                    alt="Image"
                                />
                                <div
                                    className={`hidden absolute top-5 -right-8 bottom-5 grid-cols-2 w-8 md:grid ${
                                        index % 2 === 0
                                            ? "-right-8"
                                            : "-left-8 rotate-180"
                                    }`}
                                >
                                    <div className="rounded-r-[1.25rem] bg-[#1B1B2E]"></div>
                                    <div className="my-5 rounded-r-[1.25rem] bg-[#1B1B2E]/50"></div>
                                </div>
                            </div>
                            <div
                                className={
                                    index % 2 === 0 ? "md:pl-16" : "md:pr-16"
                                }
                            >

                                <ul className="">
                                    {content.map((item) => (
                                        <li
                                            className="py-4 border-b border-n-1/5 md:py-6"
                                            key={item.id}
                                        >
                                            <div className="flex items-center">
                                                <Image
                                                    src="/images/check.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="Check"
                                                />
                                                <h6 className="body-2 ml-5">
                                                    {item.title}
                                                </h6>
                                            </div>
                                            
                                                <p className="body-2 mt-3 text-n-4">
                                                    {item.text}
                                                </p>
                                            
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Features;
