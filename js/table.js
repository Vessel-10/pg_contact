async function loadMessages(){
    try{
      const response = await fetch('../php/fetch.php');
      const data = await response.json();

      const tbody = document.querySelector("#msgTable tbody");
      tbody.innerHTML = "";

      data.forEach(msg => {
        const row = `
          <tr>
            <td>${msg.fullname}</td>
            <td>${msg.emailaddress}</td>
            <td>${msg.txtmessage}</td>
            <td>${msg.date_created}</td>
             <td>${msg.time_created}</td>
          </tr>
        `;
        tbody.innerHTML += row;
      });

    } catch (error) {
      console.error("Error loading messages:", error);
    }
  }

  loadMessages();