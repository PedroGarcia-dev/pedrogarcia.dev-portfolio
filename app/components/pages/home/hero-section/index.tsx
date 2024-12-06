import { Button } from "@/app/components/button"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb"

const Mocks_Contacts = [
    {
        url: 'https://github.com/PedroGarcia-dev',
        icon: <TbBrandGithub />
    },

    {
        url: 'https://www.linkedin.com/in/pedrogarciadev/',
        icon: <TbBrandLinkedin />
    }
]

const Mock_Techs = [
    'Node.js',
    'Sequelize',
    'Express',
    'TypeScript',
    'C#',
    'Next.js',
    'React',

]

export const HeroSection = () => {
    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex items-center justify-between  flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono mt-11 text-emerald-400">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Pedro Garcia</h2>

                    <p className="text-gray-400 my-6 text-sm sm:text-base">Olá, soeu objetivo é desenvolver sistemas robustos, escaláveis e eficientes que realmente façam a diferença. Além de atuar como freelancer, busco constantemente aprimorar minhas habilidades e me manter atualizado com as melhores práticas do mercado. Estou sempre aberto a desafios que me permitam contribuir com minha expertise e crescer profissionalmente. Se você procura um profissional comprometido e proativo, vamos conversar!</p>
                    

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {Mock_Techs.map((tech, index) => (
                            <TechBadge 
                            key={index}
                            name={tech}
                            />
                        ))}
                    </div>

                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                        <Button className="w-max shadow-button">
                            Entre em contato
                            <HiArrowNarrowRight size={18} />
                        </Button>

                        <div className="text-3xl text-gray-600 flex items-center h-20 gap-3">
                            {Mocks_Contacts.map((contact, index) => (
                                <a
                                  href={contact.url}
                                  key={`contact-${index}`}
                                  target="_blank"
                                  className="hover:text-gray-100 transition-colors"
                                >
                                    {contact.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <Image
                  width={380}
                  height={350}
                  src='/images/profile.png'
                  alt='Foto de perfil, Pedro Garcia'
                  className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-15 lg:mb-0 shadow-2xl rounded-lg object-cover"
                />
            </div>
        </section>
    )
}