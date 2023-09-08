import Homepage from "@/components/Homepage";
import Section from "@/components/Section";
import Section2 from "@/components/Section2";
import Accordion from "@/components/Section3";
import Layout from "@/components/layout";

export default function Page() {
  return (
    <Layout>
      <Homepage />
      <Section />
      <Accordion/>
      <Section2 />
    </Layout>
  );
}
