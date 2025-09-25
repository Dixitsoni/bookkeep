import FooterNewsletter from "@/components/footer/Footer";
import Header from "@/components/topbar"



export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            {children}
            <FooterNewsletter />
        </div>
    );
}