var today = new Date()
var dd = String(today.getDate()).padStart(2, '0')
var mm = String(today.getMonth() + 1).padStart(2, '0')
var yyyy = today.getFullYear()

const API_KEY = 'c9a3e9848ff844aba2267c2cf8d34b56'
const url = 'https://holidays.abstractapi.com/v1/?api_key=' + API_KEY + '&country=US&year=' + yyyy + '&month=' + mm + '&day=' + dd 

function getHolidays() {
    /*global fetch*/
    fetch(url)
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            console.log(json)
            if (json.length > 0) {
                let holidaySection = document.getElementById("holidays")
                let holidayList = '<p><strong>The following holidays may affect your local Pickle Ballin\' hours today:</strong><p><ul style="list-style-type:none;">'
                for (let i = 0; i < json.length; ++i) {
                    holidayList += '<li style="margin:1em;"><strong>' + json[i].name + '</strong> -- this is a ' + json[i].type + ' holiday observed on ' + json[i].date +
                    ' in the following location(s): ' + json[i].location + '</li>'
                }
                holidayList += '</ul>'
                holidaySection.innerHTML = holidayList
            }
        })
}

getHolidays()