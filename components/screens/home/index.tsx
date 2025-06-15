import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
import { Footer } from "@/components/footer";
import { DeployButton } from "@/components/deploy";
import { Spacer } from "@/components/spacer";

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1>Sylph</h1>
            <h2>Next.js Portfolio Starter</h2>
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
        <Posts category="guides" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="examples" />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
      <DeployButton />
    </FadeIn.Container>
  );
}
