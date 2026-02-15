import React from "react";
import Card from "./components/card";

function App() {
  const jobOpenings = [
    {
      id: 1,
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Amazon",
      timeAgo: "5 days ago",
      datePosted: "2026-02-07",
      role: "Senior UI/UX Designer",
      tag1: "Part-time",
      tag2: "Senior Level",
      salary: "$120/hr",
      location: "Mumbai, India",
      applyLink: "#",
      isSaved: false,
    },
    {
      id: 2,
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      companyName: "Microsoft",
      timeAgo: "2 days ago",
      datePosted: "2026-02-10",
      role: "Frontend Developer",
      tag1: "Full-time",
      tag2: "Mid Level",
      salary: "$90/hr",
      location: "Bangalore, India",
      applyLink: "#",
      isSaved: false,
    },
    {
      id: 3,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      companyName: "Google",
      timeAgo: "1 day ago",
      datePosted: "2026-02-11",
      role: "Product Designer",
      tag1: "Remote",
      tag2: "Senior Level",
      salary: "$110/hr",
      location: "Remote",
      applyLink: "#",
      isSaved: true,
    },
    {
      id: 4,
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      companyName: "Netflix",
      timeAgo: "3 days ago",
      datePosted: "2026-02-09",
      role: "UI Engineer",
      tag1: "Contract",
      tag2: "Junior Level",
      salary: "$70/hr",
      location: "Hyderabad, India",
      applyLink: "#",
      isSaved: false,
    },
  ];

  return (
    <div className="page">
      {jobOpenings.map((el, idx) => {
        return (
          <div key={idx}>
            <Card
              logo={el.logo}
              companyName={el.companyName}
              timeAgo={el.timeAgo}
              datePosted={el.datePosted}
              role={el.role}
              tag1={el.tag1}
              tag2={el.tag2}
              salary={el.salary}
              location={el.location}
              applyLink={el.applyLink}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
