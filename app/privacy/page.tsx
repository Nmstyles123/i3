"use client";

export default function Privacy() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: `We collect information you provide directly to us, such as when you create an account, update your profile, or communicate with us. This includes:

• Personal Information: Name, email address, phone number, company information
• Profile Information: Professional background, investment preferences, startup details
• Communication Data: Messages, feedback, and support requests
• Usage Information: How you interact with our platform, features used, and time spent`
    },
    {
      title: "2. How We Use Your Information",
      content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Create and manage your account
• Facilitate connections between startups and investors
• Send you technical notices, updates, and support messages
• Respond to your comments, questions, and customer service requests
• Analyze usage patterns to enhance user experience
• Comply with legal obligations and protect our rights`
    },
    {
      title: "3. Information Sharing and Disclosure",
      content: `We may share your information in the following circumstances:

• With Other Users: Profile information may be visible to potential matches
• With Service Providers: Third-party vendors who assist in operating our platform
• For Legal Reasons: When required by law or to protect our rights and safety
• Business Transfers: In connection with mergers, acquisitions, or asset sales
• With Your Consent: When you explicitly agree to share information`
    },
    {
      title: "4. Data Security",
      content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

• Encryption of data in transit and at rest
• Regular security assessments and updates
• Access controls and authentication requirements
• Employee training on data protection practices
• Incident response procedures`
    },
    {
      title: "5. Your Rights and Choices",
      content: `You have certain rights regarding your personal information:

• Access: Request a copy of your personal information
• Correction: Update or correct inaccurate information
• Deletion: Request deletion of your personal information
• Portability: Receive your data in a structured, machine-readable format
• Opt-out: Unsubscribe from marketing communications
• Account Deactivation: Delete your account at any time`
    },
    {
      title: "6. Cookies and Tracking Technologies",
      content: `We use cookies and similar tracking technologies to:

• Remember your preferences and settings
• Analyze site traffic and usage patterns
• Provide personalized content and recommendations
• Improve our services and user experience

You can control cookie settings through your browser preferences.`
    },
    {
      title: "7. International Data Transfers",
      content: `Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international transfers, including:

• Adequacy decisions by relevant authorities
• Standard contractual clauses
• Binding corporate rules
• Certification schemes`
    },
    {
      title: "8. Data Retention",
      content: `We retain your personal information for as long as necessary to:

• Provide our services to you
• Comply with legal obligations
• Resolve disputes and enforce agreements
• Maintain business records

When information is no longer needed, we securely delete or anonymize it.`
    },
    {
      title: "9. Children's Privacy",
      content: `Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected such information, we will take steps to delete it promptly.`
    },
    {
      title: "10. Changes to This Privacy Policy",
      content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by:

• Posting the updated policy on our website
• Sending you an email notification
• Providing notice through our platform

Your continued use of our services after such changes constitutes acceptance of the updated policy.`
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 gradient-blue-radial opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Privacy
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Policy
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="mt-8 text-sm text-muted-foreground">
            Last updated: January 1, 2025
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-card/50 backdrop-blur-md rounded-2xl p-8 border border-border/50 mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment to Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                At i3, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy describes how i3 Platform Inc. ("we," "us," or "our") collects, uses, and shares 
                information about you when you use our platform and services.
              </p>
            </div>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="bg-card/30 backdrop-blur-md rounded-xl p-8 border border-border/30">
                  <h3 className="text-xl font-bold text-foreground mb-4">{section.title}</h3>
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            {/* GDPR & CCPA Compliance */}
            <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Regulatory Compliance</h3>
              <p className="text-muted-foreground mb-4">
                We comply with applicable data protection regulations, including:
              </p>
              <ul className="text-muted-foreground space-y-2 mb-6">
                <li>• General Data Protection Regulation (GDPR) for EU residents</li>
                <li>• California Consumer Privacy Act (CCPA) for California residents</li>
                <li>• Other applicable local and international privacy laws</li>
              </ul>
              <p className="text-muted-foreground">
                If you have specific rights under these regulations, please contact us using the information below.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mt-12 bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Contact Our Privacy Team</h3>
              <p className="text-muted-foreground mb-6">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: privacy@i3platform.com</p>
                <p>Data Protection Officer: dpo@i3platform.com</p>
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