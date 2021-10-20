var quotes = [
    "\"Do or not Do, there is no try\"<br>- Yoda",
    "\"Easy choices, hard life. Hard choices, easy life\"<br>- Jerzy Gregorek",
    "\"If you correct your mind, the rest of your life will fall into place.\"<br>- Lao Tzu",
    "\"Life is 10% what happens to us and 90% how we react to it.\"<br>- Dennis Kimbro",
    "\"When you reach the end of your rope, tie a knot in it and hang on.\"<br>- Franklin D. Roosevelt",
    "\"There is nothing permanent except change.\"<br>- Heraclitus",
    "\"Learning never exhausts the mind.\"<br>- Leonardo da Vinci",
    "\"If you cannot do great things, do small things in a great way.\"<br>- Napoleon Hill",
    "\"Not all those who wander are lost.\"<br>- J.R.R. Tolkien",
    "\"Very little is needed to make a happy life; it is all within yourself, in your way of thinking.\"<br>- Marcus Aurelius",
    "\"All our dreams can come true, if we have the courage to pursue them.\"<br>- Walt Disney",
    "\"The only true wisdom is in knowing you know nothing.\"<br>- Socrates",
    "\"Everything has beauty, but not everyone sees it.\"<br>- Confucius",
    "\"Education is the most powerful weapon which you can use to change the world.\"<br>- Nelson Mandela",
    "\"One of the most beautiful qualities of true friendship is to understand and to be understood.\"<br>- Lucius A. Seneca",
    "\"It is during our darkest moments that we must focus to see the light.\"<br>- Aristotle",
    "\"Limits, like fear, is often an illusion.\"<br>- Michael Jordan",
    "\"There are no limitations to the mind except those that we ackowledge.\"<br>- Napoleon Hill"
  ]
  
  function newQuote() {
      var randomNumber = Math.floor(Math.random() * quotes.length);
      document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
  
      var thatQuote = quotes[randomNumber].split(' ').join('%20');
  
      thatQuote = thatQuote.split('<br>').join('');
  }
  