
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCCQG_5kE2SUH3ZrvBAJA0N0yhiGxsa21E",
      authDomain: "kwitter-c68cb.firebaseapp.com",
      databaseURL: "https://kwitter-c68cb-default-rtdb.firebaseio.com",
      projectId: "kwitter-c68cb",
      storageBucket: "kwitter-c68cb.appspot.com",
      messagingSenderId: "624807016023",
      appId: "1:624807016023:web:15954cd20fd4b43ae89512"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
