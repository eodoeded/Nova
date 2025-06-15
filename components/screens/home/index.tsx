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
          Currently finishing a BA in Graphic Design & Communication. Previous work at Arm (brand rollout) and Pragmatic [internal tooling, visual systems]. I build the parts of brand that survive implementation.
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
