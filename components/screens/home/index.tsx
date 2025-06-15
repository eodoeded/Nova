import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
import { Footer } from "@/components/footer";
import { Spacer } from "@/components/spacer";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1>Max McIsted</h1>
            <h2>Brand Designer</h2>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <p>
          Currently working at Pragmatic Semiconductor while finishing a BA in Graphic Design & Communication. Previously at Arm [brand rollout]. I build brands that survive implementation.
        </p>
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="projects" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Contact />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
