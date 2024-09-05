async function getData() {
    let table = document.getElementById('results')
    table.innerHTML = ''

    const url = 'http://localhost:9090/users'
    // const url = 'https://api.github.com/users'
    const rawData = await fetch(url)

    const dataUsers = await rawData.json()
    const usersList = dataUsers.data
    console.log(usersList);

    
    for(const user of usersList) {
        const row = `
            <tr>
                <td>
                    ${user.cpf}
                </td>
                <td>
                    ${user.name}
                </td>
                <td>
                    ${user.last_name}
                </td>
                <td>
                    ${user.email}
                </td>
            </tr>
        `

        table.innerHTML += row
    }
}

document.getElementById('button').addEventListener('click', async() => {
    await getData()
})