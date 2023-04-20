function search(){
    let searchbox=document.getElementById('textbox').value.toUpperCase();
    let alllist=document.getElementById("list-items");
    let item=document.querySelectorAll('.item');
    let pname=alllist.getElementsByTagName('h2')
     
    for(let i=0;pname.length>i;i++)
    {
        let match=item[i].getElementsByTagName('h2')[0];
        // console.log(match);
        if(match){
            // console.log(match.textContent );
            // console.log(match.innerHTML );
            let textvalue=match.textContent ||match.innerHTML
            // console.log(textvalue );
            if(textvalue.toUpperCase().indexOf(searchbox) >-1 )
            {        console.log(textvalue.toUpperCase().indexOf(searchbox));
                item[i].style.display="";

            }

            else{ item[i].style.display="none";}
        }
    }
}