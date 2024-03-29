// Adicionar os seus links do Firebase 
const firebaseConfig = {
    apiKey: "AIzaSyA6ePJ-DHUV3MmnCthtjzFFPgFzD4OeM4g",
    authDomain: "vamosconversar-c7842.firebaseapp.com",
    databaseURL: "https://vamosconversar-c7842-default-rtdb.firebaseio.com",
    projectId: "vamosconversar-c7842",
    storageBucket: "vamosconversar-c7842.appspot.com",
    messagingSenderId: "452034229430",
    appId: "1:452034229430:web:0e154a11a717d711d9e217"
  };
  
  // Inicializa o Firebase
  firebase.initializeApp(firebaseConfig); 

// Enviar mensagem 
nomeUsuario = localStorage.getItem("nomeUsuario"); 
roomName = localStorage.getItem("roomName"); 

function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(roomName).push({
    name: nomeUsuario,
    message: msg,
    like:0
  })
  document.getElementById("msg").value = "";
}


// Obter os nomes das salas e das mensagens já gravadas no Firebase: 
function getData(){ 
    firebase.database().ref("/"+roomName).on('value', function(snapshot) { 
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
        console.log(firebase_message_id);
        console.log(message_data);
        name = message_data['name'];
        message = message_data['message'];
        like = message_data['like'];
        name_with_tag = "<h4> "+ name + "<img class='user_tick' src='tick.png'></h4>";
        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
        like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Curtidas: "+ like +"</span></button><hr>";
        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;
    } });  }); 
}
getData();

// Dar like nas mensagens 


// Fazer o logout 

