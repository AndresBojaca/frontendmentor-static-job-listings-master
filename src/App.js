// import { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import data from "./assets/data.json";
import JobCard from "./components/JobCard/JobCardComponent";
import SearchCard from "./components/SearchCard/SearchCardComponent";

function App() {

  let tags = useSelector((state) => state.tags);
  // Filter Tags
  const filters = tags.length > 0 ? tags : [];
  let filteredArr = data.filter((user) => {
    // Concat keys and make tags
    const tags = [user.role, user.level].concat(user.tools, user.languages);
    return filters.every(f => tags.includes(f));
  });
  return (
    <div className="App">
      <nav className="navbar"></nav>
      <main>
      <SearchCard/>
        {
          filteredArr.map((job) =>
            <JobCard 
              key={job.id} 
              new={job.new}
              featured={job.featured}
              postedAt={job.postedAt}
              contract={job.contract}
              location={job.location}
              logo={job.logo} 
              company={job.company} 
              role={job.role}
              position={job.position}
              level={job.level}
              tools={job.tools}
              languages={job.languages}
            />
          )
        }
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/AndresBojaca/">@AndresBojaca</a>.
      </div>
      </main>
    </div>
  );
}

export default App;
