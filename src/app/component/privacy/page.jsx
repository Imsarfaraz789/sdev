import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | SDEV",
  description:
    "Read the Privacy Policy of SDEV to understand how we collect, use, and protect your personal information. Effective from 08-09-2024.",
  keywords: [
    "Privacy Policy",
    "SDEV",
    "Data Protection",
    "Privacy",
    "Personal Information",
  ],
};

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-lg mb-4">Effective date: 08-09-2024</p>
      <p className="mb-4">
        Welcome to Sarfaraz Dev ("we", "our", "us"). This Privacy Policy
        explains how we collect, use, disclose, and safeguard your information
        when you visit our website [your website URL] (the "Site"). Please read
        this privacy policy carefully. If you do not agree with the terms of
        this privacy policy, please do not access the Site.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        1. Information We Collect
      </h2>
      <p className="mb-4">
        We may collect information about you in a variety of ways. The
        information we may collect via the Site includes:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Personal Data</li>
        <li>Social Network Data</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        2. Use of Your Information
      </h2>
      <p className="mb-4">
        Having accurate information about you permits us to provide you with a
        smooth, efficient, and customized experience. Specifically, we may use
        information collected about you via the Site to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Create and manage your account.</li>
        <li>
          Deliver targeted advertising, coupons, newsletters, and other
          information regarding promotions and the Site to you.
        </li>
        <li>Email you regarding your account or order.</li>
        <li>
          Monitor and analyze usage and trends to improve your experience with
          the Site.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        3. Disclosure of Your Information
      </h2>
      <p className="mb-4">
        We may share information we have collected about you in certain
        situations. Your information may be disclosed as follows:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>By Law or to Protect Rights</li>
        <li>Marketing Communications</li>
        <li>Affiliates</li>
        <li>With Your Consent</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        4. Security of Your Information
      </h2>
      <p className="mb-4">
        We use administrative, technical, and physical security measures to help
        protect your personal information. While we have taken reasonable steps
        to secure the personal information you provide to us, please be aware
        that despite our efforts, no security measures are perfect or
        impenetrable, and no method of data transmission can be guaranteed
        against any interception or other type of misuse.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        5. Policy for Children
      </h2>
      <p className="mb-4">
        We do not knowingly solicit information from or market to children under
        the age of 13. If we learn that we have collected personal information
        from a child under age 13 without verification of parental consent, we
        will delete that information as quickly as possible.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        6. Changes to This Privacy Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time in order to reflect,
        for example, changes to our practices or for other operational, legal,
        or regulatory reasons.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">7. Contact Us</h2>
      <p className="mb-4">
        If you have questions or comments about this Privacy Policy, please
        contact us at:
      </p>
      <p className="mb-4">
        Sarfaraz Dev (SDEV) <br />
        [Panvel Navi Mumbai 410206] <br />
        [sarfaraz.h.ali01@gmail.comments] <br />
      </p>

      <p className="text-center mt-6">
        <Link href="/" className="text-blue-600 underline">
          Return to Homepage
        </Link>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
