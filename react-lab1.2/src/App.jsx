
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
function App() {

  console.log(stories[0]);

  return (
    <div>
      <h1>Hacker News Stories</h1>
      <Header />
      <Search />
      <List /> 
       
    </div>
  );
}

export default App;

function List() {
  return (
    <div>
      {stories.map((story) => {
        return (
          <div key={story.objectID}>
            <h3>
              <a href={story.url} target="_blank" rel="noreferrer">
                {story.title}
              </a>
            </h3>
            <p>Author: {story.author}</p>
            <span>Points: {story.points} </span>
            <span>Comments: {story.num_comments}</span>
          </div>
        );
      })}
    </div>
  );
}
function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />
    </div>
  );
}
function Header() {
  return <h1>My Hacker News App 🚀</h1>;
}
/*
Reflection:

1. What does App do?
It organizes and renders main components.

2. What does List do?
It displays the list of stories.

3. What does Search do?
It displays the search input.

4. Why cleaner?
Because each component has one responsibility.
*/