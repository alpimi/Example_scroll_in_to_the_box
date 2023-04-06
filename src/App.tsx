function App() {
  const events = [
    {
      name: "Event 1",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, provident iste voluptate voluptatem nostrum maiores eligendi sequi eos dolore necessitatibus laborum odio deserunt aliquam corporis, in doloribus unde deleniti repellendus.",
    },
    {
      name: "Event 2",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, provident iste voluptate voluptatem nostrum maiores eligendi sequi eos dolore necessitatibus laborum odio deserunt aliquam corporis, in doloribus unde deleniti repellendus.",
    },
    {
      name: "Event 3",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, provident iste voluptate voluptatem nostrum maiores eligendi sequi eos dolore necessitatibus laborum odio deserunt aliquam corporis, in doloribus unde deleniti repellendus.",
    },
    {
      name: "Event 4",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, provident iste voluptate voluptatem nostrum maiores eligendi sequi eos dolore necessitatibus laborum odio deserunt aliquam corporis, in doloribus unde deleniti repellendus.",
    },
    {
      name: "Event 5",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, provident iste voluptate voluptatem nostrum maiores eligendi sequi eos dolore necessitatibus laborum odio deserunt aliquam corporis, in doloribus unde deleniti repellendus.",
    },
    {
      name: "Event 6",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, provident iste voluptate voluptatem nostrum maiores eligendi sequi eos dolore necessitatibus laborum odio deserunt aliquam corporis, in doloribus unde deleniti repellendus.",
    },
    {
      name: "Event 7",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, provident iste voluptate voluptatem nostrum maiores eligendi sequi eos dolore necessitatibus laborum odio deserunt aliquam corporis, in doloribus unde deleniti repellendus.",
    },
    {
      name: "Event 8",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, provident iste voluptate voluptatem nostrum maiores eligendi sequi eos dolore necessitatibus laborum odio deserunt aliquam corporis, in doloribus unde deleniti repellendus.",
    },
    {
      name: "Event 9",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, provident iste voluptate voluptatem nostrum maiores eligendi sequi eos dolore necessitatibus laborum odio deserunt aliquam corporis, in doloribus unde deleniti repellendus.",
    },
    {
      name: "Event 10",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, provident iste voluptate voluptatem nostrum maiores eligendi sequi eos dolore necessitatibus laborum odio deserunt aliquam corporis, in doloribus unde deleniti repellendus.",
    },
  ];
  return (
    <div className="md:h-screen bg-gray-400/50 text-blue-200 w-screen text-center text-2xl p-4">
      {/* HEADER TITLE */}
      <h3 className="mb-4">Example scroll in to the box</h3>
      {/* END */}
      {/* CONTENT BOXS */}
      <div className="grid md:grid-cols-2 gap-4 w-full">
        {/* BOX EVENTS */}
        <ul className="order-2 md:order-1 md:max-h-[calc(100vh-80px)] border-[1rem] bg-gray-500/70 border-gray-500/70 shadow-md shadow-black md:overflow-y-auto flex flex-col gap-4">
          {events.map((item, index) => (
            <li
              key={index}
              className="bg-black p-4 list-none w-full flex flex-col lg:flex-row gap-4"
            >
              <h4 className="shrink-0">{item.name}</h4>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
        {/* END */}
        {/* BOX TO WRITE */}
        <div className="order-1 md:order-2 bg-gray-600 min-h-[10rem] shadow-md shadow-black flex items-center justify-center text-black/80 bg-white/90">
          <h3 className="">Writing box</h3>
        </div>
        {/* END */}
      </div>
      {/* END */}
    </div>
  );
}

export default App;
