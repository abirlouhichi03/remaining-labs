/*
Story object structure:

- objectID: unique identifier
- title: article title
- url: link to article
- author: who posted it
- points: popularity score
- num_comments: number of comments

React key: objectID
Reason: it is unique and stable

Why realistic?
Because APIs return structured JSON data like this.
*/


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

export default App;

/*
Reflection:

1. Why is map() essential?
Because it allows us to transform arrays into UI elements dynamically.

2. Why is objectID the correct key?
Because it is unique and stable for each item.

3. What changes with real API?
Data will be fetched dynamically instead of hardcoded.
*/