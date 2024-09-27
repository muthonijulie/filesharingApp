import React, { useState } from 'react';

const Footer = () => {
  const [showModal, setShowModal] = useState(null);

  const closeModal = () => setShowModal(null);

  return (
    <footer className="text-center p-4 bg-indigo-800 text-white mb-0">
      <p>© 2024 FShare - All Rights Reserved</p>
      <div className="space-x-4">
        <button onClick={() => setShowModal('privacy')}>Privacy Policy</button>
        <button onClick={() => setShowModal('terms')}>Terms</button>
        <button onClick={() => setShowModal('contact')}>Contact</button>
      </div>

      {showModal && (
        <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/2 relative">
            {/* Close/Exit Button */}
            <button 
              onClick={closeModal} 
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
            >
              X
            </button>

            {/* Modal Content */}
            {showModal === 'privacy' && (
              <div>
                <h2 className="text-black">Privacy Policy</h2>
                <p className="text-black">
                  Effective Date: [Insert Date]

At FShare, we are committed to protecting your privacy. This Privacy Policy outlines the types of personal information we collect, how we use and protect it, and your rights regarding your information.

1. Information We Collect
We may collect the following types of information when you use our services:

Personal Information: When you sign up, we may ask for information such as your name, email address, and contact details.
Usage Information: We collect information about your interactions with our website, such as pages viewed, links clicked, and other actions on the site.
Device Information: We may collect information about the device and browser you use to access our site.
2. How We Use Your Information
We use the information we collect to:

Provide and improve our services.
Communicate with you, including responding to your requests.
Send promotional materials and updates, with your consent.
Comply with legal obligations.
3. Sharing Your Information
We do not sell or rent your personal information to third parties. However, we may share your information with:

Service Providers: Trusted third-party companies that assist us in providing services such as hosting, analytics, and customer support.
Legal Obligations: When required by law or to protect the safety and rights of others, we may disclose your information.
4. Cookies
Our website uses cookies to enhance your experience. Cookies help us track how users interact with our site and allow us to personalize your experience. You can control cookies through your browser settings.

5. Data Security
We implement industry-standard security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee its absolute security.

6. Your Rights
You have the right to:

Access, correct, or delete your personal information.
Object to the processing of your data.
Withdraw consent for data processing at any time.
To exercise any of these rights, please contact us at [your email address].

7. Changes to This Policy
We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Effective Date."

8. Contact Us
If you have any questions or concerns about this Privacy Policy, please contact us at [your email address].
                </p>
              </div>
            )}

            {showModal === 'terms' && (
              <div>
                <h2 className="text-black">Terms and Conditions</h2>
                <p className="text-black">
                  Details of your terms and conditions go here.
                </p>
              </div>
            )}

            {showModal === 'contact' && (
              <div>
                <h2 className="text-black">Contact Us</h2>
                <p className="text-black">
                  Contact information goes here.
                </p>
              </div>
            )}

            {/* Close Button Below the Content */}
            <div className="mt-4 text-center">
              <button 
                onClick={closeModal} 
                className="bg-indigo-600 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
