var myArray = [
    { 'rank': '1', 'website': 'google.com', 'carbon': '0.111989' },
    { 'rank': '2', 'website': 'gmail.com', 'carbon': '1.11989' },
    { 'rank': '3', 'website': 'yahoo.com', 'carbon': '0.141990' },
    { 'rank': '4', 'website': 'outlook.com', 'carbon': '1.291993' },
    { 'rank': '5', 'website': 'instagram.com', 'carbon': '0.3121991' },
    { 'rank': '6', 'website': 'youtube.com', 'carbon': '1.0311995' },
]

buildTable(myArray)



function buildTable(data) {
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                    <td>${data[i].rank}</td>
                    <td>${data[i].website}</td>
                    <td>${data[i].carbon}</td>
              </tr>`
        table.innerHTML += row


    }
}
