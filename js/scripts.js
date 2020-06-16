// Business Logic -----
function Ticket (movieTitle, movieTime, userAge) {
  this.movieTitle = movieTitle;
  this.movieTime = movieTime;
  this.userAge = userAge;
}

// Calculate ticket cost -----
Ticket.prototype.ticketPrice = function() {
  //
  this.price = 10;
  if (this.movieTitle === "new") {
    this.price += 3
  } else if (this.movieTitle === "old") {
    this.price += 1
  }
  if (this.userAge === "adult") {
    this.price += 2
  } else if (this.userAge === "senior") {
    this.price += 1
  } else {
    this.price
  }
  if (this.movieTime === "matinee") {
    this.price += 1
  } else if (this.movieTime === "evening") {
    this.price += 2
  } else {
    this.price
  }
  return this.price
}

// User Interface -----
$(document).ready(function() {
  $("form#ticketMatrix").submit(function(event) {
    event.preventDefault();
    let movieTitle = $("input:radio[name=title]:checked").val();
    let movieTime = $("input:radio[name=time]:checked").val();
    let userAge = $("input:radio[name=time]:checked").val();
  })  
})