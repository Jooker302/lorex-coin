import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      image: '/john-doe.jpg', // Replace with actual image path
    },
    {
      name: 'Jane Smith',
      image: '/jane-smith.jpg', // Replace with actual image path
    },
    // Add more team members
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-lg shadow-lg mb-2"
              />
              <p className="text-gray-800 font-semibold">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
