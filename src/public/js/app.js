const socket = io();

//permiso navegador por la notificacion
Notification.requestPermission().then(function(result) {
    console.log(result);
  });

function notifyMe(message ="Hi there!") {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification(message);
    }
  
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification(message);
        }
      });
    }
  
    // At last, if the user has denied notifications, and you 
    // want to be respectful there is no need to bother them any more.
  }

socket.on('new-message', data=>{
    notifyMe('nuevo mensaje recibido')
    let list = document.getElementById('list')
     
    const li = document.createElement('li');
    li.classList='list-group-item list-group-item-warning'

    const body = document.createElement('span');
    body.appendChild(document.createTextNode('message: ' + data.Body))
    
    const datafrom = data.from.replace(/[0-9]/g,'x');

    const from = document.createElement('span');
    from.appendChild(document.createTextNode(datafrom))

    const createdAt = document.createElement('span');
    from.appendChild(document.createTextNode(timeago.format(data.createdAt)))


    li.appendChild(body)
    li.appendChild(from)
    li.appendChild(createdAt)
    list.prepend(li);
})