import Link from "next/link";
import { Metadata } from "next";

export const metadata = {
  title: "Contact Us | SDEV",
  description:
    "Get in touch with the SDEV team for any queries, bug reports, or feature requests.",
  keywords: ["Contact", "SDEV", "tech support", "bug report"],
};

const Contact = () => {
  return (
    <div className="contact-page container mx-auto px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-16">
      <header className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
          Get in Touch 📞
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          We would love to hear from you! Feel free to reach out to us using the
          contact details below.
        </p>
      </header>

      <section className="contact-details space-y-6 text-lg md:text-xl text-gray-700">
        <p>
          <strong className="font-semibold text-gray-900">Email:</strong>{" "}
          <Link
            href="mailto:sarfaraz.h.ali01@gmail.com"
            className="text-blue-600 hover:underline"
          >
            sarfaraz.h.ali01@gmail.com ✉️
          </Link>
        </p>
        <p>
          <strong className="font-semibold text-gray-900">Twitter:</strong>{" "}
          <Link
            href="https://x.com/Sarfaraz_Dev"
            className="text-blue-600 hover:underline"
          >
            @SarfarazAli 🐦
          </Link>
        </p>

        <p>
          <strong className="font-semibold text-gray-900">
            To report a bug:
          </strong>{" "}
          Please create{" "}
          <Link
            href="https://github.com/Imsarfaraz789/bug-report/tree/main"
            className="text-blue-600 hover:underline"
          >
            a bug report 🐛
          </Link>{" "}
          in our open-source repository.
        </p>
        <p>
          <strong className="font-semibold text-gray-900">
            To request a feature:
          </strong>{" "}
          Please{" "}
          <Link
            href="https://github.com/Imsarfaraz789/bug-report/tree/main"
            className="text-blue-600 hover:underline"
          >
            start a new GitHub Discussion 💬
          </Link>{" "}
          in the SDEV repo!
        </p>
      </section>

      <footer className="footer mt-12 pt-6 border-t border-gray-200 text-center">
        <p className="text-gray-700 text-sm mb-4">
          Thank you for supporting{" "}
          <Link
            href="https://neon.tech"
            className="text-blue-600 hover:underline"
          >
            SDEV 💡
          </Link>{" "}
          community.
        </p>
        <div className="footer-links flex justify-center gap-6 text-gray-600 text-sm">
          <Link href="/" className="hover:underline">
            Home
          </Link>

          <Link href="/component/about" className="hover:underline">
            About
          </Link>

          <Link href="/component/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
