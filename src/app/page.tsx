import profileImage from "../../public/images/profile.jpeg"
import Image from "next/image"

export default function Home() {
  return (
    <div className={"container mx-auto px-4 py-14 bg-[#f5f5f5]"}>
      <HeaderSection />
      <BioSection/>
      <ContactSection />
    </div>
  );
}

function HeaderSection() {
    return (
        <div className={"flex flex-col items-center justify-center text-center mb-16"}>
            <div className="relative w-40 h-48 mb-6 overflow-hidden border-4 border-black">
                <Image
                    src={profileImage}
                    alt="Profile Picture"
                    className="w-full h-full object-cover"
                />
            </div>
            <h1 className="text-5xl font-black text-black mb-2 tracking-tight">Mochammad Ardiansyah</h1>
            <p className="text-xl font-semibold mb-6 px-4 py-1 bg-yellow-400 inline-block border-2 border-black">
                Junior Software Developer
            </p>
            <div className="flex space-x-3 mt-4">
                <a href="https://github.com/mchardians" target="_blank"
                   className="inline-flex items-center justify-center h-12 w-12 border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-all rounded-lg">
                    <img src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/github.svg" alt="GitHub"
                         className="h-5 w-5"/>
                </a>
                <a href="https://linkedin.com/mchardians" target="_blank"
                   className="inline-flex items-center justify-center h-12 w-12 border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-all rounded-lg">
                    <img src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/linkedin.svg" alt="LinkedIn"
                         className="h-5 w-5"/>
                </a>
                <a href="mailto:mchardians@gmail.com"
                   className="inline-flex items-center justify-center h-12 w-12 border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-all rounded-lg">
                    <img src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/mail.svg" alt="Email"
                         className="h-5 w-5"/>
                </a>
            </div>
        </div>
    )
}

function BioSection() {
    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"}>
            <div className="rounded-lg overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200 bg-white">
                <div className="p-6 pt-6">
                    <h2 className="text-2xl font-black text-black mb-4 underline decoration-wavy underline-offset-4"
                        style={{textDecorationColor: "#facc15"}}>
                        Tentang Saya
                    </h2>
                    <p className="mb-4 text-black">
                        I’m a fresh graduate majoring in Informatics Management from State Polytechnic of Malang. Have an
                        experience as a Junior Web Programmer. I’m a fast learner with strong logical thinking and problem
                        solving skills, and I have a continuous desire to learn and grow. I have an interest in a career as a
                        Junior Software Developer and leverage my skills to contribute to your team.
                    </p>
                    <p className={"text-black"}>
                        I enjoy creating engaging and intuitive user experiences. Besides coding, I also enjoy photography, hiking, and reading books about the latest technology.
                    </p>
                </div>
            </div>
            <EducationSection />
        </div>
    )
}

function EducationSection() {
    return (
        <div
            className="rounded-lg overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200 bg-white">
            <div className="p-6 pt-6">
                <h2 className="text-2xl font-black text-black mb-4 underline decoration-wavy underline-offset-4"
                    style={{textDecorationColor: "#4ade80"}}>
                    Pendidikan & Pengalaman
                </h2>
                <div className="space-y-4">
                    <div className="p-3 border-2 border-black bg-blue-200">
                        <h3 className="font-bold text-black">SMAN 3 Kota Mojokerto</h3>
                        <p className="text-sm text-black">MIPA, 2018-2021</p>
                    </div>
                    <div className="p-3 border-2 border-black bg-pink-200">
                        <h3 className="font-bold text-black">Politeknik Negeri Malang</h3>
                        <p className="text-sm text-black">D3 Manajemen Informatika, 2021-2024</p>
                    </div>
                    <div className="p-3 border-2 border-black bg-purple-200">
                        <h3 className="font-bold text-black">Politeknik Negeri Malang</h3>
                        <p className="text-sm text-black">D4 Teknik Informatika, 2024-Sekarang</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ContactSection() {
    return (
        <div className={"text-center p-8 border-4 border-black bg-[#c5f0ff] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"}>
            <h2 className="text-3xl font-black text-black mb-4 underline decoration-wavy underline-offset-4"
                style={{textDecorationColor: "#3b82f6"}}>
                Hubungi Saya
            </h2>
            <p className="mb-6 max-w-md text-black mx-auto">
                Tertarik untuk bekerja sama? Jangan ragu untuk menghubungi saya melalui email atau media sosial.
            </p>
            <a
                href="mailto:email@example.com"
                className="inline-flex items-center justify-center font-bold border-2 text-black border-black bg-black text-white hover:bg-white hover:text-black transition-colors text-lg px-6 py-6 rounded-lg"
            >
                <img src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/mail.svg" alt="Email"
                     className="h-5 w-5 mr-2 text-black filter invert"/>
                Kirim Email
            </a>
        </div>
    )
}
