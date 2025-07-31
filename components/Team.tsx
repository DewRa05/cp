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
    <section
      id="team"
      className="min-h-screen bg-white flex items-center justify-center py-12 px-4"
    >
      <div className="bg-cyan-50 rounded-3xl w-full max-w-6xl p-10 text-center shadow-md">
        <h2 className="text-3xl font-bold text-cyan-600 mb-2">Our Team</h2>
        <p className="text-base text-gray-600 mb-10">
          Menyediakan platform yang berkualitas, komitmen dan terjamin.
        </p>

        <div className="flex flex-wrap justify-center gap-x-16 gap-y-24">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md rounded-xl min-w-[240px] h-[90px] flex items-center pl-20 pr-6"
            >
              <div className="absolute left-[-26px] w-[110px] h-[110px] bg-cyan-400 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={102}
                  height={102}
                  className="w-[102px] h-[102px] rounded-full object-cover"
                />
              </div>
              <div className="text-left ml-8">
                <h4 className="text-cyan-600 font-semibold text-sm">
                  {member.name}
                </h4>
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