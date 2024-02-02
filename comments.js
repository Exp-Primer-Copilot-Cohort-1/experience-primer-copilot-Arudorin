// Create web server
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Set up the public directory
app.use(express.static('public'));

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Path: comments.js
// Create a new comment
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  // Save the comment to the database
  res.status(201).send('Comment saved');
});

// Path: comments.js
// Get all comments
app.get('/comments', (req, res) => {
  // Get all comments from the database
  res.status(200).send('Comments');
});

// Path: comments.js
// Delete a comment
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  // Delete the comment from the database
  res.status(204).send('Comment deleted');
});

// Path: comments.js
// Update a comment
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = req.body.comment;
  // Update the comment in the database
  res.status(200).send('Comment updated');
});

// Path: comments.js
// Get a specific comment
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  // Get the specific comment from the database
  res.status(200).send('Comment');
});

// Path: comments.js
// Create a new comment
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  // Save the comment to the database
  res.status(201).send('Comment saved');
});

// Path: comments.js
// Get all comments
app.get('/comments', (req, res) => {
  // Get all comments from the database
  res.status(200).send('Comments');
});

// Path: comments.js
// Delete a comment
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  // Delete the comment from the database
  res.status(204).send('Comment deleted');
}