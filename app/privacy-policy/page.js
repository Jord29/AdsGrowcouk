// app/privacy-policy/page.jsx

import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer'; // Import Footer

const PrivacyPolicy = () => {
  return (
    <>
      {/* Include Navbar */}
      <Navbar />

      {/* Main Privacy Policy Content */}
      <div className="min-h-screen bg-gray-100 text-gray-900 px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <p className="mb-4">
            This privacy policy explains how we collect, use, and protect your personal information.
            By using our services, you agree to the collection and use of information in accordance
            with this policy.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-4">
            We collect various types of information to provide and improve our service to you.
            The types of information we collect include:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Personal Data (e.g., name, email address)</li>
            <li>Usage Data (e.g., how you interact with our website)</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Use of Information</h2>
          <p className="mb-4">
            We use the collected data for various purposes, including to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Provide and maintain our services</li>
            <li>Notify you about changes to our service</li>
            <li>Provide customer support</li>
            <li>Analyze usage to improve our service</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">When We Guarantee Results</h2>
          <p className="mb-4">
            We guarantee inquiries and high-quality traffic related to your services. However, we
            cannot guarantee actual sales conversions, as this depends on your sales process,
            offerings, and other factors that are beyond our control.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
          <p className="mb-4">
            We take the security of your personal data seriously and use industry-standard measures
            to protect it. However, please be aware that no method of transmission over the internet
            or method of electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
          <p className="mb-4">
            We may update our privacy policy from time to time. We will notify you of any changes by
            posting the new privacy policy on this page. You are advised to review this privacy policy
            periodically for any changes.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at{' '}
            <a href="mailto:hello@adsgrow.co.uk" className="text-blue-600 hover:underline">
              hello@adsgrow.co.uk
            </a>
            .
          </p>
        </div>
      </div>

      {/* Include Footer */}
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
