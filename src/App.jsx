import LogoMark from "./components/LogoMark";
import ThemeToggle from "./components/ThemeToggle";
import SocialLink, { GithubIcon, LinkedinIcon } from "./components/SocialLinks";

export default function App() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="page__halo" aria-hidden="true" />

      <span className="tick tick--tl" aria-hidden="true" />
      <span className="tick tick--tr" aria-hidden="true" />
      <span className="tick tick--bl" aria-hidden="true" />
      <span className="tick tick--br" aria-hidden="true" />

      <main className="stage" id="main">
        <div className="center">
          <h1 className="sr-only">Luca Barbato</h1>
          <div className="logo-wrap">
            <LogoMark />
          </div>
        </div>

        <footer className="footer">
          <div className="lockup" translate="no">
            <p className="lockup__name">Luca Barbato</p>
            <p className="lockup__role">Computer Engineer Student @ polito.it</p>
          </div>
          <div className="cluster">
            <a
              className="mail-link"
              href="mailto:swe@lucabubi.me"
              aria-label="Send email to swe@lucabubi.me"
              translate="no"
            >
              swe@lucabubi.me
            </a>
            <nav className="cluster__socials" aria-label="Social profiles">
              <SocialLink href="https://github.com/lucabubi" label="GitHub profile">
                <GithubIcon />
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/lucabubi" label="LinkedIn profile">
                <LinkedinIcon />
              </SocialLink>
            </nav>
            <span className="cluster__divider" aria-hidden="true" />
            <ThemeToggle />
          </div>
        </footer>
      </main>
    </div>
  );
}
