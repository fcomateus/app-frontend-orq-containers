async function getData() {
    const rawData = await fetch('https://api.github.com/users')
    const dataUsers = await rawData.json()
    console.log(dataUsers);

    let table = document.getElementById('results')
    
    for(const user of dataUsers) {
        const row = `
            <tr>
                <td>
                    ${user.id}
                </td>
                <td>
                    ${user.login}
                </td>
                <td>
                    <a href="${user.html_url}" target=_blank>Perfil</a>
                </td>
                <td>
                    <img src="${user.avatar_url}" style="width:30px; height:30px;">
                </td>
            </tr>
        `

        table.innerHTML += row
    }
}

document.getElementById('button').addEventListener('click', async() => {
    await getData()
})