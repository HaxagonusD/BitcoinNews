function Article({ title, author, publishedAt, content }) {
  return (
    <div>
      <h1>Title: {title}</h1>
      <h3>Author: {author}</h3>
      <p>Date: {publishedAt}</p>
      <p>Content: {content}</p>
    </div>
  );
}

export default Article;
