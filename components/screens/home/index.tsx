import { DeployButton } from "@/components/deploy";
import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1>Max McIsted</h1>
            <h2>Designer working on brand systems in deep tech</h2>
          </div>
        </div>
      </FadeIn.Item>
      <FadeIn.Item>
        <p>
          Currently finishing a BA in Graphic Design & Communication. Previous work at Arm (brand rollout) and Pragmatic [internal tooling, visual systems]. I build the parts of brand that survive implementation.
        </p>
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="projects" />
      </FadeIn.Item>
      <FadeIn.Item>
        <h2>Contact Me</h2>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/maxmcisted" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="mailto:mcistedm@gmail.com">Email</a>
          </li>
        </ul>
      </FadeIn.Item>
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
      <DeployButton />
    </FadeIn.Container>
  );
}
