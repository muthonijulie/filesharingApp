import React, { useState } from 'react';

const Footer = () => {
  const [showModal, setShowModal] = useState(null);

  const closeModal = () => setShowModal(null);

  return (
    <footer className="text-center p-4 bg-indigo-800 text-white mb-0  border border-red-400  fixed bottom-0 right-0 left-0">
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
<p><strong>Effective Date:</strong> [Insert Date]</p>

<p>At <strong>FShare</strong>, we are dedicated to safeguarding your privacy. This policy explains the types of personal data we collect, how we use and protect it, and your rights over your personal information.</p>

<h3>1. Information We Collect</h3>
<p>We may gather the following information when you use our services:</p>
<ul>
  <li><strong>Personal Information:</strong> This includes details such as your name, email, and contact information when you register with us.</li>
  <li><strong>Usage Information:</strong> We collect information related to your interactions with our site, like pages visited and links clicked.</li>
  <li><strong>Device Information:</strong> Data about the device and browser you use to access our website may also be collected.</li>
</ul>

<h3>2. How We Use Your Information</h3>
<p>The information we collect is used to:</p>
<ul>
  <li>Provide and enhance our services.</li>
  <li>Communicate with you, including responding to your inquiries.</li>
  <li>Send you updates and promotions, if you have given consent.</li>
  <li>Comply with legal requirements.</li>
</ul>

<h3>3. Sharing Your Information</h3>
<p>We do not sell or rent your personal data. However, we may share it with:</p>
<ul>
  <li><strong>Service Providers:</strong> Third-party companies that help us deliver our services, such as hosting or customer support.</li>
  <li><strong>Legal Compliance:</strong> When required by law or to protect the rights and safety of others, we may disclose your information.</li>
</ul>

<h3>4. Cookies</h3>
<p>Our site uses cookies to improve your experience. These small data files help us track site usage and personalize your experience. You can control cookies through your browser settings.</p>

<h3>5. Data Security</h3>
<p>We take reasonable measures to protect your personal information from unauthorized access or misuse. However, no method of data transmission over the internet can be guaranteed to be completely secure.</p>

<h3>6. Your Rights</h3>
<p>You have the right to:</p>
<ul>
  <li>Access, correct, or delete your personal information.</li>
  <li>Object to how your data is processed.</li>
  <li>Withdraw consent to data processing at any time.</li>
</ul>
<p>To exercise any of these rights, contact us at <a href="mailto:your-email@example.com">[your email address]</a>.</p>

<h3>7. Policy Updates</h3>
<p>We may revise this policy periodically. Any updates will be posted on this page with an updated effective date.</p>

<h3>8. Contact Us</h3>
<p>If you have any questions or concerns regarding this policy, please reach out to us at <a href="mailto:your-email@example.com">[your email address]</a>.</p>

                </p>
              </div>
            )}

            {showModal === 'terms' && (
              <div>
                <h2 className="text-black">Terms and Conditions</h2>
                <p className="text-black">
                  
<p><strong>Effective Date:</strong> [Insert Date]</p>

<p>Welcome to <strong>FShare</strong>. By using our website, you agree to the following terms and conditions. Please read them carefully.</p>

<h3>1. Acceptance of Terms</h3>
<p>By accessing and using our website, you accept and agree to be bound by these terms. If you do not agree with these terms, you should not use our services.</p>

<h3>2. Changes to Terms</h3>
<p>We reserve the right to modify these terms at any time. Any changes will be posted on this page with an updated effective date. Your continued use of the site following the changes means you accept the new terms.</p>

<h3>3. Use of the Website</h3>
<p>Our website is available for personal, non-commercial use. You agree to use the site only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the site.</p>

<h3>4. Intellectual Property</h3>
<p>All content on this website, including text, images, and logos, is the property of <strong>FShare</strong> or its content suppliers and is protected by copyright laws. You may not reproduce, distribute, or create derivative works from any of our content without permission.</p>

<h3>5. User Accounts</h3>
<p>To access certain features, you may need to create a user account. You are responsible for maintaining the confidentiality of your account information and for any activities that occur under your account.</p>

<h3>6. Limitation of Liability</h3>
<p>We are not liable for any damages or losses arising from your use of our website. Our services are provided "as is," without warranties of any kind, either express or implied.</p>

<h3>7. Termination</h3>
<p>We reserve the right to terminate or suspend your access to our website at any time, without notice, for any reason, including if we believe you have violated these terms.</p>

<h3>8. Governing Law</h3>
<p>These terms are governed by and construed in accordance with the laws of [Insert Jurisdiction]. Any disputes related to these terms will be resolved in the courts of [Insert Jurisdiction].</p>

<h3>9. Contact Us</h3>
<p>If you have any questions about these terms, please contact us at <a href="mailto:your-email@example.com">[your email address]</a>.</p>

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
