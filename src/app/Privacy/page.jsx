"use client"
import React, { useState, useEffect } from 'react';

const PrivacyPolicy = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('.policy-section');
      const scrollPosition = window.pageYOffset + 200;
      
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (index) => {
    const section = document.querySelectorAll('.policy-section')[index];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            WebUtsav ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our services or interact with our website.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <p className="text-blue-800 font-medium text-sm">
              <strong>Notice:</strong> Your privacy is our top priority, and we are committed to transparency in all our data practices.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "information-collection",
      title: "2. Information We Collect",
      content: (
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
            <h4 className="text-gray-900 font-semibold mb-3 text-lg">Personal Information</h4>
            <p className="text-gray-700">We collect personal information that you voluntarily provide to us, including:</p>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Name and contact information (email address, phone number)</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Company name and professional details</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Information provided through website forms or WhatsApp communications</span>
              </li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
            <h4 className="text-gray-900 font-semibold mb-3 text-lg">Technical Information</h4>
            <p className="text-gray-700">We automatically collect certain technical information, including:</p>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>IP address and device information</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Browser type and operating system</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Pages visited and time spent on our website</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Analytics data via Google Analytics or similar services</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "information-use",
      title: "3. How We Use Your Information",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">We use the collected information for the following purposes:</p>
          <div className="grid grid-cols-1 gap-4">
            {[
              "To respond to your inquiries and service requests",
              "To set up and manage client accounts and provide services",
              "To send information about our services, promotions, or event invitations",
              "To analyze and improve our website performance and user experience",
              "To comply with legal obligations and regulatory requirements"
            ].map((item, index) => (
              <div key={index} className="flex items-start p-4 border border-gray-200 rounded-lg bg-white">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "cookies",
      title: "4. Cookies and Tracking Technologies",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700">
            We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Analytics Cookies", description: "Help us understand how visitors interact with our website" },
              { title: "Functional Cookies", description: "Enable website features and improve user experience" },
              { title: "Marketing Cookies", description: "Allow us to deliver relevant advertisements and campaigns" }
            ].map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 bg-white text-center">
                <h5 className="font-semibold text-gray-900 mb-3">{item.title}</h5>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-amber-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="text-amber-800 font-semibold">Cookie Management</h4>
                <p className="text-amber-700 text-sm mt-1">
                  You can control cookies through your browser settings. Please note that disabling cookies may affect website functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "data-sharing",
      title: "5. Data Sharing and Disclosure",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700">We may share your information in the following circumstances:</p>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-6 bg-green-50">
              <h4 className="text-green-800 font-semibold mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
                Service Providers
              </h4>
              <p className="text-green-700">
                Third-party service providers who assist with our operations (hosting, analytics, marketing platforms) may access limited data under strict confidentiality agreements.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 bg-red-50">
              <h4 className="text-red-800 font-semibold mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
                </svg>
                Legal Requirements
              </h4>
              <p className="text-red-700">
                We may disclose information when required by law, court order, or to protect our rights, property, or safety, or that of others.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "data-security",
      title: "6. Data Security",
      content: (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <div className="text-center mb-6">
            <svg className="w-16 h-16 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Data Protection</h3>
          </div>
          <p className="text-blue-700 text-center leading-relaxed">
            We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Our security practices are regularly reviewed and updated.
          </p>
        </div>
      )
    },
    {
      id: "international-transfers",
      title: "7. International Transfers",
      content: (
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-gray-600 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Cross-Border Data Transfers</h3>
              <p className="text-gray-700 leading-relaxed">
                When we transfer personal data internationally (e.g., between India and service provider locations), we ensure appropriate data protection mechanisms are in place in accordance with applicable data protection laws.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "data-retention",
      title: "8. Data Retention",
      content: (
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-gray-600 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Retention Period</h3>
              <p className="text-gray-700 leading-relaxed">
                We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, comply with legal requirements, resolve disputes, and enforce our agreements.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "your-rights",
      title: "9. Your Rights",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700">Depending on applicable law, you may have the following rights regarding your personal data:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Access", description: "Request access to your personal data" },
              { title: "Correction", description: "Request correction of inaccurate data" },
              { title: "Deletion", description: "Request erasure of your personal data" },
              { title: "Restriction", description: "Request restriction of processing" },
              { title: "Portability", description: "Request transfer of your data" },
              { title: "Objection", description: "Object to certain processing activities" }
            ].map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
                <h5 className="font-semibold text-gray-900 mb-2">{item.title}</h5>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 1.26a2 2 0 001.41-1.41L14 4m0 0l-3-3M14 4l-3 3"/>
              </svg>
              <h4 className="text-xl font-semibold">Exercise Your Rights</h4>
            </div>
            <p className="text-blue-100">
              To exercise any of these rights, please contact us at <strong className="text-white">info@webutsav.com</strong>. We will respond to your request within the timeframe required by applicable law.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "third-party-links",
      title: "10. Third-Party Links",
      content: (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-amber-600 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
            </svg>
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">External Website Links</h3>
              <p className="text-amber-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "childrens-privacy",
      title: "11. Children's Privacy",
      content: (
        <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-pink-600 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            <div>
              <h3 className="text-xl font-semibold text-pink-800 mb-3">Protection of Minors</h3>
              <p className="text-pink-700 leading-relaxed">
                We do not knowingly collect personal information from children under 16 years of age. If you believe we have inadvertently collected such information, please contact us immediately so we can remove it.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "policy-changes",
      title: "12. Changes to This Policy",
      content: (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-green-600 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            <div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Policy Updates</h3>
              <p className="text-green-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last reviewed" date. We encourage you to review this policy periodically.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900">WebUtsav</h1>
              <span className="ml-4 text-gray-500">|</span>
              <span className="ml-4 text-gray-600">Privacy Policy</span>
            </div>
            <nav className="flex items-center space-x-4 text-sm text-gray-600">
              <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
              <span>•</span>
              <span className="text-gray-900">Privacy Policy</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Table of Contents */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(index)}
                    className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                      activeSection === index
                        ? 'bg-blue-100 text-blue-700 font-medium'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-sm border">
              {/* Header */}
              <div className="border-b bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-t-lg">
                <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
                <p className="text-blue-100 text-lg">
                  Last reviewed: <strong>July 2025</strong>
                </p>
                <p className="text-blue-100 mt-2">
                  Learn how WebUtsav collects, uses, and protects your personal information.
                </p>
              </div>

              {/* Content */}
              <div className="p-8">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    id={section.id}
                    className="policy-section mb-12 scroll-mt-8"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                      {section.title}
                    </h2>
                    <div className="prose max-w-none">
                      {section.content}
                    </div>
                  </div>
                ))}

               
                <div className="policy-section bg-gray-50 rounded-lg p-8 border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Contact Information</h2>
                  
                  <div className="mb-6">
                    <p className="text-gray-700 mb-4">
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                      <div className="flex items-center mb-3">
                        <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                      </div>
                      <p className="text-blue-600 font-medium">info@webutsav.com</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                      <div className="flex items-center mb-3">
                        <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                        </svg>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                      </div>
                      <p className="text-blue-600 font-medium">+91 87669 22792</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                      <div className="flex items-center mb-3">
                        <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                        </svg>
                        <h4 className="font-semibold text-gray-900">Address</h4>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Wing‑A, Downtown Rd, City Vista,<br/>
                        Kharadi, Pune, Maharashtra 411014
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t bg-gray-50 p-8 rounded-b-lg text-center">
                <p className="text-gray-600 italic">
                  Thank you for choosing WebUtsav. We appreciate your trust and look forward to continuing to serve you with dedication and care.
                </p>

              </div>

            </div>

          </div>

        </div>
        
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default PrivacyPolicy;