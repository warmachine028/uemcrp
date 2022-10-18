const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    // Get all users and return
    res.status(200).json({ message: 'Get all users' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id', (req, res) => {
  try {
    // Get a user with id and return
    res.status(200).json({ message: 'Get a user' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/', (req, res) => {
  try {
    // Create a new user and return
    res.status(201).json({ message: 'Create a new user' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/:id', (req, res) => {
  try {
    // Edit a user with id and return
    res.status(200).json({ message: 'Update a user' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', (req, res) => {
  try {
    // Delete a user and return
    res.status(200).json({ message: 'Delete a user' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
