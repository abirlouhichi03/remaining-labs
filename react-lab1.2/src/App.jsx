
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
const App = () => {
  return (
    <div>
      <h1>Hacker News Stories</h1>
      <Header />
      <Search />
      <List />
    </div>
  );
};

export default App;

const List = () => (
  <div>
    {stories.map((story) => (
      <div key={story.objectID}>
        <p>{story.title}</p>
      </div>
    ))}
  </div>
);
const Search = () => {

  const handleChange = (event) => {
    console.log(event.target.value);
    console.log("User is typing...");
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />
    </div>
  );
};
const Header = () => {
  return <h1>My Hacker News App 🚀</h1>;
};

/*
Reflection:

1. Concise body:
Used when returning one simple expression.

2. Block body:
Used when we need logic (variables, functions).

3. Event object:
Contains information about the event (input value, target, etc).
*/