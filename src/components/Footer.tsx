type FooterLinkProps = {
    title: string
    url: string
}

function FooterLink({ title, url }: FooterLinkProps) {
    return (
        <a className={"transition hover:text-teal-500"} href={url}>{title}</a>
    )
}

export default function Footer() {
    return (
        <footer className={"pt-10 px-8 pb-16 border-t"}>
            <div className={"flex justify-between gap-6"}>
                <div className={"flex gap-6 text-sm font-medium text-zinc-600"}>
                    <FooterLink title={"Tentang Saya"} url={"/"}/>
                    <FooterLink title={"Projects"} url={"/projects"}/>
                    <FooterLink title={"Essays"} url={"/essays"}/>
                </div>
                <p>@{new Date().getFullYear()} Mochammad Ardiansyah. All rights reserved</p>
            </div>
        </footer>
    )
}