// Initialize game variables
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let winner = null;

// Function to handle player move
function makeMove(index) {
  // Check if the cell is empty and there is no winner yet
  if (!board[index] && !winner) {
    // Update the board and switch players
    board[index] = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    
    // Check for winner
    winner = checkWinner();
    
    // Update the game display
    updateBoard();
    
    // Check if there's a winner
    if (winner) {
      // Display the winner
      alert(`Player ${winner} wins!`);
    } else if (board.every(cell => cell !== '')) {
      // Check for tie
      alert('It\'s a tie!');
    }

    // Update turn info
    updateTurnInfo();
  }
}

// Function to check for a winner
function checkWinner() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]              // Diagonals
  ];

  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}

// Function to update the game display
function updateBoard() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    cell.textContent = board[index];
  });
}

// Function to update turn info
function updateTurnInfo() {
  const turnInfo = document.getElementById('turn');
  turnInfo.textContent = `Turn: Player ${currentPlayer}`;
}

// Function to reset the game
function resetGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  winner = null;
  updateBoard();
  updateTurnInfo();
}

// Initialize the game display
updateBoard();
updateTurnInfo();
