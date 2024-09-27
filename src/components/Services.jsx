import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices1, brainwaveServicesIcons1 } from "../constants";
import { brainwaveServices2, brainwaveServicesIcons2 } from "../constants";
import { brainwaveServices3, brainwaveServicesIcons3 } from "../constants";
import { PhotoChatMessage, Gradient, VideoBar, VideoChatMessage } from "./design/Services";


const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Do Less. Gain More. Grow Faster. "
          text="Brainwave unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="relative border border-n-1/10 rounded-3xl overflow-hidden">
              <img
                src={service1}
                className="object-cover w-full h-full md:h-auto"
                alt="Smartest AI"
              />
              <div className="p-8 lg:p-20">
                <h4 className="h4 mb-4">WhatsApp Marketing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                Broadcast Promotional Messages (Officially)
                </p>
                <ul className="body-2">
                  {brainwaveServices1.map((item, index) => (
                    <li key={index} className="flex items-start py-4 border-t border-n-6">
                      <img width={24} height={24} src={check} alt="check" />
                      <p className="ml-4">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative border border-n-1/10 rounded-3xl overflow-hidden">
              <img
                src={service2}
                className="object-cover w-full h-full md:h-auto"
                alt="Smartest AI"
                
              />
              <div className="p-8 lg:p-20">
                <h4 className="h4 mb-4">Bulk SMS Marketing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                Efficiently deliver targeted messages to a large audience instantly
                </p>
                <ul className="body-2">
                  {brainwaveServices2.map((item, index) => (
                    <li key={index} className="flex items-start py-4 border-t border-n-6">
                      <img width={24} height={24} src={check} alt="check" />
                      <p className="ml-4">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="relative h-[46rem] bg-n-7 rounded-3xl overflow-hidden">
            <img
              src={service3}
              className="object-cover w-full h-full md:h-auto"
              alt="Scary robot"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-15">
              <h4 className="h4 mb-4">Fast Business Technologies</h4>
              <p className="body-2 mb-[2rem] text-n-3">
              Reach anyone, everywhere, instantly. Messaging solutions tailored to your business goals.
              </p>
              <ul className="flex items-center justify-between">
                {brainwaveServicesIcons1.map((item, index) => (
                  <li
                    key={index}
                    className={`rounded-2xl flex items-center justify-center ${
                      index === 2
                        ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                        : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                    }`}
                  >
                    <div
                      className={
                        index === 2
                          ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                          : ""
                      }
                    >
                      <img src={item} width={24} height={24} alt={item} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <VideoChatMessage />
            <VideoBar />
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
