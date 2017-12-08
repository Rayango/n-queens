/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solutions = []; 
  var board = new Board({n: n});
  var addPiece = function(x) {
    for (var i = 0; i < n; i++) {
      board.togglePiece(x, i);
      if (!board.hasAnyRooksConflicts()) {
        if (x === n - 1) {
          solutions.push(JSON.parse(JSON.stringify(board.rows())));
        } else {
          addPiece(x + 1);
        }    
      }
      board.togglePiece(x, i);
    }
  };
  addPiece(0);


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solutions[0]));
  return solutions[0];
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutions = []; 
  var board = new Board({n: n});
  var addPiece = function(x) {
    for (var i = 0; i < n; i++) {
      board.togglePiece(x, i);
      if (!board.hasAnyRooksConflicts()) {
        if (x === n - 1) {
          solutions.push(JSON.parse(JSON.stringify(board.rows())));
        } else {
          addPiece(x + 1);
        }    
      }
      board.togglePiece(x, i);
    }
  };
  addPiece(0);

  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutions.length);
  return solutions.length;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solutions = []; 
  var board = new Board({n: n});
  
  if (n === 0 || n === 2 || n === 3) {
    return board.rows();
  }
  
  var addPiece = function(x) {
    for (var i = 0; i < n; i++) {
      board.togglePiece(x, i);
      if (!board.hasAnyQueensConflicts()) {
        if (x === n - 1) {
          solutions.push(JSON.parse(JSON.stringify(board.rows())));
        } else {
          addPiece(x + 1);
        }    
      }
      board.togglePiece(x, i);
    }
  };
  addPiece(0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solutions[0]));
  return solutions[0];
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutions = []; 
  var board = new Board({n: n});
  if (n === 0 ) {
    return 1;
  }
  if (n === 2 || n === 3) {
    return 0;
  }
  var addPiece = function(x) {
    for (var i = 0; i < n; i++) {
      board.togglePiece(x, i);
      if (!board.hasAnyQueensConflicts()) {
        if (x === n - 1) {
          solutions.push(JSON.parse(JSON.stringify(board.rows())));
        } else {
          addPiece(x + 1);
        }    
      }
      board.togglePiece(x, i);
    }
  };
  addPiece(0);
  console.log('Number of solutions for ' + n + ' queens:', solutions.length);
  return solutions.length;
};
