window.addEventListener("DOMContentLoaded", function() {
    // Get the ball element
    var ball = document.getElementById("ball");
  
    // Set up the ball's initial position
    var ballX = getRandomNumber(0, window.innerWidth - ball.offsetWidth);
    var ballY = getRandomNumber(0, window.innerHeight - ball.offsetHeight);
    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";
  
    // Set up the ball's movement speed
    var speed = 10;
  
    // Listen for keyboard events
    document.addEventListener("keydown", function(event) {
      var keyCode = event.keyCode;

      // Move the ball based on the pressed key
      if (keyCode === 87) { // W key
        ballY -= speed;
      } else if (keyCode === 65) { // A key
        ballX -= speed;
      } else if (keyCode === 83) { // S key
        ballY += speed;
      } else if (keyCode === 68) { // D key
        ballX += speed;
      }
  
      // Restrict the ball movement within the viewport
      ballX = Math.max(0, Math.min(ballX, window.innerWidth - ball.offsetWidth));
      ballY = Math.max(0, Math.min(ballY, window.innerHeight - ball.offsetHeight));
  
      // Update the ball's position
      ball.style.left = ballX + "px";
      ball.style.top = ballY + "px";
    });
  
    // Helper function to generate a random number within a range
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  });
  



// code 2
// window.addEventListener("DOMContentLoaded", () => {
//     const ball = document.getElementById("ball");
//     const { offsetWidth, offsetHeight } = ball;
//     const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  
//     let ballX = getRandomNumber(0, window.innerWidth - offsetWidth);
//     let ballY = getRandomNumber(0, window.innerHeight - offsetHeight);
//     ball.style.left = ballX + "px";
//     ball.style.top = ballY + "px";
  
//     const speed = 10;
//     document.addEventListener("keydown", (event) => {
//       const keyCode = event.keyCode;
//       const keys = { 87: "W", 65: "A", 83: "S", 68: "D" };
//       const movement = { W: [0, -speed], A: [-speed, 0], S: [0, speed], D: [speed, 0] };
  
//       if (keys[keyCode]) {
//         const [deltaX, deltaY] = movement[keys[keyCode]];
//         ballX = Math.max(0, Math.min(ballX + deltaX, window.innerWidth - offsetWidth));
//         ballY = Math.max(0, Math.min(ballY + deltaY, window.innerHeight - offsetHeight));
//         ball.style.left = ballX + "px";
//         ball.style.top = ballY + "px";
//       }
//     });
//   });
  