"use client";

export default function Terms() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing and using the i3 platform ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
    },
    {
      title: "2. Description of Service",
      content: `i3 is a digital platform that connects startups with investors through intelligent matching algorithms. The Service includes but is not limited to profile creation, matching services, communication tools, and analytics features.`
    },
    {
      title: "3. User Accounts and Registration",
      content: `To access certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and all activities under your account.`
    },
    {
      title: "4. User Conduct and Responsibilities",
      content: `You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service to transmit any material that is defamatory, offensive, or otherwise objectionable. You are solely responsible for your interactions with other users.`
    },
    {
      title: "5. Privacy and Data Protection",
      content: `Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Service. By using our Service, you agree to the collection and use of information in accordance with our Privacy Policy.`
    },
    {
      title: "6. Intellectual Property Rights",
      content: `The Service and its original content, features, and functionality are and will remain the exclusive property of i3 and its licensors. The Service is protected by copyright, trademark, and other laws. You may not reproduce, distribute, or create derivative works without our express written permission.`
    },
    {
      title: "7. Payment Terms and Fees",
      content: `Certain features of the Service may require payment of fees. All fees are non-refundable unless otherwise stated. We reserve the right to change our fees at any time, with notice provided through the Service or via email.`
    },
    {
      title: "8. Disclaimers and Limitation of Liability",
      content: `The Service is provided "as is" without warranties of any kind. We do not guarantee the accuracy, completeness, or usefulness of any information on the Service. In no event shall i3 be liable for any indirect, incidental, special, consequential, or punitive damages.`
    },
    {
      title: "9. Indemnification",
      content: `You agree to defend, indemnify, and hold harmless i3 and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of your use of the Service.`
    },
    {
      title: "10. Termination",
      content: `We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.`
    },
    {
      title: "11. Governing Law",
      content: `These Terms shall be interpreted and governed by the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising from these Terms will be resolved in the courts of California.`
    },
    {
      title: "12. Changes to Terms",
      content: `We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. Your continued use of the Service after such changes constitutes acceptance of the new Terms.`
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 gradient-blue-radial opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Terms of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Service
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using the i3 platform.
          </p>
          <div className="mt-8 text-sm text-muted-foreground">
            Last updated: January 1, 2025
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-card/50 backdrop-blur-md rounded-2xl p-8 border border-border/50 mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Agreement Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") govern your use of the i3 platform operated by i3 Platform Inc. 
                ("us", "we", or "our"). By accessing or using our service, you agree to be bound by these Terms. 
                If you disagree with any part of these terms, then you may not access the Service.
              </p>
            </div>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="bg-card/30 backdrop-blur-md rounded-xl p-8 border border-border/30">
                  <h3 className="text-xl font-bold text-foreground mb-4">{section.title}</h3>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Questions About These Terms?</h3>
              <p className="text-muted-foreground mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: legal@i3platform.com</p>
                <p>Address: 123 Innovation Drive, San Francisco, CA 94105</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}