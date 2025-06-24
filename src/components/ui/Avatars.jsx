const avatars = [
  {
    name: "Riya Gupta",
    position: "UI Designer",
    src: "/images/avatars/avatar_0_0.jpg",
  },
  {
    name: "Anjali Sharma",
    position: "Frontend Developer",
    src: "/images/avatars/avatar_0_1.jpg",
  },
  {
    name: "Anjali Sharma",
    position: "Project Manager",
    src: "/images/avatars/avatar_0_2.jpg",
  },
  {
    name: "Jon Watson",
    position: "Backend Developer",
    src: "/images/avatars/avatar_0_3.jpg",
  },
  {
    name: "Daniel Lee",
    position: "Data Scientist",
    src: "/images/avatars/avatar_1_0.jpg",
  },
];

const Avatars = () => {
  return (
    <div className="flex space-x-4">
      {avatars.map((avatar, index) => (
        <div
          key={index}
          className="group relative -ms-14 h-18 w-18 md:h-20 md:w-20"
        >
          <img
            src={avatar.src}
            alt={avatar.name}
            className="border-purple h-full w-full rounded-full border-1 object-cover shadow-md transition-transform group-hover:scale-105"
          />
          <div className="absolute bottom-full left-1/2 z-10 mb-2 w-max -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <div className="from-blue to-purple rounded-lg bg-gradient-to-l px-3 py-1 text-center text-sm shadow-lg">
              <p className="font-semibold text-white">{avatar.name}</p>
              <p className="text-xs text-white/90">{avatar.position}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Avatars;
