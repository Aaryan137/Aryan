import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="bg-blue-300 min-h-screen flex flex-col items-center justify-between">
      {/* Header */}
      <header className="w-full py-4 bg-transparent flex justify-between items-center px-10">
        <div className="text-xl font-bold">LABBAN TECH</div>
        <nav className="space-x-6">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center mt-10 px-4">
        <h1 className="text-5xl font-bold mb-4">Lorem Ipsum Dolor Sit Amet</h1>
        <p className="text-lg mb-6">Some placeholder text for the subtitle or description under the title.</p>
        <a href="#contact" className="bg-green-500 text-white px-6 py-2 rounded-full inline-block">Contact Us</a>
      </section>

      {/* Placeholder for Illustrations */}
      <div className="mt-10 w-full flex-1 flex justify-center items-center">
        {/* Replace these with your images */}
        <div className="relative">
          <img src="/img1.svg" alt="Illustration 1" className="mb-8 mx-auto" />
          <img src="/img3.svg" alt="Illustration 2" className="mb-8 mx-auto" />
          <img src="/img4.svg" alt="Illustration 3" className="mx-auto" />
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-300 text-center">
        <div className="mb-4">Follow us on social media!</div>
        <div className="flex justify-center space-x-4 mb-4">
          {/* Add your social media icons */}
          <a href="#" className="text-gray-600 hover:text-gray-900">Facebook</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
        </div>
        <div className="text-sm text-gray-500">&copy; 2024 LIBRAN TECH. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Home;
