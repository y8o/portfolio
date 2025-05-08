// app/resume/page.tsx
import React from 'react';

const ResumePage = () => (
  <main className="min-h-screen bg-amber-50">
    <div className="container mx-auto px-4 py-16">
      {/* You can also replace SectionHeading with a custom header here */}
      <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6 text-center">
        Resume
      </h1>

      <div className="mt-12">
        <object
          data="/files/resume.pdf"
          type="application/pdf"
          width="100%"
          height="800px"
        >
          <p>Your browser does not support PDFs. Please download the PDF to view it: <a href="/files/resume.pdf">Download Resume</a>.</p>
        </object>
      </div>
    </div>
  </main>
);

export default ResumePage;
