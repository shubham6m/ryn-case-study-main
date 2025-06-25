// src/components/Experience.jsx
import React from 'react';

const Experience = () => {
  const experienceData = [
    { title: 'Lead Product Designer', company: 'Rynflow' },
    { title: 'Intern Designer', company: 'CW Creative' },
    { title: 'UI Designer', company: 'Doradesign' },
    { title: 'Frontend Developer', company: 'OpenCulture' }
  ];

  return (
    <section className="container py-5">
      <h2 className="mb-4 text-white">✴ Experience</h2>
      <div className="table-responsive">
        <table className="table table-dark table-borderless align-middle">
          <tbody>
            {experienceData.map((exp, index) => (
              <tr key={index}>
                <td className="text-start">{exp.title}</td>
                <td className="text-end">{exp.company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Experience;
