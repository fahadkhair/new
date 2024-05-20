const users = [];

function switchTab(tab) {
    if (tab === "btn-add-project") {
        document.getElementById("form-add-project").className = " ";
        document.getElementById("list-project").className = "hidden";
    }
    else {
        document.getElementById("form-add-project").className = "hidden";
        document.getElementById("list-project").className = "";
    }
}

function addProject() {
    let project = document.getElementById("project").value;
    let awardee = document.getElementById("awardee").value;
    let awardPrice = document.getElementById("a-price").value;
    let bOperator = document.getElementById("b-operator").value;
    let qOperator = document.getElementById("q-operator").value;
    let vPrice = document.getElementById("vendor-price").value;
    let tiiPrice = document.getElementById("tii-price").value;
    let difference = document.getElementById("difference").value;
    let reason = document.getElementById("reason").value;

    users.push({ project, awardee, awardPrice, bOperator, qOperator, vPrice, tiiPrice, difference, reason });

    // Clear input fields
    document.getElementById("project").value = "";
    document.getElementById("awardee").value = "";
    document.getElementById("a-price").value = "";
    document.getElementById("b-operator").value = "";
    document.getElementById("q-operator").value = "";
    document.getElementById("vendor-price").value = "";
    document.getElementById("tii-price").value = "";
    document.getElementById("difference").value = "";
    document.getElementById("reason").value = "";

    const record = document.createElement('tr');
    record.innerHTML = `
    <td> ${project} </td>
    <td> ${awardee} </td>
    <td> ${awardPrice} </td>
    <td> ${bOperator} </td>
    <td> ${qOperator} </td>
    <td> ${vPrice} </td>
    <td> ${tiiPrice} </td>
    <td> ${difference}</td>
    <td> ${reason}</td>
    `;
    document.getElementById("table").appendChild(record);

    switchTab("list-project");

    // Store the updated users array in localStorage
    localStorage.setItem("users", JSON.stringify(users));
}

function onLoad() {
    // Retrieve the users array from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users"));

    if (storedUsers) {
        storedUsers.forEach(user => {
            const record = document.createElement("tr");
            record.innerHTML = `
            <td> ${user.project} </td>
            <td> ${user.awardee} </td>
            <td> ${user.awardPrice} </td>
            <td> ${user.bOperator} </td>
            <td> ${user.qOperator} </td>
            <td> ${user.vPrice}</td>
            <td> ${user.tiiPrice}</td>
            <td> ${user.difference}</td>
            <td> ${user.reason}</td>
            `;

            document.getElementById("table").appendChild(record);
        });
    }
}

// Call the onLoad function when the page loads
window.onload = onLoad;