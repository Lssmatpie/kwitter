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
  
  // Adicionar salas
  nomeUsuario = localStorage.getItem("nomeUsuario");
  document.getElementById("nomeUsuario").innerHTML = "Olá! Bem vindo(a)," + nomeUsuario + "É otimo te ver denovo!";

  
  function addRoom(){
    roomName = document.getElementById("roomName").value; 
    firebase.database().ref("/").child(roomName).update({purpose: "adicionando nome da sala"}); 
    localStorage.setItem("roomName", roomName); 
    window.location = "mensagem.html"; 
  }
  
  // Obter os nomes das salas já gravadas no Firebase: 
  function getData() {  
    firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function(childSnapshot) { 
        childKey  = childSnapshot.key;
        roomName = childKey;
        console.log("Nome da sala: " + roomName);
        row = "<div class='roomName' id="+ roomName+" onclick='redirectToRoomName(this.id)' >#"+ roomName +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  }
  getData(); 
  
  // Redirecionar para a sala escolhida 
  function redirectToRoomName(name){
    console.log(name); 
    localStorage.setItem("roomName", name); 
    window.location = "mensagem.html"; 
  }
  
  // Fazer o logout 
  function logout(){
    localStorage.removeItem("nomeUsuario"); 
    localStorage.removeItem("roomName"); 
    window.location = "index.html"; 
  }