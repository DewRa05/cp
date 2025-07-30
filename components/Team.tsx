import Image from "next/image";

const teamMembers = [
  {
    name: "Femy Try K",
    role: "Executive",
    image: "/image/team/org.png",
  },
  {
    name: "Didin",
    role: "CO Founder",
    image: "/image/team/ogr2.png",
  },
  {
    name: "Dede Hermawan",
    role: "Executive",
    image: "/image/team/org3.png",
  },
];

const Team = () => {
  return (
    <section id="team" className="min-h-screen bg-white flex items-center justify-center py-12 px-4">
      <div className="bg-cyan-50 rounded-3xl w-full max-w-6xl p-10 text-center shadow-md">
        <h2 className="text-3xl font-bold text-cyan-600 mb-2">Our Team</h2>
        <p className="text-base text-gray-600 mb-10">
          Menyediakan platform yang berkualitas, komitmen dan terjamin.
        </p>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md rounded-xl min-w-[220px] h-[80px] flex items-center pl-16 pr-4 hover:shadow-lg transition"
            >
              <div className="absolute left-[-26px] w-[64px] h-[64px] bg-cyan-400 rounded-full border-4 border-white flex items-center justify-center shadow">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={58}
                  height={58}
                  className="w-[58px] h-[58px] rounded-full object-cover"
                />
              </div>
              <div className="text-left ml-5">
                <h4 className="text-cyan-600 font-semibold text-sm">{member.name}</h4>
                <p className="text-xs text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
