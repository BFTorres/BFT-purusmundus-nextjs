import Image from "next/image";
import Link from "next/link";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/undraw_transfer_money_re_6o1h.svg"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Hannovers Reinigungsexperten
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Entdecken Sie mit Purusmundus die führende Reinigungsexpertise im Raum Hannover und profitieren Sie von unserem hochqualifizierten Team, das stets auf höchstem Niveau arbeitet, um Ihren individuellen Reinigungsanforderungen gerecht zu werden. Unsere größte Belohnung ist Ihre Zufriedenheit. Kontaktieren Sie uns noch heute und lassen Sie uns Ihr Reinigungsprojekt gemeinsam zum Erfolg führen.
                </p>
              </div>
              {/* <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Premier support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                 
                </p>
              </div> */}
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Individuelle Reinigungslösungen
                </h3>
                <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Mit unserem Leistungsüberblick erhalten Sie einen Einblick in unser breites Spektrum an Reinigungsdienstleistungen. Bei einer persönlichen Beratung gehen wir detailliert auf Ihre Bedürfnisse ein und erstellen ein maßgeschneidertes Angebot, das perfekt auf Sie zugeschnitten ist. Lassen Sie uns gemeinsam Ihr Reinigungsprojekt zum Erfolg führen.
                </p>
                {/* <div className="flex items-center justify-end lg:pr-0">
                  <Link
                    href="/signup"
                    className="ease-in-up rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                  >
                    Kontakt
                  </Link>
                </div> */}
                
              </div>
            </div>
          </div>
          
        </div>
        <div className="flex flex-col items-center justify-center pt-20  lg:pr-0">
                  <Link
                    href="/signup"
                    className="ease-in-up rounded-md bg-primary py-4 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                  >
                    Kontakt
                  </Link>
            </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
