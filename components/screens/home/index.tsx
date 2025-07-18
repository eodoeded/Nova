import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
import { Spacer } from "@/components/spacer";

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
          Currently working at Pragmatic Semiconductor while finishing a BA in Graphic Design & Communication. Previously at Arm [brand rollout]. I build brands
          that survive implementation.
        </p>
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="experience" pathname="/" />
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
