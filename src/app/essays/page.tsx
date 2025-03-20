// Article data
const articles = [
    {
        title: "Revolusi Pendidikan di Era Digital",
        description: "Eksplorasi dampak teknologi terhadap sistem pendidikan modern.",
        link: "/artikel/revolusi-pendidikan",
        color: "bg-[#ff9f9f]",
    },
    {
        title: "Etika dan Privasi di Media Sosial",
        description: "Pentingnya menjaga privasi dan etika dalam interaksi digital.",
        link: "/artikel/etika-privasi-media",
        color: "bg-[#9fdfff]",
    },
    {
        title: "Perubahan Iklim: Tantangan dan Solusi",
        description: "Memahami dampak lingkungan dan langkah mitigasi yang dapat diambil.",
        link: "/artikel/perubahan-iklim-solusi",
        color: "bg-[#b8ff9f]",
    },
    {
        title: "Kecerdasan Buatan: Inovasi dan Masa Depan",
        description: "Menelusuri peran AI dalam kehidupan sehari-hari dan potensi masa depannya.",
        link: "/artikel/ai-inovasi-masa-depan",
        color: "bg-[#ffde59]",
    },
]

interface ArticleProps {
    title: string
    description: string
    link: string
    color: string
}

function Article({ title, description, link, color }: ArticleProps) {
    return (
        <a
            href={link}
            className={`block border-4 border-black ${color} shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200 overflow-hidden`}
        >
            <div className="p-6">
                <h2 className="text-2xl font-black mb-4">{title}</h2>
                <p className="border-l-4 border-black pl-3 font-medium">{description}</p>
            </div>
            <div className="px-6 py-3 bg-black text-white font-bold flex justify-between items-center">
                <span>Baca Selengkapnya</span>
                <img
                    src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/arrow-right.svg"
                    alt="Arrow Right"
                    className="h-5 w-5 filter invert"
                />
            </div>
        </a>
    )
}

export default function Page() {
    return (
        <div className="bg-[#f5f5f5] min-h-screen py-10">
            <div className="container mx-auto px-6">
                <h1
                    className="text-5xl font-black text-black mt-12 mb-12 text-center"
                    style={{ textDecorationColor: "#000" }}
                >
                    Esai
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <Article
                            key={index}
                            title={article.title}
                            description={article.description}
                            link={article.link}
                            color={article.color}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}