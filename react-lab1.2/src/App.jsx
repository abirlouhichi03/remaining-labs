import { useState } from "react";

const App = () => {
  console.log("App rendered");
  
  const stories = [
  {
    objectID: 1,
    title: "React is Awesome",
    url: "https://react.dev",
    author: "Dan",
    points: 120,
    num_comments: 45
  },
  {
    objectID: 2,
    title: "JavaScript Tips",
    url: "https://developer.mozilla.org",
    author: "Sarah",
    points: 80,
    num_comments: 500
  },
  {
  objectID: 3,
  title: "AI is the Future",
  url: "https://openai.com",
  author: "John",
  points: 200,
  num_comments: 60
  }
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredStories = stories.filter((story) =>
  story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Hacker News Stories</h1>
      <List stories={filteredStories} />
      <Header />
      <Search onSearch={handleSearch}/>
    </div>
  );
};

export default App;

const List = ({ stories }) => {
  console.log("List rendered");

  return (
    <div>
      {stories.map((story) => (
        <Item key={story.objectID} story={story} />
      ))}
    </div>
  );
};
const Search = ({ onSearch }) => {
  console.log("Search rendered");
  const handleChange = (event) => {
    console.log(event.target.value);
    console.log("User is typing...");
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        type="text"
        id="search"
        onChange={onSearch}
      />
    </div>
  );
};
const Header = () => {
  return <h1>My Hacker News App 🚀</h1>;
};
const Item = ({ story }) => {
  console.log("Item rendered");
  return (
    <div>
      <p>{story.title}</p>
    </div>
  );
};
/*
1. Props vs State:
Props = passed data
State = internal, changeable data

2. Why lift state?
To share data between components

3. Where filtering?
Inside App (central logic)
*/