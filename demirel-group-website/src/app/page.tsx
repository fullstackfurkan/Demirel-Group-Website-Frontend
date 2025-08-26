import CompanyInformSection from "@/components/home/CompanyInformSection";
import PhotoSlider from "@/components/home/PhotoSlider";
import ProjectSection from '@/components/home/ProjectSection';

export default function Home() {
  return (
    <div>
      <PhotoSlider/>
      <ProjectSection/>
      <CompanyInformSection/>
    </div>
  );
}
