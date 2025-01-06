document.getElementById("availabilityForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    if (new Date(checkin) >= new Date(checkout)) {
        alert("La data di partenza deve essere successiva alla data di arrivo.");
    } else {
        alert("Prenotazione inviata con successo!");
    }
});
