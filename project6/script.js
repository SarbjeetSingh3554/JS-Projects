const insert=document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
    insert.innerHTML=`
    <div class='color'>
        <table>
            <tr>
                <td>Key Pressed</td>
                <td>Key code</td>
            </tr>
            <tr>
                <td>${e.key===' '?'Space':e.key}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    </div>
    `
})