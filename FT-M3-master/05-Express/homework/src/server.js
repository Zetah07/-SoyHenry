// const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
const posts = [];

function idGenerator() {
  let id = 1;
  return function () {
    id++;
    return id;
  };
}

const generatorID = idGenerator();

const server = express();
// to enable parsing of json bodies for post requests
// server.use(express.json());

// TODO: your code to handle requests
server.post("/posts", (req, res) => {
  const { author, title, contents } = req.body;

  if (!author || !title || !contents)
    res.status(STATUS_USER_ERROR).json({
      error: "No se recibieron los parámetros necesarios para crear el Post",
    });

  const newPost = { ...req.body, id: generatorID() };
  posts.push(newPost);
  res.json(newPost);
});

server.get("/posts/author/:author", (req, res) => {
  const { title, contents } = req.body;

  if (!title || !contents || !req.params.author)
    res.status(STATUS_USER_ERROR).json({
      error: "No se recibieron los parámetros necesarios para crear el Post",
    });

  const newPost = { ...req.body, ...req.params, id: generatorID() };
  posts.push(newPost);
  res.json(newPost);
});

server.get("/posts", (req, res) => {
  if (req.query.term) {
    const filteredPosts = posts.filter((post) => {
      post.title.includes(req.query.term) ||
        post.contents.includes(req.query.term);
    });
    res.json(filteredPosts);
  }

  res.json(posts);
});

server.get("/posts/:author", (req, res) => {
  const postByAuthor = posts.filter(
    (post) => post.author === req.params.author
  );

  if (postByAuthor.length) res.send(postByAuthor);
  else
    res
      .status(STATUS_USER_ERROR)
      .json({ error: "No existe ningun post del autor indicado" });
});

server.get("/posts/:author/:title", (req, res) => {
  const { author, tilte } = req.params;
  const postByAuthorAndTitle = posts.filter(
    (post) => post.author === author && post.title === title
  );

  if (postByAuthorAndTitle.length) res.send(postByAuthorAndTitle);
  else
    res
      .status(STATUS_USER_ERROR)
      .json({
        error: "No existe ningun post con dicho titulo y autor indicado",
      });
});

server.put("/posts", (req, res) => {
  const { id, title, contents } = req.body;

  if (!id || !title || !contents)
    res
      .status(STATUS_USER_ERROR)
      .json({
        error: "No se recibieron los parámetros necesarios para modificar el Post",
      });

    const postToModify = posts.find((post) => post.id === id);
    if (!postToModify)
    res.status(STATUS_USER_ERROR).json({
        error: "no existe un Post con ese ID",

});

postToModify.title = title;
postToModify.contents = contents;
res.json(postToModify);
});

server.delete("/posts", (req, res) => {
    const { id } = req.body;
    if (!id)
    res.status(STATUS_USER_ERROR).json({
        error: "No se recibieron los parámetros necesarios para eliminar el Post",
});
const postToDelete = posts.find((post) => post.id === id);

if (!postToDelete)
    res.status(STATUS_USER_ERROR).json({
        error: "No existe un Post con ese ID",
});

postToDelete.splice(posts.indexOf(postToDelete), 1);
res.json({success: true});
});

server.delete( "/author", (req, res) =>{
    const { author } = req.body;
    if (!author)
    res.status(STATUS_USER_ERROR).json({
        error: "No se recibieron los parámetros necesarios para eliminar el Post",
});

const postsByAuthor = posts.filter((post) => post.author === author)

if (!postsByAuthor.length)
    res.status(STATUS_USER_ERROR).json({
        error: "No existe el autor indicado",
});

postsByAuthor.forEach((post) => {
    post.splice(posts.indexOf(post), 1);
});
res.json({postsByAuthor});
})


module.exports = { posts, server };
