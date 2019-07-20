  // Your web app's Firebase configuration

  var firebaseConfig = {
    apiKey: "AIzaSyCmvFbprhWtQxgcy8tUs1ihinzBgvmnxAk",
    authDomain: "eats-and-treats.firebaseapp.com",
    databaseURL: "https://eats-and-treats.firebaseio.com",
    projectId: "eats-and-treats",
    storageBucket: "eats-and-treats.appspot.com",
    messagingSenderId: "128448353045",
    appId: "1:128448353045:web:f2aa2e4d6be8699b"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

// creat a collection(On SQL) (table(SQL)) in our firebase data base 

  var users = firebase.database().ref();

document.getElementById("send").addEventListener('click',handleSubmit);

function handleSubmit(event){

    event.preventDefault();
    var name= document.getElementById("name").value;
    var idea = document.getElementById("idea").value;
 
  

   /*!console.log(firstName,lastName,age,email);*/

   saveUser(name,idea);

}

function saveUser(name,idea){

    var newUser = users.push();
    newUser.set({

        name   : name,
        idea   : idea,
       

    })

    document.getElementById("name").value="";
    document.getElementById("idea").value="";


    alert(" Thanks!");

}


