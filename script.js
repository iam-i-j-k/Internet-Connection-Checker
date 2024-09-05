window.addEventListener("load",checkConn);

function checkConn()
{
    const Text = document.getElementById("statusText");
    const Add = document.getElementById("statAdd");
    const Net = document.getElementById("statNet");

    Text.textContent = 'Checking....';

    if(navigator.onLine)
    {
        fetch('https://api.ipify.org?format=json')
        .then((response)=> response.json())
        .then((data)=>{
            Add.textContent = data.ip;
            Text.textContent = 'Connected';

            const connection = navigator.connection;

            const networkStrength = connection ? connection.downlink +'Mbps' : 'Unknown';
            Net.textContent = networkStrength;


        })
        .catch(()=>{
            Text.textContent = 'Disconnected';
            Add.textContent = '-';
            Net.textContent = '-';
        })
    }
    else
    {
        Text.textContent = 'Disconnected';
        Add.textContent = '-';
        Net.textContent = '-';
    }
}