import React from "react";
import Image from "next/image";

export const metadata = {
  title: "About Us | SDEV",
  description:
    "Discover our mission to bring you the latest technical blogs and up-to-date tech news. Learn more about our team and the passion behind delivering high-quality tech content.",
  keywords: ["About", "SDEV", "tech support", "tech news"],
};

const About = () => {
  return (
    <div className="about-page container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-bold mb-6 text-center text-gray-900">
        About Us 🌟
      </h1>

      <div className="mb-8 flex justify-center">
        <Image src="/logo-black.png" alt="org logo" width={150} height={75} />
      </div>

      <p className="text-lg mb-6 text-gray-700 leading-relaxed">
        Welcome to <span className="font-semibold text-blue-600">SDEV</span>,
        your go-to destination for the latest in technology news and insights.
        Our mission is to provide a platform where tech enthusiasts can stay
        updated with the newest trends, discoveries, and innovations in the tech
        world. 🌍💡
      </p>
      <p className="text-lg mb-6 text-gray-700 leading-relaxed">
        Launched in 2024, SDEV is more than just a news source. We're building a
        vibrant community where individuals can share their ideas, skills, and
        knowledge. Whether you&apos;re a tech guru, an aspiring developer, or
        someone passionate about technology, SDEV is the place to connect,
        collaborate, and grow. 🚀
      </p>
      <p className="text-lg mb-6 text-gray-700 leading-relaxed">
        We believe in the power of community and the exchange of ideas to drive
        innovation. Our platform is designed to be a space where you can not
        only get the latest tech updates but also contribute your own insights
        and engage with like-minded individuals. If you have any questions or
        ideas, we&apos;d love to hear from you. 📩
      </p>
      <p className="text-lg font-semibold text-gray-900">Warm regards,</p>
      <p className="text-lg text-gray-800">
        Sarfaraz Haider Ali, Founder of SDEV
      </p>
    </div>
  );
};

export default About;
