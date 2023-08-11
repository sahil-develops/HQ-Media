import Section from "@/components/Section";
import Image from "@/components/Image";

type FeaturesProps = {};

const Features = ({}: FeaturesProps) => {
    const sectionSubtitles = [
        [
            "Enhanced Customer Engagement", "Efficient 24/7 Support", 'Personalized User Experiences',
        ],
        [
            "Powering Progress Through AI Automation", "Unleashing Potential with AI Automation", "Elevate Your Operations with AI Automation"
        ],
        [
            "Our Consulting Guides Your Path to Success", "Partnering for Effective AI-Driven Consultation", "Elevate Your Business with Expert AI Consulting"
        ],
    ];

    return (
        <Section>
            <div className="container">
                <div className="-mb-16">
                    {[
                        { id: "0", imageUrl: "/images/features/bot-2.png" },
                        { id: "1", imageUrl: "/images/features/bot-4.png" },
                        { id: "2", imageUrl: "/images/features/bot-5.png" },
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
                            <h2 className="h2 mb-4 md:mb-8">
                                {item.id === 0 ? "AI Chatbot" : item.id === 1 ? "AI Automation" : "AI Consulting"}
                            </h2>
                                <ul className="flex flex-col gap-12 text-xl">
                                    {sectionSubtitles[index].map((subtitle, subtitleIndex) => (
                               <div className="flex gap-5">
                                <Image
                                src="/images/check.svg"
                                width={24}
                                height={24}
                                alt="Check"
                            />
                                   <li key={subtitleIndex}>{subtitle}</li>
                               </div>
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
