import { PublicSite } from "@/components/baladz/PublicSite";
import { SiteContentProvider } from "@/components/baladz/SiteContentProvider";

export default function Home() {
  return (
    <SiteContentProvider>
      <PublicSite />
    </SiteContentProvider>
  );
}
