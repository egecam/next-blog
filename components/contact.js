import Link from "next/link";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="py-6">
      <div className="mt-5">
        <Link href="mailto:egecam000@gmail.com">
          <a className="link inline-flex" target="_blank">
            <FiMail className="mr-2" />
            <p>Send me an email to meet online or for a coffee.</p>
          </a>
        </Link>
      </div>

      <div className="mt-8">
        <Link href="https://www.twitter.com/egecamx">
          <a className="link inline-flex" target="_blank">
            <FaTwitter className="mr-2" />
            <p>I often use Twitter. Don't hesitate to tweet or DM me.</p>
          </a>
        </Link>
      </div>

      <div className="mt-8">
        <Link href="https://www.instagram.com/egecaam">
          <a className="link inline-flex" target="_blank">
            <FaInstagram className="mr-2" />
            <p>
              I share some stuff about me and my friends or music on Instagram.
            </p>
          </a>
        </Link>
      </div>

      <div className="mt-8">
        <Link href="https://www.github.com/egecam">
          <a className="link inline-flex" target="_blank">
            <FaGithub className="mr-2" />
            <p>See my GitHub portfolio for my projects.</p>
          </a>
        </Link>
      </div>

      <div className="mt-8">
        <Link href="https://www.linkedin.com/in/egecam">
          <a className="link inline-flex" target="_blank">
            <FaLinkedin className="mr-2" />
            <p>LinkedIn for business related stuff.</p>
          </a>
        </Link>
      </div>
    </div>
  );
}
