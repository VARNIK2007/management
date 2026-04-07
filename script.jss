function saveData() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let mode = document.getElementById("mode").value;
    let purpose = document.getElementById("purpose").value;

    let data = {
        name,
        roll,
        mode,
        purpose,
        date: new Date().toLocaleString()
    };

    let records = JSON.parse(localStorage.getItem("students")) || [];
    records.push(data);

    localStorage.setItem("students", JSON.stringify(records));

    alert("Saved Successfully ✅");

    // clear inputs
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("purpose").value = "";
}

function viewHistory() {
    let records = JSON.parse(localStorage.getItem("students")) || [];

    let output = "";

    records.forEach((item, index) => {
        output += `
            <p>
            ${index+1}. ${item.name} | ${item.roll} | ${item.mode} | ${item.purpose} | ${item.date}
            </p>
        `;
    });

    document.getElementById("history").innerHTML = output;
}
